export {};
const model = require('../models/Post');

const controller = async (req, res) => {
  model.create(req.body, (error: any, result: any) => {
    console.log(req.body);
    res.writeHead(404);
    res.end('Successful create post');
  });
};


module.exports = controller;
