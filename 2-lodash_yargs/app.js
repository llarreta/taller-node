const _ = require('lodash');

//let comando = process.argv;

//console.log("comando:" + comando);

const argv = require('yargs').argv;

if (argv.usuario === 'prueba') {    
        let x = { "nombre": "Jaime" }
        let y = { "apodo": "pepito" }
        let z = [
            { nombre: "Jaime", apellido: "Medina", edad: 26 },
            { nombre: "Jose", apellido: "Perez", edad: 31 },
            { nombre: "Nuevo", apellido: "Alumno", edad: 31 }
        ]

        //_.times(3, ()=> console.log('Ejecutar varias veces'));
        let resultado = _.filter(z, {edad: 31});
        
        /*let resultado = _.assign(x,y);
        console.log(resultado);*/

        
        console.log(resultado);
}else{
    console.log('Usuario no válido');
}


