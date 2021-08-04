export {};
const appEntry = require('../app');
const request = require('supertest');
// Need to import this module event we dont use it directly
const mockingoose = require('mockingoose');


describe('test all post api end point', () => {
  test('test create post, should return 1 post', async () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      title: 'name',
      body: 'this is obdy',
    };

    /**
     * Test real behaviour
     */
    const response = await request(appEntry).post('/posts/create').send(_doc);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(_doc);
  });

  test('test delete all post and 1 post', async () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      title: 'name',
      body: 'this is obdy',
    };

    /**
     * Test real behaviour
     */
    const responseFromCreate = await request(appEntry).post('/posts/create').send(_doc);
    expect(responseFromCreate.status).toBe(200);
    const responseFromDeleteAll = await request(appEntry).get('/posts/deleteAll');
    expect(responseFromDeleteAll.status).toEqual(200);
    expect(responseFromDeleteAll.body).toEqual({status: 'Delete all post'});

    const responseFromCreate2 = await request(appEntry).post('/posts/create').send(_doc);
    expect(responseFromCreate2.status).toBe(200);
    const responseFromDeleteOneDocument = await request(appEntry).get('/posts/delete/'+_doc._id);
    expect(responseFromDeleteOneDocument.status).toEqual(200);
    expect(responseFromDeleteOneDocument.body).toEqual({status: 'ok'});
  });
});
