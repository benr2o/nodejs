const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const UserController = require('./controllers/users.controller');

const usersRoutes = require('./routes/users.routes');
const pagesRoutes = require('./routes/pages.routes');

const PORT = 3000;

const userController = new UserController();
const app = express();

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.json());

app.use('/api/users', usersRoutes(userController));
app.use('/', pagesRoutes(userController));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


