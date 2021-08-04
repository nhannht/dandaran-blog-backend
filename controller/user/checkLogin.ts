export {};
const model = require('../../models/User');
const bcrypt = require('bcrypt');
import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';
const controller = (req:CustomRequest, res:CustomResponse) => {
  model.findOne({username: req.body.username}, ( user: { password: unknown; _id: unknown; })=> {
    if (user) {
      bcrypt.compare(req.body.password, user.password, ( same: unknown) => {
        if (same) {
          req.session.User = user._id;
          return res.status(200).json({status: 'Successful login'});
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
