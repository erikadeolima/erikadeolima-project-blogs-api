const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const authorizationMiddleware = require('../middlewares/authorization.middleware');
const categoryMiddleware = require('../middlewares/category.middleware');

const categoriesRouter = express.Router();

categoriesRouter.get(
  '/categories/:id',
  authorizationMiddleware,
  categoriesController.categoriesSearchById,
);
categoriesRouter.post(
  '/categories', 
  authorizationMiddleware, 
  categoryMiddleware, 
  categoriesController.categoriesCreate,
);
categoriesRouter.get('/categories', authorizationMiddleware, categoriesController.categoriesSearch);

module.exports = categoriesRouter;