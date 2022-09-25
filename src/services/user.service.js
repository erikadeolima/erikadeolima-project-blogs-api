const { User } = require('../models/User');

const createUser = ({ 
  displayName,
  email,
  password,
  image }) => User.create({
    displayName,
    email,
    password,
    image });

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