//En este script vamos a crear una clase utilizando las nuevas funcionalidades de ECMAScript6

'use strict'

class Clock{
    constructor(){
    
            setInterval( () => { 
               this.theTime(); //le estamos diciendo que cada segundo ejecute el metodo theTime()
            },1000)
        }

       theTime(){
            var date = new Date(),
                hrs = addZero(date.getHours()),
                min = addZero(date.getMinutes()),
                sec = addZero(date.getSeconds()),
                //msg = hrs + ':' + min + ':' + sec + ' hrs';
                msg = `${hrs}:${min}:${sec} hrs`;
    
            function addZero(num){
                 return (num < 10) ? ('0' + num) : num; //lo que esta despues del return es un operador ternario (if else simplificado)
            }
    
            console.log(msg);
        }
}

//module.exports = new Clock();  no es muy recomendable exportar un modulo ya instanciado. Lo mejor es crear instancias en el sricpt donde requerimos esa clase
module.exports = Clock;