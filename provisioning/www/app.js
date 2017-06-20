'use strict';

const express = require('express');
const pg = require('pg');

// Retrieve db connection string
const dbConnectionString = 'postgresql://admin@' + process.env.POSTGRES_PORT_5432_TCP_ADDR + ':' + process.env.POSTGRES_PORT_5432_TCP_PORT + '/app';

// Constants
const PORT = 80;

// App
const app = express();

// Set template engine
app.set('view engine', 'pug')


app.get('/', function (req, res) {
  const results = [];
  // Get a Postgres client 
  pg.connect(dbConnectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query 
    const query = client.query('SELECT * FROM messages;');
    // Stream results back
    query.on('row', (row) => {
      results.push(row);
    });
    // After data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.render('index', {title: 'App', greeting: results[0].message});
    });
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
