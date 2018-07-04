/*
Debug nos sirve para ir limpiando errores en la programacion de nuestro codigo. Cuando en nuestro codigo ponemos la palabra "debugger"
en la ejecucion se hará un break hasta ese momento para mostrarnos el resultado en ese momento. y si hay errores corregirlos
*/

'use strict'
var http = require('http');

function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    debugger;
    res.end('<h1>Hola <b>node.js</b></h1>');

}

http
    .createServer(webServer) 
    .listen(3000, 'localhost');

console.log('Servidor corriendo en http://localhost:3000/');