const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const { mongoFind, mongoInsert } = require('./../mongo')
const middleware = require('./middleware');
const cors = require('cors')
app.use(cors())

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
})

app.get('/', (req, res) => {
    
    // res.send('root')
    mongoFind('people', {}, 0, response => {
        res.send(response)
    })

})
const people = []


app.post('/', (req, res) => {

    const obj = {
        name: req.body.name,
        time: req.body.time,
        date: req.body.date,
    }
    people.push(obj);

    mongoInsert('people', people, response => {

        console.log("Inserted into DB", response.result.ok)
    })


})

module.exports = app;
