var express = require('express');
var stylus = require('stylus');
var nib = require('nib');

var app = express();

const PORT = process.env.PORT || 3000;

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] == 'https') {
    res.redirect('http://' + req.hostname + req.url);  
  } else {
    next();
  }
});

app.use(stylus.middleware(
  {
    src: __dirname + '/public'
    , compile: compile
  }
))

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port 3000');
});
