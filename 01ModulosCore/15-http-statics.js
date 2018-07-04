/*
URL
https://nodejs.org/api/url.html
Este modulo dispone de utilidades para la resolicion y analisis de  URLs

Query String
https://nodejs.org/api/querystring.html
Este modulo proporciona utilidades para hacer frente a las cadenas de consulta.
*/

'use strict'

var http = require('http').createServer(webServer),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    urls = [
        {
            id : 1,
            route : '',  //no es necesario agregar las diagonales como en los directorios, ya que el metodo baseline corta todas las diagonales
            output : 'assets/index.html'
        },
        {
            id : 2,
            route : 'acerca',
            output : 'assets/acerca.html'
        },
        {
            id : 3,
            route : 'contacto',
            output : 'assets/contacto.html'
        }
    ]

function webServer(req, res){ //el primer parametro es la peticion y el segundo es la respuesta del servidor
    var pathURL = path.basename(req.url), //base name se queda con la parte final de la ruta
    id = url.parse(req.url,true).query.id; //el metodo parse toma una url y devuelve un objeto, el primer parametro es la url que le vamos a pasar,
                                            //el segundo parametro "true" es para que se invoce query string y el metodo query nos permite acceder a los parametros
                                            //o atributos de ese objeto, en este caso al id.

    console.log(`path: ${pathURL} id:${id}`);

    urls.forEach(function(pos) {
        if(pos.route == pathURL || pos.id == id){
            res.writeHead(200, {'Content-Type':'text/html'});
            fs.readFile(pos.output, function(err, data){
                if(err) throw err;
                res.end(data);

            });
        }
    })

    if(!res.finished){  //si la respuesta no ha terminado (si no tenemos respuesta)
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.readFile('assets/404.html', function(err, data){
            if(err) throw err;
            res.end(data);
        })
    }
}
http.listen(3000);
console.log('Servidor corriendo en http://localhost:3000/');