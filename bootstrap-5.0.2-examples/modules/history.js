/*Microservicio para crear el CRUD del historial delictivo de las personas de la galaxia */

const express = require("express");
const cnx = require("./bdata");
const history = express.Router();

/* Desarrollo de CRUD */


//Consultar

history.get("/history/Listin",(req,res)=>{
    cnx.query("SELECT * FROM history ORDER BY date",(error,datos)=>{
        
    try{
    res.status(200).send(datos);
    }catch(error){
        console.log(error);
    }
    });
})//listo


history.get("/history/Listin/:id",(req,res)=>{
    let id = req.params.id;
    cnx.query("SELECT * FROM history WHERE id = "+id, (error,datos)=>{
    try{
    
        if(datos == ""){
            res.status(200).send("Don't exist");
        }else{
            res.status(200).send(datos);
        }
    }catch(error){
    
    console.log(error);
    }
    });
})//listo

history.get("/history/deleteid/:id",(req,res)=>{
        let id = req.params.id;
        cnx.query("DELETE FROM history WHERE id = "+id, (error,datos)=>{
           
        try{
        res.status(200).send("Success delete");
        }catch(error){
        console.log(error);
        }
        });
        })//listo
        

        history.get("/history/insert/:name/:lastname/:nickname/:email/:type",(req,res)=>{
            let description = req.params.description
            let date = req.params.date
            let note = req.params.note
    
            cnx.query("INSERT INTO history VALUES ", (error,datos)=>{
            try{
            res.status(200).send("Success insert");
            }catch(error){
            console.log(error);

         
            }
            
             
            });
            })


            history.put("/history/update/:id",(req,res)=>{
                let id = req.params.id;
                let frmData = {
                    description: req.body.description,
                    date: req.body.date,
                    note: req.body.note
                }   
                 cnx.query("UPDATE history SET ? WHERE id= ?",[frmData,id], (error,datos)=>{
        
                 try{
                     res.status(200).send("Success update");
                    }catch(error){
                        console.log(error);
                            }
                            
                            });
                            })

module.exports = history;
