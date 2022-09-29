const express = require('express');
const userController = require('../controllers/user.controller');
const authorizationMiddleware = require('../middlewares/authorization/authorization.middleware');
const userMiddleware = require('../middlewares/user/user.middleware');

const userRouter = express.Router();

userRouter.get('/user/:id', authorizationMiddleware, userController.userSearchById);
userRouter.post('/user', userMiddleware, userController.userCreate);
userRouter.get('/user', authorizationMiddleware, userController.userSearch);

module.exports = userRouter;