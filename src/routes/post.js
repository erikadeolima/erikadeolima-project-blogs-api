const express = require('express');
const postController = require('../controllers/post.controller');
const authorizationMiddleware = require('../middlewares/authorization/authorization.middleware');
const { postMiddleware } = require('../middlewares/post/post.middleware');

const postRouter = express.Router();

postRouter.get(
  '/post/:id',
  authorizationMiddleware,
  postController.postSearchById,
);
postRouter.post(
  '/post', 
  authorizationMiddleware,
  postMiddleware,
  postController.postCreate,
);
postRouter.get('/post', authorizationMiddleware, postController.postSearch);

module.exports = postRouter;