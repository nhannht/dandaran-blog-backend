export {};
const model = require('../models/User');

const controller = async (req, res) => {
  model.create(req.body, (error: any, result: any) => {
    if (error) {
      res.status(404);
    } else {
      res.json(req.body);
    }
  });
};
module.exports = controller;
