const express = require("express");

const cors  = require("cors");


const app = express();

app.use(cors());
app.use(express.json())

const port = 3000;


//rutas de la app

//microservicio people

app.use("/",require("./bootstrap-5.0.2-examples/modules/people"));
app.use("/",require("./bootstrap-5.0.2-examples/modules/history"));



app.listen(port,()=>{


console.log("App on in port: " + port);

});



