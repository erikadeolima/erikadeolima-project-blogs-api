const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).required().messages({
    'string.empty': 'Some required fields are missing',
    'string.pattern.base': 'enter a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Some required fields are missing',
    'string.min': '"password" must be at least 6 characters long',
  }),
});

module.exports = {
  loginSchema,
};