const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  categoryIds: Joi.array().items(Joi.number()),
});

module.exports = {
  postSchema,
};