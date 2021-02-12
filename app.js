const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
const jsonParser = bodyParser.json()
require('dotenv').config();

const peopleRoute = require('./api/people');

app.use('/api/people', peopleRoute);

const app = express()
app.use(bodyParser.json())

const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'app/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/build' ,'index.html'))
})