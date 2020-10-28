const optc = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    }

}

const opta = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada la tarea'
    }

}

const optb = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear tarea', optc)
    .command('actualizar', 'actualiza tarea', opta)
    .command('borrar', 'borra una tarea', optb)
    //   .command('listar', 'Lista tarea', optl)
    .help()
    .argv;

module.exports = {
    argv
}