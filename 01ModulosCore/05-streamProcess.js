/*Este programa es para ver la utilidad del modulo process con stdin y stdout.
-Simularemos un pequeño Chatbot.
-En este codigo ya estamos usando conceptos de programacion asincrona, objetos JS, callbacks
-stdin y stdout permiten la interaccion del usuario con la consola

*/

'use strict'

var stdin = process.stdin,
    stdout = process.stdout, 
    person = { //así se declaran los objetos en JavaScript
        name : null,
        age : 0
        };

    function saveAge(age){
        person.age = age
    
        if(person.age >=18){
            stdout.write(person.name + ' es mayor de edad, tiene ' + person.age + ' años\n');
        }
        else{
            stdout.write(person.name + ' es menor de edad, tiene ' + person.age + ' años\n');
        }
    
        process.exit(); //es el metodo que me permite salirme del stream
    
    }
    
    function saveName(name){
        person.name = name;
        //vuelvo a preguntar
        var question = 'Hola ' + person.name + ' ¿Cuantos años tienes?';
        quiz(question, saveAge);
    
    }
    
    function quiz(question, callback){
        stdin.resume(); //permite leer lo que el usuario escriba en la terminal de comandos
        stdout.write(question + ': ');
        stdin.once('data', function(res){ //once se ejecuta una vez mientras haya datos
            callback(res.toString().trim());
        })
    }
    
    stdin.setEncoding('utf8'); //todo lo que entre a la terminal de comandos se codifique en utf8
    quiz('¿Como te llamas?', saveName);
    