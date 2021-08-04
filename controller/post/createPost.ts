export {};
const model = require('../../models/Post');
import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';
const controller = async (req:CustomRequest, res:CustomResponse) => {
  model.create(req.body, (error: any) => {
    if (error) {
      return res.status(404).json({status: error});
    } else {
      return res.status(200).json({status: 'Sucessful create post'});
    }
  });
};

module.exports = controller;
