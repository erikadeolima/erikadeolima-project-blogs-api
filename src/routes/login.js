const express = require('express');
const loginController = require('../controllers/login.controller');
const loginMiddleware = require('../middlewares/login.middleware');

const loginRouter = express.Router();

loginRouter.post('/login', loginMiddleware, loginController);

module.exports = loginRouter;