/* require('dotenv/config'); */
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretJWT'; 

function tokenEncode({ email, displayName, id }) {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payload = { email, displayName, id };
  const jwtToken = jwt.sign(payload, secret, jwtConfig);
  console.log(jwtToken);
  return jwtToken;
} 

module.exports = { tokenEncode };