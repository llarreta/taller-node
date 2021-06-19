const prom = require('./promesa');

prom.calcular(1,2).then((resultado) => {
    console.log(resultado);
}, (error)=>{
    console.log('Error:' + error);
});

console.log('Fin de codigo principal')
