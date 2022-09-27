const CategoriesService = require('../services/categories.service');

const categoriesCreate = async (req, res, next) => {
  try {
      const auth = await CategoriesService.createCategory(req.body);
      req.user = auth;
      return res.status(201).json(auth);
  } catch (err) {
      next(err);
  }
};

const categoriesSearch = async (req, res, next) => {
  try {
  const auth = await CategoriesService.getCategories();
  req.user = auth;
  return res.status(200).json(auth);
  } catch (err) {
    next(err);
  }
};

const categoriesSearchById = async (req, res, next) => {
  const { id } = req.params;
  try {
  const categories = await CategoriesService.getCategoryById(id);
  // console.log('categoriesId', categories);
  return res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  categoriesCreate,
  categoriesSearch,
  categoriesSearchById,
};