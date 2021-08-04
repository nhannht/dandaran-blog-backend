export {};
const model = require('../../models/Post');
import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';
const controller = async (req:CustomRequest, res:CustomResponse) => {
  model.findByIdAndUpdate(req.params.postId, req.body, (error:Error, newpost: JSON)=> {
    if (error) {
      return res.status(404).json({status: 'Dont find any post with this id'});
    } else {
      return res.status(200).json({status: newpost});
    }
  });
};
module.exports = controller;
