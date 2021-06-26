var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'taller',
    port: 3306
 });
 connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });
 var query = connection.query(
    'INSERT INTO product values (?,?,?)', [1,'Producto1 prem', 'Producto de primera calidad'], 
    function(error, result){
       if(error){
        throw error;
       }else{
        console.log(result);
       }
   }
);
 var query = connection.query(
     'SELECT * FROM product', [], 
     function(error, result){
        if(error){
            throw error;
        }else{
            console.log(result);
        }
    }
 );
 connection.end();