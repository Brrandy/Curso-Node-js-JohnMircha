//import { EventEmitter } from 'events';


'use strict'

var Clock = (function (){ //Clock es una clase
    var emisorEventos = require('events').EventEmitter, //EventEmitter es una clase
    inherits = require('util').inherits; //inherits permite heredar caracteristicas a otros objetos que no sean de esa clase
    //util es un modulo que tiene funciones para acceder a las caracteristicas de los modulos

    var Clock = function (){
        var self = this;  //estamos creando una variable con las propiedades de this para poder acceder a los atributos del objeto dentro de la funcion setInterval
        //this hace referencia al objeto tipo Clock que estemos trabajando
        setInterval(function(){
            //console.log('hola')
            self.emit('tictac')
        },1000)
    }

    inherits(Clock, emisorEventos) //Los objetos de la Clase Clock heredan las pripiedades de emisorEventos para poder aplicar el metodo theTime

    //vamos a extender el prototipo de la clase Clock, con la funcion Date que ejecutamos en el frontend (JS en el navegador)
    Clock.prototype.theTime = function (){
        var date = new Date(),
            hrs = addZero(date.getHours()),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds()),
            msg = hrs + ':' + min + ':' + sec + ' hrs';

        function addZero(num){
             return (num < 10) ? ('0' + num) : num; //lo que esta despues del return es un operador ternario (if else simplificado)
        }

        console.log(msg);
    }

    return Clock; //es una instancia de la clase Clock, tuvimos que retornarlo para poder crear nuevos objetos tipo Clock y usar sus propiedades
})()  //es un poco raro porque esta clase de objetos esta definida por una funcion, pero al final estas funciones son sus propiedades
 
module.exports = Clock;
