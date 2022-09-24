const BlogPost = require('../models/BlogPost');

const getAllPost = async () => {
  const post = await BlogPost.findAll();
  return post;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id);

  return post;
};

const createPost = async (fullName, email) => {
  const newPost = await BlogPost.create({ fullName, email });

  return newPost;
};

const updatePost = async (id, fullName, email) => {
  const [updatedPost] = await BlogPost.update(
    { fullName, email },
    { where: { id } },
  );

  console.log(updatedPost); 
  return updatedPost;
};

const deletePost = async (id) => {
  const post = await BlogPost.destroy(
    { where: { id } },
  );

  console.log(post);
  return post;
};

module.exports = {
  getAllPost,
  createPost,
  getPostById,
  updatePost,
  deletePost,
};