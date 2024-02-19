/*Microservicio para crear el CRUD del historial delictivo de las personas de la galaxia */

const express = require("express");
const cnx = require("./bdata");
const history = express.Router();

/* Desarrollo de CRUD */


//Consultar

history.get("/history/Listin", (req, res) => {
    cnx.query("SELECT * FROM history ORDER BY date", (error, datos) => {

        try {
            res.status(200).send(datos);
        } catch (error) {
            console.log(error);
        }
    });
})//listo


history.get("/history/Listin/:id", (req, res) => {
    let id = req.params.id;
    cnx.query("SELECT * FROM history WHERE id = " + id, (error, datos) => {
        try {

            if (datos == "") {
                res.status(200).send("Don't exist");
            } else {
                res.status(200).send(datos);
            }
        } catch (error) {

            console.log(error);
        }
    });
})//listo

history.get("/history/deleteid/:id", (req, res) => {
    let id = req.params.id;
    cnx.query("DELETE FROM history WHERE id = " + id, (error, datos) => {

        try {
            res.status(200).send("Success delete");
        } catch (error) {
            console.log(error);
        }
    });
})//listo


history.get("/history/insert/:description/:date/:note/:idPerson", (req, res) => {
    let description = req.params.description
    let date = req.params.date
    let note = req.params.note
    let idPerson = req.params.idPerson

    cnx.query("INSERT INTO history VALUES ('','" + description + "','" + date + "','" + note + "','" + idPerson + "') ", (error, datos) => {
        try {
            res.status(200).send("Success insert");
        } catch (error) {
            console.log(error);


        }


    });
})


history.get("/history/update/:id/:description/:date/:note/:idPerson", (req, res) => {
    let id = req.params.id;
    let description = req.params.description
    let date = req.params.date
    let note = req.params.note
    let idPerson = req.params.idPerson

    cnx.query("UPDATE history SET description = '" + description + "', date = '" + date + "' , note = '" + note + "', id_people = '" + idPerson + "' WHERE id= " + id, (error, datos) => {

        try {
            res.status(200).send("Success update");
        } catch (error) {
            console.log(error);
        }

    });
})

module.exports = history;
