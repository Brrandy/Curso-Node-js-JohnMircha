'use strict'
var buf = new Buffer(100), //100 posiciones
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'; //fraciiones en codigo ascii

buf.write('abcd',0,4,'ascii');

console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + ' caracteres',
    Buffer.byteLength(str,'utf8') + 'bytes'
);

//Otro ejemplo
for(var i=0; i<buf2.length; i++){
    //97 es a en ASCII
    buf2[i] = i + 97;
}

console.log(buf2.toString('ascii'));