const argv = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption: true,
    describe:'muestra la base en consola'
})
.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'muestra hasta en consola'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption: false,
    default: false,
    describe: 'muestra la tabla de multiplicar en consola'
})
            .check((argv,option)=>{
                if( isNaN(argv.b)){
                    throw 'la base debe ser un numero'
                }
                return true;
            })
            .argv;

            module.exports= argv;