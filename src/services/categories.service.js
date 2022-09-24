const Category = require('../models/Category');

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);

  return category;
};

const createCategory = async (fullName, email) => {
  const newCategory = await Category.create({ fullName, email });

  return newCategory;
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
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};