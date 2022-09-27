const express = require('express');
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

const userRouter = express.Router();

userRouter.post('/user', userMiddleware, userController.userCreate);

module.exports = userRouter;