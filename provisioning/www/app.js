'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();

// Set template engine
app.set('view engine', 'pug')


app.get('/', function (req, res) {
  res.render('index', {title: 'App', greeting: 'Hello, world'});
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
