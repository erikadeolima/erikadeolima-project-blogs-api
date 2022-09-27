const { User } = require('../models');
const { tokenEncode } = require('../utility/token');
const { errorGenerate } = require('../utility/errorGenerate');

 const getByEmail = async (email, password) => {
  const findOne = await User.findOne({
    attributes: ['id', 'displayName', 'email'],
    where: { email, password } });
  if (findOne === null) {
    throw errorGenerate(400, 'Invalid fields'); 
  }
  const token = tokenEncode(findOne.dataValues);
    return { token };
};

module.exports = { getByEmail };