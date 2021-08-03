export {};
const model = require('../../models/User');
const controller = async (req: any, res: any) => {
  model.find({}, (error: any, posts: any) => {
    res.json(posts);
  });
};
module.exports = controller;
