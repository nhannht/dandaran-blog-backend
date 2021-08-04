export {};
const model = require('../../models/User');

const controller = async (req: any, res: any) => {
  model.findOne({_id: req.params.userId}, (error: Error, post: unknown) => {
    if (error) {
      return res.status(404).send(error.message);
    } else {
      return res.status(200).json({status: post});
    }
  });
};

module.exports = controller;
