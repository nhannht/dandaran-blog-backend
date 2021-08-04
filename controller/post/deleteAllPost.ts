export {};
const model = require('../../models/Post');
import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';
const controller = (_req:CustomRequest, res:CustomResponse) => {
  model.deleteMany({}, (error: unknown) => {
    if (error) {
      return res.status(404).json({status: 'Something went wrong'});
    } else {
      return res.status(200).json({status: 'Delete all post'});
    }
  });
};


module.exports = controller;
