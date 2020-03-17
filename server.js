// HTTP with port number 8080
const http = require('http');
const portNum = 8080;

// get router
const router = require('./router');

const server = http.createServer(router.requestListener);
server.listen(portNum, function(error){
  if (error){
    console.log("ERROR: error occurred while running the server. Error Content: "+ error);
  } else{
    console.log("Server is listening on port " + portNum + " ...");
  }
});
