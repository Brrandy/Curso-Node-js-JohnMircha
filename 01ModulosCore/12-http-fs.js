//****************Servidor estatico, es decir, como la apertura de un archivo de mi sistema.
'use strict'

var http = require('http').createServer(webServer),
    fs = require('fs');

function webServer(req, res){
    
    function readFile(err, data){  //esta readFile es la callback
        if(err) throw err //si hay error que lo arroje y diga cual es
        res.end(data)
    }

    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('assets/index.html',readFile);
}

http.listen(3000);

console.log('Servidor corriendo en http://localhost:3000/');