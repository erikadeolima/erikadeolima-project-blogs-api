const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Some required fields are missing',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Some required fields are missing',
  }),
});

module.exports = {
  loginSchema,
};