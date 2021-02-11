const express = require('express')
var path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()
require('dotenv').config();
const { mongoFind, mongoInsert } = require('./../mongo')
const peopleRoute = require('./people');

const nodemailer = require('nodemailer');

const port = process.env.PORT || 8000

console.log(process.env.NODE_ENV)

app.use('/styles', express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    // res.setHeader('Content-Type', 'html/css'); Use if you want to download what you've sent
	next();
});

app.use(bodyParser.urlencoded({
   extended: false
}));

const people =[]

// Localhost /api/people
app.use('/api/people', peopleRoute, (req, res) => {
  console.log('API people' , res)
})

app.all('/', (req, res) => {
  
	if (req.method === 'GET') {
        res.status(200);
        // res.send(people)

        mongoFind('people', {}, 0, response => {
           res.send(response)
          })

    
    //      var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: `${process.env.USERNAME}`,
    //       pass: `${process.env.PASSWORD}`
    //     }
    //   });
    
    // var mailOptions = {
    //     from: 'ddpmarshall@gmail.com',
    //     to: 'superdwayne@gmail.com',
    //     subject: 'Someone wants to meet Yana',
    //     text: 'Yana has a new booking'
    //   };
    
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });
    
        
	} else if (req.method === 'POST') {
           
        res.redirect('http://localhost:3000/styles/index.html')
    
        const obj = {
            name: req.body.name,
            time: req.body.time,
            date: req.body.date,
           }
           people.push(obj);

           mongoInsert('people', people, response => {
              console.log("Inserted into DB", response.result.ok)
            })
           
           res.end();
	}
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
