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
  return jwtToken;
}

async function tokenDecode(token) {
  try {
    // const payload = { email, displayName, id };
    const jwtToken = jwt.verify(token, secret);
    // console.log('jwtToken', jwtToken);
    return jwtToken;
  } catch (err) {
    return false;
  }
}

module.exports = { tokenEncode, tokenDecode };