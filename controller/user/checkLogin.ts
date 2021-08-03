export {};
const model = require('../../models/User');
const bcrypt = require('bcrypt');

const controller = (req, res) => {
  model.findOne({username: req.body.username}, (error, user)=> {
    if (user) {
      bcrypt.compare(req.body.password, user.password, (error, same) => {
        if (same) {
          req.session.User = user._id;
          res.json({status: 'Successful login'});
        } else {
          return res.status(404).json({status: 'Wrong password'});
        }
      });
    } else {
      return res.status(404).json({status: 'Cannot found this username'});
    }
  });
};
module.exports = controller;
