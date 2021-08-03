import assert from 'assert';

export {};
const mockingoose = require('mockingoose');
const model = require('../models/Post');
const appEntry = require('../app');
const http = require('http');
const server = http.createServer(appEntry);
const request = require('supertest');
const setUpServer = () => {
  const port = '5000';
  appEntry.set('port', port);
  server.listen(port);
};

const shutDownServer = () => {
  server.close();
};


describe('test all post api', () => {
  beforeEach(() => setUpServer());
  afterEach(()=> shutDownServer());
  test('test create post, should return 1 post', async () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      title: 'name',
      body: 'this is obdy',
    };

    /**
     * Test real behaviour
     */
    mockingoose(model).toReturn(_doc, 'save');
    const response = await request(server).post('/posts/create').send(_doc);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(_doc);
    /**
     * Test mock behaviour
     */

    mockingoose(model).toReturn('1', 'save');
    const response2 = await request(server).post('/posts/create').send(_doc);
    expect(response2.status).toBe(200);
    expect(response2.body).toEqual(1);
  });
});
