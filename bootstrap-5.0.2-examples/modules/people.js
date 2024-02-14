/*Microservicio para crear el CRUD de las personas de la galaxia */

const express = require("express");
const cnx = require("../modules/bdata");
const people = express.Router();


/* Desarrollo de CRUD */


//Consultar

people.get("/people/Listin",(req,res)=>{
    cnx.query("SELECT * FROM people ORDER BY id",(error,datos)=>{
        
    try{
    res.status(200).send(datos);
    }catch(error){
        console.log(error);
    }
    });
})//listo


people.all("/people/Listin/:id",(req,res)=>{
    let id = req.params.id;
    cnx.query("SELECT * FROM people WHERE id = "+id, (error,datos)=>{
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

    people.all("/people/deleteid/:id",(req,res)=>{
        let id = req.params.id;
        cnx.query("DELETE FROM people WHERE id = "+id, (error,datos)=>{
           
        try{
        res.status(200).send("Success delete");
        }catch(error){
        console.log(error);
        }
        });
        })//listo
        

        people.get("/people/insert/:name/:lastname/:nickname/:email/:type",(req,res)=>{
            let name = req.params.name
            let lastname = req.params.lastname
            let nickname = req.params.nickname
            let email = req.params.email  
            let type = req.params.type
            cnx.query("INSERT INTO people VALUES ('','"+name+"','"+lastname+"','"+nickname+"','"+email+"', "+type+")", (error,datos)=>{
            try{
            res.status(200).send("Success insert");
            }catch(error){
            console.log(error);

         
            }
            
             
            });
            })


        people.put("/people/update/:id",(req,res)=>{
                let id = req.params.id;
                let frmData = {
                    name: req.body.name,
                    lastname: req.body.lastname,
                    nickname: req.body.nickname,
                    email: req.body.email,
                    type: req.body.type
                }   
                 cnx.query("UPDATE people SET ? WHERE id= ?",[frmData,id], (error,datos)=>{
        
                 try{
                     res.status(200).send("Success update");
                    }catch(error){
                        console.log(error);
                            }
                            
                            });
                            })

module.exports = people;