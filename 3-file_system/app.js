const fs = require('fs');

console.log('Iniciado')

fs.readdir('./../3-file_system', (error, files)=>{
    files.forEach(file => {
        console.log(file);
    });
});

console.log('Finalizado')

/*fs.readFile('data.txt', 'utf-8', (error, data)=> {
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data);
    }
});

let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);
*/
/*fs.rename('data.txt', 'data_renombrado.txt', (error)=>{
    if(error) throw error;
    console.log('¡Renombrado!');
});*/

/*

fs.unlink('data2.txt', (error)=>{
    if (error) throw error;
    console.log('Eliminado');
});*/

//fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));



/*fs.readdirSync('./../../basico/file_system').forEach(file => {
    console.log(file);
});*/

