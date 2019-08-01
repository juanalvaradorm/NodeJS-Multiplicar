const Argv = require('./config/jargs').Argv;
var colors = require('colors');
//const colors = require('colors/safe');

// const Argv = require('yargs')
//     .command('listar', 'Imprime en pantalla', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera Archivo', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;
//const argv = require('./config/yargs').argv

//import fs from 'fs';

const Multiplicar = require('./Multiplicar/Multiplicar');


let comando = Argv._[0];

switch (comando) {
    case 'listar':
        Multiplicar.Listar(Argv.base, Argv.limite).then(data => console.log(`Tabla listada:\n${data}`)).catch((err) => {
            console.log(err);
        });
        break;
    case 'crear':
        //Multiplicar.CrearArchivo(Argv.base, Argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch((err) => {
        //Multiplicar.CrearArchivo(Argv.base, Argv.limite).then(archivo => console.log(`Archivo creado: ` + colors.red(archivo))).catch((err) => {
        Multiplicar.CrearArchivo(Argv.base, Argv.limite).then(archivo => console.log(`Archivo creado: ${archivo.red}`)).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('Objeto no valido');
}

//https://www.npmjs.com/package/colors

// const { CrearArchivo } = require('./Multiplicar/Multiplicar');

// //let Base = 'A';

// //let Argv = process.argv;
// let Argv2 = process.argv;

// console.log(Argv.base);
// console.log('Limite: ', Argv.limite);
//console.log(Argv2);

// let Parametro = Argv[2];

// let Base = Parametro.split('=')[1];

// //console.log(Base);

// //console.log(Multiplicar);