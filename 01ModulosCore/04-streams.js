/*
Streams
    'Chorros' de informacion que se transmiten en 'pedazos' (Chunks)
    3 tipos de lectura / escritura / duplex
    instancias de EventEmitter
    Acceso asincrono
    Es raro crear streams directamente
    pero muchos recursos nos ofrecen este interfaz
    Detrás de muchos mecanismos de node.js
        stdin/stdout
        request de HTTP
        Sockets
        Manipulacion de ficheros/imagenes
*/

//'use strict'  //comentado jala, descomentado no jala (no sé por qué)
var fs = require('fs'),
    readStream = fs.createReadStream('assets/nombres.txt');
    writeStream = fs.createWriteStream('assets/nombres_copia.txt');

readStream.pipe(writeStream);  
readStream.on('data',function(chunk){ //es un evento que se ejecuta si encuentra datos
            console.log('He leido ',chunk.length,' caracteres')
            })
            .on('end',function (){ //evento que se ejecuta cuando termina de leer el archivo 
                console.log('Termine de leer el archivo')
            })