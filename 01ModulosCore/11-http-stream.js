/*      vamos a crear un servidor HTTP con un Stream        

    El punto de este ejercicio es correr el servidor de HTTP como si fuera un stream de datos.
    La variable http la creamos como ya un servidor y solo invocamos el metodo listen.
*/
'use strict'
var http = require('http').createServer(webServer),
    fs = require('fs'),
    index = fs.createReadStream('assets/index.html');

function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    index.pipe(res); //el metodo pipe sirve para pasar la informacion del index a res por medio de un stream
}

http
    .listen(3000);

console.log('Servidor corriendo en http://localhost:3000/');

/* NOTAS:
    1. La funcion webServer es la callback de la funcion createServer, por eso tiene esa estructura.
        Fuente: https://www.tutorialkart.com/nodejs/create-http-web-server-in-node-js/
    2. 
*/