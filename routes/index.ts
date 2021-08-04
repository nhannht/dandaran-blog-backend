const expressIndex = require('express');
const routerIndex = expressIndex.Router();
import {CustomRequest} from '../interface/customRequest';
import {CustomResponse} from '../interface/customResponse';
/* GET home page. */
routerIndex.get('/', function( _req:CustomRequest, res:CustomResponse) {
  res.render('index', {title: 'Express'});
});

module.exports = routerIndex;
