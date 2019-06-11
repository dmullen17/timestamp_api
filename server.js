// server.js

// initialize project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

function parseTimestamp(date) {
  if (date) return new Date(date);
  return new Date();
}

app.get("/api/timestamp/:date_string?", function(req, res) {
  const date = parseTimestamp(req.params.date_string);
  res.json({'unix': date.getTime(),
            'utc': date.toUTCString()});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});