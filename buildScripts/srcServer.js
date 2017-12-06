/**
 * this file configures a web server that will serve up the files
 * in source directory
 */

import express from 'express';//call express
import path from'path'; //reference to path
import open from 'open'; //reference to open to open the site in the browser


const port = 3000; //stores the port
const app = express(); //create an instance of express

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
