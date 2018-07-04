let mensaje = 'Dubugeando ando';

function saludar(){
    debugger;
    console.log(mensaje);
}

module.exports = {
    saludar: saludar
}