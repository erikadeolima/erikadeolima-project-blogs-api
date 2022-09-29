const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Some required fields are missing',
  }),
});

module.exports = {
  categorySchema,
};