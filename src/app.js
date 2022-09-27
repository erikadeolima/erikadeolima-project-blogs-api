const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');

// ...

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(loginRoute);
app.use(userRoute);

app.use((err, req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Erro inesperado';

  return res.status(status).json({ message });
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
