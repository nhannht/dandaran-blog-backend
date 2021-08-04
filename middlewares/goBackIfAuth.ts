export {};
import {NextFunction} from 'express';
import {CustomRequest} from '../interface/customRequest';
import {CustomResponse} from '../interface/customResponse';
const middleWare = (req:CustomRequest, res:CustomResponse, next:NextFunction) => {
  if (req.session.userId) {
    res.redirect('/');
  }
  next();
};
module.exports = middleWare;
