export {};
const model = require('../../models/User');
import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';
const controller = async (req:CustomRequest, res:CustomResponse) => {
  model.create(req.body, (error: Error) => {
    if (error) {
      return res.status(404).send('something when wrong');
    } else {
      return res.status(200).send('successful create user');
    }
  });
};
module.exports = controller;
