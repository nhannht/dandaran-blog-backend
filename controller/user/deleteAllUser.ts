export {};
const model = require('../../models/User');

const controller = (req, res) => {
  model.deleteMany({}, (error, result)=>{
    res.end();
  });
};


module.exports = controller;
