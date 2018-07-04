//En este ejercicio definimos algunas rutas de nuestro servidor web, y se evalúa si estas son validas o no

'use strict'

var http = require('http').createServer(webServer),
    path = require('path'),
    urls = [
        {
            route : '',  //no es necesario agregar las diagonales como en los directorios, ya que el metodo baseline corta todas las diagonales
            output : '<h2>Home</h2>'
        },
        {
            route : 'acerca',
            output : '<h2>Acerca</h2>'
        },
        {
            route : 'contacto',
            output : '<h2>Contacto</h2>'
        }
    ]

function webServer(req, res){ //el primer parametro es la peticion y el segundo es la respuesta del servidor
    var message = '<h1>Hola Node.js</h1>',
    pathURL = path.basename(req.url); //base name se queda con la parte final de la ruta

    console.log(pathURL);

    urls.forEach(function(pos) {
        if(pos.route == pathURL){
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end(message + pos.output);
        }
    })

    if(!res.finished){  //si la respuesta no ha terminado (si no tenemos respuesta)
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('<h1>Error 404: Not Found</h1>');
    }
}
http.listen(3000);
console.log('Servidor corriendo en http://localhost:3000/');