'use strict'
/*
Lo que se desea aprender en este codigo es la funcionalidad de poder llamar otro script
y que podamos hacer uso de sus modulos. En el archivo my-data definimos nuestros datos y sus metodos

OTRA COSA IMPORTANTE QUE HAREMOS SERÁ USAR ES5 Y ES6. Las modificaciones de codigo que se haran con ECMAScript6 seran comentadas como "ES6" 
*/

//var myData = require('./my-data.js');
var myData = require('./my-data'), //requiero un archivo para poder hacer uso de sus metodos.
    //Clock = require('./clock-es5'),
    Clock = require('./clock-es6'),
    cucu = new Clock();
console.log(
    myData.name,
    myData.email,
    myData.phone
)


//var cucu = new Clock();
cucu.on('tictac',function (){ //el problema aqui era que cucu no tiene la capacidad de emitir eventos ya que Clock no es un emisor de eventos
    cucu.theTime();
})