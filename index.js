const express = require('express')
var path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()
require('dotenv').config();
const peopleRoute = require('./api/people');

const nodemailer = require('nodemailer');
const port = process.env.PORT || 8000

app.use(cors())

app.use('/api/people', cors(), peopleRoute, (req, res) => {
  console.log("Connect to end poing" )
})

if (process.env.NODE_ENV == 'production') {
 // Serve any static files
 app.use(express.static(path.join(__dirname, '/app/build')));
 // Handle React routing, return all requests to React app
   app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, '/app/build', 'index.html'));
   });
}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
