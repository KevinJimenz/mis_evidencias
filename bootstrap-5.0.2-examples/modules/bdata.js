/* Modulo que gestiona la conexion con la base de datos */

const mysql  = require("mysql2");

/*Cadena de conexion  */

const conexion = mysql.createConnection({
host : "localhost",
user : "root",
password:"",
database: "interpolice"
});

conexion.connect((error)=>{

if(error){

console.log(error)
//throw "database MySQL shutdown unexpectedly"



}else{

console.log("¡connection succesful!")

}

});


module.exports = conexion;




