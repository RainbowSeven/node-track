var http = require('http');
http.createServer(function (request, response) {
    console.log('Request incoming<---');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world!')
    response.end('\n');
    console.log('--->Response outgoing');
}).listen(3000);