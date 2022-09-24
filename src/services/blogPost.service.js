const BlogPost = require('../models/BlogPost');

const getAllPostCategories = async () => {
  const postCategories = await BlogPost.findAll();
  return postCategories;
};

const getPostCategoryById = async (id) => {
  const postCategory = await BlogPost.findByPk(id);

  return postCategory;
};

const createPostCategory = async (fullName, email) => {
  const newPostCategory = await BlogPost.create({ fullName, email });

  return newPostCategory;
};

const updatePostCategory = async (id, fullName, email) => {
  const [updatedPostCategory] = await BlogPost.update(
    { fullName, email },
    { where: { id } },
  );

  console.log(updatedPostCategory); 
  return updatedPostCategory;
};

const deletePostCategory = async (id) => {
  const postCategory = await BlogPost.destroy(
    { where: { id } },
  );

  console.log(postCategory);
  return postCategory;
};

module.exports = {
  getAllPostCategories,
  createPostCategory,
  getPostCategoryById,
  updatePostCategory,
  deletePostCategory,
};