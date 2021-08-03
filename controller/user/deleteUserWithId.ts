export {};
const model = require('../../models/User');

const controller = async (req, res ) => {
  model.findByIdAndDelete(req.params.userId, (error: any, result: any) => {
    if (result) {
      res.setHeader(404).send('Cannot find this id');
    } else {
      res.setHeader(200).json(result);
    }
  });
};

module.exports = controller;
