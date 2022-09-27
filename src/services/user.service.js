const { User } = require('../models');
const { tokenEncode } = require('../utility/token');
const { errorGenerate } = require('../utility/errorGenerate');

async function createUser({ displayName, email, password, image }) {
    const userExists = await User.findOne({ where: { email } });

    if (userExists !== null) {
      throw errorGenerate(409, 'User already registered'); 
    }

    const user = await User.create({ displayName, email, password, image });
    const token = tokenEncode(user.dataValues);
    return { token };
}

const getUsers = async () => {
  const users = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return users;
};

const getByUserId = async (id) => {
  const user = await User.findByPk(id, {
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  if (user === null) {
    // console.log('userERROR', user);
    throw errorGenerate(404, 'User does not exist'); 
  }
  return user;
};

module.exports = {
  createUser,
  getUsers,
  getByUserId,
};