const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');

const app = new express();
const server = new http.Server(app);

app.use(express.static('build', { }));

app.use(function (request, response) {
  try {
    fs.accessSync(path.join(__dirname, '/build/index.html'), fs.constants.F_OK);
    response.sendFile(path.join(__dirname, '/build/index.html'));
  } catch (e) {
    response.sendFile(path.join(__dirname, '/500.html'));
  }

});
const port = process.env.PORT || 3000;

server.listen(port, error => {
  if (error) {
    console.error(error);
  }
  else {
    console.info('Server is running on port %s.', port);
  }
});
