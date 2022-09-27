const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.empty': 'Some required fields are missing',
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Some required fields are missing',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Some required fields are missing',
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string().messages({
    'string.empty': 'Some required fields are missing',
  }),
});

module.exports = {
  userSchema,
};