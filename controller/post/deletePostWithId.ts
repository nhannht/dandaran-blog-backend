export {};

import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';
const model = require('../../models/Post');

const controller = async (req:CustomRequest, res:CustomResponse) => {
  model.findByIdAndDelete(req.params.postId, (error: any) => {
    if (error) {
      return res.status(404).send('Cannot find this id');
    } else {
      return res.status(200).json({status: 'ok'});
    }
  });
};

module.exports = controller;
