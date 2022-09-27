const errorGenerate = require('../utility/errorGenerate');
const { tokenDecode } = require('../utility/token');

const authorizationMiddleware = async (req, _res, next) => {
 const auth = req.header('Authorization');
 if (!auth) throw errorGenerate(401, 'Token not found');
 
 const userAuth = /* await */ tokenDecode(auth);
 
 if (!userAuth) throw errorGenerate(401, 'Expired or invalid token');

 req.user = userAuth;
 next();
};

module.exports = authorizationMiddleware;