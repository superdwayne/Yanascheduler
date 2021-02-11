const express = require('express')
var path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()
require('dotenv').config();
const { mongoFind, mongoInsert } = require('./../mongo')
const nodemailer = require('nodemailer');
const peopleRoute = require('./people');

const port = process.env.PORT || 8080

console.log(process.env.NODE_ENV)

app.use(cors())


app.use('/styles', express.static(path.join(__dirname, 'public')))


app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Origin', '*');
    // res.setHeader('Content-Type', 'html/css'); Use if you want to download what you've sent
	next(); 
});

app.use(bodyParser.urlencoded({
   extended: false
}));

const people =[]

app.use('/api/people', peopleRoute)


// app.all('/', (req, res) => {
// 	if (req.method === 'GET') {

// // mongoFind('people', {}, 0, response => {
// //         res.send(response)
// //     })


 

//     // if (people.length >= 1){

//     //     var transporter = nodemailer.createTransport({
//     //         service: 'gmail',
//     //         auth: {
//     //           user: `${process.env.USERNAME}`,
//     //           pass: `${process.env.PASSWORD}`
//     //         }
//     //       });
        
//     //     var mailOptions = {
//     //         from: 'ddpmarshall@gmail.com',
//     //         to: 'superdwayne@gmail.com',
//     //         subject: 'Someone wants to meet Yana',
//     //         text: 'Yana has a new booking'
//     //       };
        
//     //       transporter.sendMail(mailOptions, function(error, info){
//     //         if (error) {
//     //           console.log(error);
//     //         } else {
//     //           console.log('Email sent: ' + info.response);
//     //         }
//     //       });

//     // } else {

//     //     console.log('did not send email')

//     // }
        
    
        
// 	} else if (req.method === 'POST') {
           
//         res.redirect('https://yana-scheduler.herokuapp.com/con/index.html')
//         // res.redirect('http://localhost:3000/con/index.html')
    
//         const obj = {
//             name: req.body.name,
//             time: req.body.time,
//             date: req.body.date,
//            }
//            people.push(obj);
           
//            res.end();
// 	}
// });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, './build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
  });
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})