require('dotenv/config');
const UserService = require('../services/user.service');
// const { errorGenerate } = require('../utility/errorGenerate');
// const { tokenDecode } = require('../utility/token');

const userCreate = async (req, res, next) => {
  try {
      const auth = await UserService.createUser(req.body);
      req.user = auth;
      return res.status(201).json(auth);
  } catch (err) {
      next(err);
  }
};

const userSearch = async (req, res, next) => {
  try {
  const auth = await UserService.getUsers();
  req.user = auth;
  return res.status(200).json(auth);
  } catch (err) {
    next(err);
  }
};

const userSearchById = async (req, res, next) => {
  const { id } = req.params;
  /* tentativa 01 
  const auth = req.header('Authorization');
  if (!auth) { throw errorGenerate(401, 'Token not found'); }
  const authorized = tokenDecode(auth);
  if (!authorized) { throw errorGenerate(401, 'Invalid token'); } */
  try {
  const user = await UserService.getByUserId(id);
  // console.log('userId', user);
  return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  userCreate,
  userSearch,
  userSearchById,
};