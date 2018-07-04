// La emision de eventos en node se hace a traves de un patron de diseño de software que se llama el patron observador
// Se tienen dos objetos, el que publica y el que escucha.

'use strict'

var EventEmitter = require('events').EventEmitter, //como el modulo events el cual estamos requiriendo ya tiene sus propios metodos podemos hacer uso
//en particular del metodo EventEmitter, lo que no me queda claro es por que llamamos la variable igual que el metodo
//lo que dice en el video es que EventEmitter es una clase porque las clases van con UpperCamelCase!!!
    pub = new EventEmitter();

pub.on('myEvent', function(message){ //estamos declarando nuestros propios eventos
    console.log(message)
 });

pub.once('myEvent', function(message){
    console.log('Se emite la primera vez')
});

pub.emit('myEvent','Soy un emisor de Eventos'); //.emit nos sirve para emitir (ejecutar) nuestos eventos  (1a emision)
pub.emit('myEvent','Se emite por segunda vez');
//pub.removeAllListeners('myEvent') esta linea remueve todos los manejadores de eventos que esten asignados a "myEvent"
pub.emit('myEvent','Se emite por tercera vez');


