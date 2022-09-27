require('dotenv/config');
const UserService = require('../services/user.service');

const userCreate = async (req, res, next) => {
  try {
      const auth = await UserService.createUser(req.body);

      req.user = auth;
      return res.status(201).json(auth);
  } catch (err) {
      next(err);
  }
};
module.exports = {
  userCreate,
};