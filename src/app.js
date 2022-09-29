const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');
const categoriesRoute = require('./routes/categories');
const postRoute = require('./routes/post');
const errorMiddleware = require('./middlewares/error/error.middleware');

// ...

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(loginRoute);
app.use(userRoute);
app.use(categoriesRoute);
app.use(postRoute);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
