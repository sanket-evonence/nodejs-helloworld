var http = require('http')

http.createServer(onRequest).listen(8080);
console.log('Server started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('<h1> version 1.0.0 </h1> <p> <h4>~ deployed by Evonence Team</h4>');
  response.end();
}