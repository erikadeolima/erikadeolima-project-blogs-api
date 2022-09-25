require('dotenv/config');
const UserService = require('../services/user.service');
const tokenFunc = require('../utility/token');

async function loginController(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await UserService.getByEmail(email);
  console.log(user);

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' }); 
  }

  const token = tokenFunc(email);

  return res.status(200).json({ token });
}

module.exports = loginController;
