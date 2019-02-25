const express = require('express');
const app = express();
const http = require('http');
const dist = __dirname + '/../dist';
const PORT = process.env.PORT || 3400;

app.use(function (req, res, next) {

  if ('production' === process.env.NODE_ENV) {

    if (req.url.indexOf('.js') > -1) {
      res.setHeader('Content-Encoding', 'gzip');
      res.removeHeader('Content-Length');
      req.url += '.gz';
    }

  }

  next();

});

app.use('/', express.static(dist));

app.all('/*', function all(req, res) {
  res.sendFile('index.html', {root: dist});
});

http.createServer(app).listen(PORT);
