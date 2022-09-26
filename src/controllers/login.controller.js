require('dotenv/config');
const { User } = require('../models');
const { tokenEncode } = require('../utility/token');

const isBodyValid = (email, password) => email && password;

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const user = await User.findOne({
      attributes: ['id', 'displayName', 'email'],
      where: { email, password } });
  
    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }

    const token = tokenEncode(user.dataValues);
    console.log('token:', token);
    console.log('user:', user);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
module.exports = loginController;