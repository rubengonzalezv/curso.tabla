const color = require('colors');

const { throws } = require('assert');
const fs = require('fs');

const { basename } = require("path");

const crearArchivo = async(base=5, listar=false, hasta=10) => {

try {


        let salida ='';
        let consola ='';
        for(let i = 1;i<=hasta ;i++ ){
            //console.log(`${base } x ${i} = ${base*i}`)
            consola += `${base} ${'x'.green} ${i} = ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }           

        if (listar){
            console.log('========================='.green);
            console.log('=======tabla del',color.blue(base));
            console.log('========================='.green);
            console.log(consola);   

        }    



               
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return`tabla-${base}.txt creado`;
} catch (error) {
    throw error;
}








}


module.exports = {
    crearArchivo
}
