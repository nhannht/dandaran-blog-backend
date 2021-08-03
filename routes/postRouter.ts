export {};
const express = require('express');
const router = express.Router();
const controllerListAllPost = require('../controller/post/listAllPost');
const controllerFindOnePost = require('../controller/user/findUserById');
const controllerCreatePost = require('../controller/post/createPost');
const controllerUploadImage = require('../controller/post/createPostWithImage');
const controlerDeletePost = require('../controller/post/deletePostWithId');
router.get('/', controllerListAllPost);
router.post('/create', controllerCreatePost);
// router.post('/create', controllerUploadImage);
router.post('/delete/:postId', controlerDeletePost);
router.get('/:postId', controllerFindOnePost);
module.exports = router;
