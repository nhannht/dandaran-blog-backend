export {};
const model = require('../../models/Post');

const controller = async (req, res) => {
  model.findByIdAndDelete(req.params.postId, (error, result) => {
    if (result) {
      res.setHeader(404).send('Cannot find this id');
    } else {
      res.setHeader(200).json(result);
    }
  });
};

module.exports = controller;
