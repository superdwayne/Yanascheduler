const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const { mongoFind, mongoInsert } = require('../mongo')

router.get('/', (req, res) => {
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

module.exports = router;