//requires express, runs express
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

//requires the puns.js file
//puts pun array from puns.js into /pun path
var puns = require("./puns");
app.get('/puns', function (req, res) {
	res.send(puns);	
});

//runs randomPun function and sends info to /random_pun path
function randomPun() {
	return puns.puns[Math.floor(Math.random() * puns.puns.length)];
}
app.get('/random-pun', function (req, res) {
	res.send(randomPun());
});

// Start the server.
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});