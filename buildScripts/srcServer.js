/**
 * this file configures a web server that will serve up the files
 * in source directory
 */

var express = require('express');//call express
var path = require('path'); //reference to path
var open = require('open'); //reference to open to open the site in the browser


var port = 3000; //stores the port
var app = express(); //create an instance of express

/**
 * this method tells express which routes it should handle
 * it takes a request and response as arguments
 */
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//tells express to listen the port that is stored above
app.listen(port, function(err){
  //if there is an error log to console else open the website
  if (err)
  {
    console.log(err);
  }else{
    open('http://localhost:'+ port);
  }
});
