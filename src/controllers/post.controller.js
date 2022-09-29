const PostService = require('../services/post.service');

const postCreate = async (req, res, next) => {
  try {
    const { id } = req.user;
    const post = await PostService.createPost(req.body, id);
    return res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

const postSearch = async (req, res, next) => {
  try {
    const { id } = req.user;
    const postList = await PostService.postSearch(id);
    return res.status(200).json(postList);
  } catch (err) {
    next(err);
  }
};

const postSearchById = async (req, res, next) => {
  const { id } = req.params;
  try {
  const post = await PostService.postSearchById(id);
  // console.log('postId', post);
  return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postCreate,
  postSearch,
  postSearchById,
};