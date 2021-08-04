import {NextFunction} from 'express';

export {};
import {CustomRequest} from '../interface/customRequest';
import {CustomResponse} from '../interface/customResponse';
const middleWare = (req:CustomRequest, res:CustomResponse, next:NextFunction) => {
  if (! req.session.User ) {
    return res.status(404).send('Required login');
  }
  next();
};
module.exports = middleWare;
