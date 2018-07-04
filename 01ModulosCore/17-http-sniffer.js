/*
En este script revisaremos como clonar un sitio web en el localhost.
Para ello ya estamos usando los conceptos de los modulos vistos en las sesiones anteriores.

Lo unico que hacemos es extraer el codigo HTML de una pagina (al parecer no debe estar protegida)
y ese mismo lo guardamos en una variable para despues crear un servidor y pasarle dicho codigo
para que en el localhost:3000 podamos ver ese sitio web.
*/

'use strict'

var http = require('http'),
    options = {
        host: 'www.trucosgta5.com',
        port: 80,
        path: '/nuevo-posible-modo-primera-persona/'
    },
    htmlCode = '';

function httpClient(res){ //con este metodo podemos obtener valores de un sitio web
        console.log(`El sitio ${options.host} ha respondido. Codigo de estado: ${res.statusCode}`);
        res.on('data', function(data){
            htmlCode += data;
            console.log(data, data.toString());
        });
    }

function httpError(err){
        console.log(`El sitio ${options.host} no respondio. Codigo de estado: ${err.code}. Error: ${err.message}`);
    }

function webServer(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(htmlCode);
}
//instancia cliente de HTTP
http
    .get(options, httpClient)
    .on('error', httpError);

//instancia servidor de HTTP
http
    .createServer(webServer)
    .listen(3000);

console.log('Servidor corriendo en http://localhost:3000');


// NOTAS.
/* El cliente es quien recibe las opciones del host, puerto y ruta a la que nos conectamos 
y el servidor es el que toma la ruta de la página y la clona con el código HTML.
*/