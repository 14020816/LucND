var express = require('express');
var app = express();
var fs = require("fs");
var data1;
app.get('/user/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {   
      var id = req.param.id;
      console.log( id )
      data1 = data;
   });
   
  res.end( 'fadfsfsdf' );
})

app.get('/test/:id/:name', function (req, res, next) {
    var id = req.params.id;
    console.log('The id: ' + id);
    console.log(req.params);
    if(id == 143)
        res.end("Nguyen Duy Luc")
        else
        res.end("fdasfsdf")
});
var pg = require("pg");
// var connectionString = "postgres://lucnd:duyluc2009@localhost:5432/MyDatabase";
// app.get('/database', function (req, res, next) {
//    pg.connect(connectionString,function(err,client,done) {
//       if(err){
//           console.log("not able to get connection "+ err);
//           res.status(400).send(err);
//       } 
//       client.query('SELECT * FROM acount', [1],function(err,result) {
//           done(); // closing the connection;
//           if(err){
//               console.log(err);
//               res.status(400).send(err);
//           }
//           res.status(200).send(result.rows);
//       });
//    });
// });

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'lucnd',
  host: 'localhost',
  database: 'MyDatabase',
  password: 'duyluc2009',
  port: 5432,
})

pool.query('SELECT * FROM account', (err, res) => {
  console.log(err, res)
  pool.end()
})

// const client = new Client({
//   user: 'dbuser',
//   host: 'database.server.com',
//   database: 'mydb',
//   password: 'secretpassword',
//   port: 3211,
// // })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
 
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})


 

 
