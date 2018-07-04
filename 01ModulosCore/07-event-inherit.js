//import { EventEmitter } from 'events';


'use strict'

var emisorEventos = require('events').EventEmitter, //EventEmitter es una clase
    inherits = require('util').inherits; //inherits permite heredar caracteristicas a otros objetos que no sean de esa clase
    //util es un modulo que tiene funciones para acceder a las caracteristicas de los modulos

var Clock = function (){
    var self = this;  //no se que es this

    setInterval(function(){
        //console.log('hola')
        self.emit('tictac')
    },1000)
}

inherits(Clock, emisorEventos) //Los objetos de la Clase Clock heredan las pripiedades de emisorEventos para poder aplicar el metodo theTime

//vamos a extender el prototipo de la clase Clock, con la funcion Date que ejecutamos en el frontend (JS en el navegador)
Clock.prototype.theTime = function (){
    var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec;

    console.log(msg);
}

var cucu = new Clock();
cucu.on('tictac',function (){ //el problema aqui era que cucu no tiene la capacidad de emitir eventos ya que Clock no es un emisor de eventos
    cucu.theTime();
})

