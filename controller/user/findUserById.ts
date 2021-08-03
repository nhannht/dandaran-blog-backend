export {};
const model = require('../../models/User');

const controller = async (req: any, res: any) => {
  model.findOne({_id: req.params.userId}, (error: any, post: any) => {
    if (error) {
      res.status(400);
    } else {
      res.json(post);
    }
  });
};

module.exports = controller;
