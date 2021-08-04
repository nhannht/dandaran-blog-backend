export {};
import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';
const controller = (req:CustomRequest, res:CustomResponse, error: any) => {
  if (error) {
    return res.status(404).json({status: error});
  } else {
    req.session.destroy();
    return res.status(200).json({status: 'Successful log out'});
  }
};
module.exports = controller;
