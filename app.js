const express = require('express');
const expresslayouts = require('express-ejs-layouts');

const app = express();
const port  = process.env.PORT || 6882;

require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expresslayouts);


app.set('layout', './layouts/main');
app.set('view engine',  'ejs');

const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(port, () => {
    console.log('server is running on port ${port}'); //
});