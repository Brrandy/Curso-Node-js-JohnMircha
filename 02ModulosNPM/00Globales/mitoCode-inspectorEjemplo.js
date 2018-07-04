/*Este ejemplo es para entender de una manera muy clara como es el proceso de debugging en node con ayuda
del paquete node-inspetctor.
*/
extra = require('./mitoCode-extra');

let curso = 'node';
curso = 'node.js';
curso = 'node.js tutos';
debugger;
console.log(curso);

x = () =>{
    return 1 + 1;
}

console.log(x());