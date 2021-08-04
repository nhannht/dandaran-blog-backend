import {CustomRequest} from '../../interface/customRequest';
import {CustomResponse} from '../../interface/customResponse';

export {};
const model = require('../../models/User');


const controller = async (req: CustomRequest, res: CustomResponse) => {
  model.findByIdAndDelete(req.params.userId, (error: any) => {
    if (error) {
      return res.status(404).send('Cannot find this id');
    } else {
      return res.status(200).json({status: 'Successful delete'});
    }
  });
};

module.exports = controller;
