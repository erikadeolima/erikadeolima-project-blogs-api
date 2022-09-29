const { BlogPost, Category, User, PostCategory, sequelize } = require('../models');
const { errorGenerate } = require('../utility/errorGenerate');

const postSearch = async () => {
  const postCategories = await BlogPost.findAll({
    include: [{
        model: User, as: 'user', attributes: { exclude: ['password'] },
    },
    { 
        model: Category, as: 'categories', through: { attributes: [] },
    }],
});
  return postCategories;
};

const postSearchById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [{
        model: User, as: 'user', attributes: { exclude: ['password'] },
    },
    { 
        model: Category, as: 'categories', through: { attributes: [] },
    }],
});
if (post === null) { throw errorGenerate(404, 'Post does not exist'); }
  return post;
};

const createPost = async ({ title, content, categoryIds }, userId) => {  
  const category = (await Promise.all(categoryIds.map((id) => (
    Category.findOne({ where: id })
  )))).every((item) => item !== null);
  console.log('category', category);

  if (!category) throw errorGenerate(400, '"categoryIds" not found');
  
  const newPost = await sequelize.transaction(async (t) => {
    const date = new Date();
    const post = await BlogPost.create(
      { title, content, userId, categoryIds, published: date, updated: date },
      { transaction: t },
    );

    const idPost = post.dataValues.id;
    await Promise.all(categoryIds.map(async (id) => PostCategory
    .create({ postId: idPost, categoryId: id }, { transaction: t })));

    return post;
});

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
  postSearch,
  createPost,
  postSearchById,
  updatePost,
  deletePost,
};