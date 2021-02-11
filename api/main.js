const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors')

app.use(cors())
const port = 8080;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));