const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users.routes');

const PORT = 3000;

const app = express();

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.json());

app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


