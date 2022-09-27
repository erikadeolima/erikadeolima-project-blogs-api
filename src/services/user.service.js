const { User } = require('../models');
const { tokenEncode } = require('../utility/token');
const { errorGenerate } = require('../utility/errorGenerate');

async function createUser({ displayName, email, password, image }) {
    const userExists = await User.findOne({ where: { email } });

    if (userExists !== null) {
      throw errorGenerate(
            409, 'User already registered', console.log('userExists:', userExists),
      ); 
    }

    const user = await User.create({ displayName, email, password, image });
    console.log('userExists null:', userExists);
    const token = tokenEncode(user.dataValues);
    return { token };
}

const getUsers = () => User.findAll();

const getByEmail = (email) => {
  console.log(email);
  const findOne = User.findOne({ where: { email } });
  console.log(findOne);
  return findOne;
};

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByEmail,
  getByUserId,
};