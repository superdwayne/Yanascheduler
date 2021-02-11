const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
require('dotenv').config();
const middleware = require('./middleware');
const peopleRoute = require('./people');

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 8080
app.use(cors())

app.use('/api/people', middleware.verifyLogin, peopleRoute);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))