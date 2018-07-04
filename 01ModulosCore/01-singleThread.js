//Single Thread.
'use strict'

function singleThread(){
    console.log('------------------------------------');
    console.log('        EL PROCESO DE NODEJS        ');
    console.log('Id del proceso .......' + process.pid);
    console.log('Titulo .............' + process.title);
    console.log('Directorio de Node ' + process.execPath);
    console.log('Directorio Actual ..' + process.cwd());
    console.log('Version de Node .. ' + process.version);
    console.log('Versiones Dependencias ' + process.versions);
    console.log('Plataforma (SO)   ' + process.platform);
    console.log('Arquitectura (SO) ... ' + process.arch);
    console.log('Tiempo activo de Node ' + process.uptime());
    console.log('Argumentos del proceso: ...  ' + process.argv);
    console.log('------------------------------------');
}

singleThread();
