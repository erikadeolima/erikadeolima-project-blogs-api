const express = require('express');
const userController = require('../controllers/user.controller');
const authorizationMiddleware = require('../middlewares/authorization.middleware');
const userMiddleware = require('../middlewares/user.middleware');

const userRouter = express.Router();

userRouter.post('/user', userMiddleware, userController.userCreate);
userRouter.get('/user', authorizationMiddleware, userController.userSearch);
userRouter.get('/user/id', authorizationMiddleware, userController.userSearchById);

module.exports = userRouter;