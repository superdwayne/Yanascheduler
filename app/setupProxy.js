//run defferent ports for website and api server 
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('../index.js', { target: 'http://localhost:8000/' })); //make change as per your application (So you can access your data on  http://localhost:8080/api/ )
};