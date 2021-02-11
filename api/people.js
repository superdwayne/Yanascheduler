const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = express.Router();
const jsonParser = bodyParser.json()
const { mongoFind, mongoInsert } = require('./../mongo')
const middleware = require('./middleware');


router.get('/', (req, res) => {

    
    // res.json('root')
    // let limit = 0
    // mongoFind('people', {}, limit, response => {
    //     res.send(response)
    // })

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