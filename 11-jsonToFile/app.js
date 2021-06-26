const fs = require('fs');
const { workerData } = require('worker_threads');

console.log('Iniciando')

let products = [{
    id: 1,
    name: "Product 1",
    description: "Producto 1"
},{
    id: 2,
    name: "Product 2",
    description: "Producto 2"
}]

fs.writeFile('./data/store.json', JSON.stringify(products, null, 2), 'utf8', err => {
    if(err){
        console.log("ocurrio un error almacenando archivo:" + err);
    }
})


fs.readFile('./data/store.json', 'utf8', (err, data) => {
    if (err){
        console.log('Ocurrio un error leyendo archivo:' + err)
    } else {
        console.log('Lectura correcta');
        let readProducts = JSON.parse(data);
        console.log(JSON.stringify(readProducts));
    }
})

console.log('finalizando')
