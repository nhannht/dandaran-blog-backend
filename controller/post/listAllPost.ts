export {};
const model = require('../../models/Post');
const controller = async (req: any, res: any) => {
  model.find({}, (error: any, posts: any) => {
    if (error) {
      res.send(error);
    } else {
      res.json(posts);
    }
  });
};
module.exports = controller;
