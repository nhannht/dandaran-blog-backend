const expressIndex = require('express');
const routerIndex = expressIndex.Router();

/* GET home page. */
routerIndex.get('/', function(req: any, res: { render: (arg0: string, arg1: { title: string; }) => void; }, next: any) {
  res.render('index', {title: 'Express' });
});

module.exports = routerIndex;
