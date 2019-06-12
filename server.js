// server.js

// initialize project
var express = require('express');
var app = express();


// Serve the index.html file at the entry point 
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Serve static assests
app.use(express.static('public'));

// An easter egg greeting endpoint  
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'Hi There!  Try the /api/timestamp/:date_string? endpoint 😉'});
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