require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function token(email) {
  const jwtToken = jwt.sign({ data: email }, secret, jwtConfig);
  return jwtToken;
} 

module.exports = { token };