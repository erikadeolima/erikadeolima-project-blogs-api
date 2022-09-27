require('dotenv/config');
const loginService = require('../services/login.service');
// const { tokenEncode } = require('../utility/token');

// const isBodyValid = (email, password) => email && password;

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await loginService.getByEmail(email, password);
    /* if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }  
    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }
    const token = tokenEncode(user.dataValues);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  } */
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  } 
};
module.exports = loginController;