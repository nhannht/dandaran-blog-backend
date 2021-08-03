export {};
const model = require('../../models/Post');

const controller = async (req, res) => {
  model.create(req.body, (error: any, ok) => {
    if (error) {
      return res.status(404).json({status: error});
    } else {
      res.status(200).json(req.body);
    }
  });
};


module.exports = controller;
