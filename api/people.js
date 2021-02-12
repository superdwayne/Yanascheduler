const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = express.Router();
const jsonParser = bodyParser.json()
const { mongoFind, mongoInsert } = require('../mongo')


app.get('/', (req, res) => {

    mongoFind('people', {}, 0, response => {
        res.json(response)
      })

})
// const people = []


// app.post('/', (req, res) => {

//     const obj = {
//         name: req.body.name,
//         time: req.body.time,
//         date: req.body.date,
//     }
//     people.push(obj);

//     // mongoInsert('people', people, response => {

//     //     console.log("Inserted into DB", response.result.ok)
//     // })


// })

module.exports = app;