'use strict';

const express = require('express');
const pg = require('pg');
const consul = require('consul')();

var dbConnectionStr = "";

// Constants
const PORT = 80;

// App
const app = express();

// Set template engine
app.set('view engine', 'pug')


app.get('/', function (req, res) {
  const results = [];

  // Retrieve connection details from consul key value store - in this case done per request
    consul.kv.get('postgres/dbIp', function(errIp, resIp){
     if (errIp) throw errIp;
     consul.kv.get('postgres/dbPort', function(errPort, resPort){
       if (errPort) throw errPort;
       consul.kv.get('postgres/dbUser', function(errUser, resUser){
         if (errUser) throw errUser;
         // check wheter DB config details are available
         if (typeof resIp === 'undefined') {
           return res.status(500).json({success: false, data: 'DB not ready'})
         } else {
           dbConnectionStr = 'postgresql://' + resUser.Value + '@' + resIp.Value + ':' + resPort.Value + '/app';
         }
    
        // Get a Postgres client for the connection string from consul kv-store
        pg.connect(dbConnectionStr, (err, client, done) => {
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
     });
   });
  
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
