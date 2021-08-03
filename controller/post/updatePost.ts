export {};
const model = require('../../models/Post');

const controller = async (req, res) => {
  model.findByIdAndUpdate(req.params.postId, req.body, (error, newpost)=> {
    if (error) {
      res.send(error);
      res.sendStatus(404);
    } else {
      res.json(newpost);
    }
  });
};
module.exports = controller;
