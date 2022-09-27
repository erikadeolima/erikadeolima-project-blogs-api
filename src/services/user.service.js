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

const getUsers = () => User.findAll();

const getByEmail = (email) => {
  const findOne = User.findOne({ where: { email } });
  if (findOne === null) {
    throw errorGenerate(400, 'Invalid fields'); 
  }
  return findOne;
};

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByEmail,
  getByUserId,
};