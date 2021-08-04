export {};
const model = require('../../models/User');
import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';
const controller = (_req:CustomRequest, res:CustomResponse) => {
  model.deleteMany({}, (error:Error)=>{
    if (error) {
      return res.status(404).json({'status': error.message});
    } else {
      return res.status(200).json({status: 'Successful delete'});
    }
  });
};


module.exports = controller;
