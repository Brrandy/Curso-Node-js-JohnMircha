/*Codigo hola mundo para crear un servidor con la clase http
Es el mismo codigo que viene en la pagina oficial de node.js*/

/*
'use strict'
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; //200 es el estatus cuando el servidor nos contesta
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
*/


//Esta es una forma equivalente de hacerlo pero con mejores practicas de programacion y un poco mejorado. (Las sentencias tambien se ejecutan sin punto y coma)
'use strict'
var http = require('http')

function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})  
    res.end('<h1>Hola <b>node.js</b></h1>') //el metodo end no permite ejecutarlo antes o despues de otro metodo, es por ello que se ocupa dos veces res.nombreMetodo
}

http
    .createServer(webServer) //se enuncia cada uno de los metodos por renglon para una mejor lectura del codigo
    .listen(3000, 'localhost')

console.log('Servidor corriendo en http://localhost:3000/') //localhost = 127.0.0.1