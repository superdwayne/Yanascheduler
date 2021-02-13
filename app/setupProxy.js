const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
 
const app = express();

app.use('/api/**', createProxyMiddleware({ target: 'https://yana-scheduler.herokuapp.com/', changeOrigin: true }));
app.listen(8000);