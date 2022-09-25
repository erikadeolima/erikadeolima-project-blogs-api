const schema = require('./loginSchema');

function loginMiddleware(req, res, next) {
  const validate = schema.loginSchema.validate(req.body);

  if (validate.error) {
    if (validate.error.details[0].type === 'string.empty') {
    res.status(400).json({ message: validate.error.details[0].message });
    } else {
    res.status(400).json({ message: validate.error.details[0].message });
    }
  } else {
    next();
  }
}

module.exports = loginMiddleware;