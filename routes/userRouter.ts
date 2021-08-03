export {};
const express = require('express');
const router = express.Router();
const controllerListAllUser = require('../controller/user/listAllUser');
const controllerFindOneUser = require('../controller/user/findUserById');
const controllerCreateUSer = require('../controller/user/createUser');
const controllerDeleteUser = require('../controller/user/deleteUserWithId');
const controllerLogin = require('../controller/user/checkLogin');
const middleWareStopIfAuth = require('../middlewares/stopIfNotAuth');
router.get('/', controllerListAllUser);

router.get('/:userId', controllerFindOneUser);
router.post('/signup', controllerCreateUSer);
router.post('/delete/:userId', controllerDeleteUser);
router.post('/login', middleWareStopIfAuth, controllerLogin);
module.exports = router;
