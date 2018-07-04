//Version hola mundo de un servidor HTTP como un emisor de eventos
'use strict'
var http = require('http').createServer();

function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Hola <b>node.js</b></h1>');
}

http
    .on('request',webServer)
    .listen(3000, 'localhost');

console.log('Servidor corriendo en http://localhost:3000/'); //localhost = 127.0.0.1


/* NOTAS.
    1. El punto de este ejemplo es que nuestro servidor de HTTP se ejecuta como si fuese un evento de la variable http.

*/