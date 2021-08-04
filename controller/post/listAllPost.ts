import {CustomRequest} from '../../interface/customRequest';

export {};
const model = require('../../models/Post');
import {CustomResponse} from '../../interface/customResponse';
const controller = async (_req:CustomRequest, res: CustomResponse) => {
  model.find({}, (error: Error, posts: any) => {
    if (error) {
      return res.status(404).send(error.message);
    } else {
      return res.status(200).json({status: posts});
    }
  });
};
module.exports = controller;
