const schema = require('./postSchema');

function postMiddleware(req, res, next) {
  const validate = schema.postSchema.validate(req.body);

  if (validate.error) {
    console.log('validate', validate.error.details[0]);
    console.log('req.body', req.body);
    res.status(400).json({ message: 'Some required fields are missing' });
  } else {
    next();
  }
}

module.exports = { postMiddleware };