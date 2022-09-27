const { Category } = require('../models');
// const { tokenEncode } = require('../utility/token');
const { errorGenerate } = require('../utility/errorGenerate');

const createCategory = async ({ name }) => {
  const categoryExists = await Category.findOne({ where: { name } });

  if (categoryExists !== null) {
    throw errorGenerate(409, 'Category already registered'); 
  }
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getCategories = async () => {
  const categories = await Category.findAll({ attributes: ['id', 'displayName'] });
  return categories;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id, {
    attributes: ['id', 'email'],
  });
  if (category === null) {
    // console.log('categoryERROR', category);
    throw errorGenerate(404, 'Category does not exist'); 
  }
  return category;
};

const updateCategory = async (id, fullName, email) => {
  const [updatedCategory] = await Category.update(
    { fullName, email },
    { where: { id } },
  );

  console.log(updatedCategory); 
  return updatedCategory;
};

const deleteCategory = async (id) => {
  const category = await Category.destroy(
    { where: { id } },
  );

  console.log(category);
  return category;
};

module.exports = {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};