

const {crearArchivo }= require('./herpers/multiplicar');
const color = require('colors');
const argv= require('./config/yargs');




console.clear();






 crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
.catch(err=>console.log(err)); 

