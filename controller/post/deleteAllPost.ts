export {};
const model = require('../../models/Post');

const controller = (req, res) => {
  model.deleteMany({}, (error) => {
    if (error) {
      res.send('Something when wrong');
    }
  });
};


module.exports = controller;
