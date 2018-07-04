

'use strict'

var http = require('http').createServer(webServer),
    form = require('fs').readFileSync('assets/form.html'),
    querystring = require('querystring'), //por convencion declaramos las variables con el mismo nombre del modulo
    util = require('util'),
    dataString = ''; //aqui vamos a guardar informacion como lo hicimos en el sniffer


function webServer(req, res){ //los metodos se aplican al objeto de la peticion. Son propiedades de este objeto (req)
    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(form);
    }

    if(req.method == 'POST'){
        req
            .on('data', function(data){
                dataString += data;
            })
            .on('end', function(){
                var dataObject = querystring.parse(dataString), //vuelve un objeto la informacion que almacena dataString en el formulario
                    dataJSON = util.inspect(dataObject), //nos permite convertir un objeto a notacion JSON
                    templateString = `
Los datos enviados por POST como JSON son: ${dataJSON}`;
                console.log(templateString); 
                res.end(templateString);  
            })
    } //En el templateString tronaba si poniamos el objeto "dataObject" ya que nos manda un error de que
    //no se puede tratar un objeto como un valor primitivo.

}

http.listen(3000);

console.log('Servidor corriendo en http://localhost:3000');