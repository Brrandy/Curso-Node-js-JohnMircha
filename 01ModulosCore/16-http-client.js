/*
En este script revisaremos como hacer un servidor HTTP del lado del cliente
*/

'use strict'

var http = require('http'),
    options = {
        port: 80,
        host: 'jonmircha.com',
        path: '/'
    };

http
    .get(options, function(res){ //con este metodo podemos obtener valores de un sitio web
        console.log(`El sitio ${options.host} ha respondido. Codigo de estado: ${res.statusCode}`);
    })
    .on('error',function(err){
        console.log(`El sitio ${options.host} no respondio. Codigo de estado: ${err.code}. Error: ${err.message}`);
    });

    /*Al parecer el metodo get entiende que el objeto que le estamos pasando (options) contiene los parametros necesarios para hacer una conexion.
    */