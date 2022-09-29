const { errorGenerate } = require('../../utility/errorGenerate');
const { tokenDecode } = require('../../utility/token');

const authorizationMiddleware = async (req, res, next) => {
 const auth = req.header('Authorization');
 // console.log('auth', auth);
 try {
 if (!auth) { return res.status(401).json({ message: 'Token not found' }); }
 
 const userAuth = await tokenDecode(auth);
 
 if (!userAuth) throw errorGenerate(401, 'Expired or invalid token');

 req.user = userAuth;
 return next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorizationMiddleware;