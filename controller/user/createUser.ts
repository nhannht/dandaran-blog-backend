export {};
const model = require('../../models/User');

const controller = async (req, res) => {
  model.create(req.body, (error: any, result: any) => {
    if (error) {
      res.status(404);
      res.send('something when wrong');
    } else {
      res.send('successful create user');
    }
  });
};
module.exports = controller;
