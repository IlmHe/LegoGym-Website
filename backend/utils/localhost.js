'use strict';

const https = require('https');
const http = require('http');
const fs = require('fs');
const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

// Localhost environment

const options = {
  key: sslkey,
  cert: sslcert
};

const httpsRedirect = (req, res) => {
  res.writeHead(301, { 'Location': 'https://localhost:8000' + req.url });
  res.end();
};

module.exports = (app, httpPort) => {
  https.createServer(options, app).listen(8000);
  http.createServer(httpsRedirect).listen(httpPort);
};