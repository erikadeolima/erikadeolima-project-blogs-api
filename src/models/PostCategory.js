const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    updated: DataTypes.DATE,
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.User, {
      as: 'users',
      through: PostCategory,
      foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'userId', // se refere a outra chave de `users_books` 
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: PostCategory,
      foreignKey: 'userId',  // se refere ao id de User na tabela de `users_books`
      otherKey: 'bookId',
    });
  };

  return PostCategory;
};

module.exports = PostCategory;