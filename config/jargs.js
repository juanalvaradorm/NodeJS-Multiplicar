const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const Argv = require('yargs')
    .command('listar', 'Imprime en pantalla', opts)
    .command('crear', 'Genera Archivo', opts)
    .help()
    .argv;


module.exports = {
    Argv
};