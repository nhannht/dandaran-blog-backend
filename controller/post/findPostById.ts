export {};
const model = require('../../models/Post');

const controller = async (req: any, res: any) => {
  model.findOne({_id: req.params.postId}, (error: any, post: any) => {
    if (error) {
      res.setHeader(400).send('NotFound');
    } else {
      res.json(post);
    }
  });
};

module.exports = controller;
