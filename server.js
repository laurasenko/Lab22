//requires express, runs express
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

//requires the puns.js file
//puts pun array from puns.js into /pun path
var puns = require("./puns");
app.get('/puns', function (req, res) {
	res.send(puns.puns);	
});

//runs randomPun function and sends info to /random_pun path
function randomPun() {
	return puns.puns[Math.floor(Math.random() * puns.puns.length)];
}
app.get('/random-pun', function (req, res) {
	res.send(randomPun());
});
	
/*var nextId = 1;
function getNextId () {
	return nextId++;
}

var tacos = [
	{ id: getNextId(), type: "American", fillings: ["beef", "lettuce", "cheese", "salsa"]},
	{ id: getNextId(), type: "Al Pastor", fillings: ["al pastor", "onion", "cilantro", "tomatoes"]}
];

app.get('/api/tacos', function (req, res) {
	res.send(tacos);
});

app.get('/api/tacos/:id', function (req, res) {
	var id = parseInt(req.params.id);
	var foundTaco = tacos.find(function(taco) { //<--like a for each loop but returns a value
		return taco.id ===id
	});

	if (foundTaco) {
	res.send(tacos[id]);
	} else {
		res.status(404);
		res.send("Taco not found");
	}
});


app.delete('/api/tacos/:id', function (req, res) {
	var id = parseInt(req.params.id);
	var tacoIndex = tacos.findIndex(function (taco) {

	})

app.post('/api/tacos/, function (req, res) {
	console.log(req.body);

});
*/
// Start the server.
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});