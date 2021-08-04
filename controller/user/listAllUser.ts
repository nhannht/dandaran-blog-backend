import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';

export {};
const model = require('../../models/User');
const controller = async (_req:CustomRequest, res:CustomResponse) => {
  model.find({}, (error: Error, posts: any) => {
    if (error) {
      return res.status(404).send(error.message);
    } else {
      return res.status(200).json({status: posts});
    }
  });
};
module.exports = controller;
