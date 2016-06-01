var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send(generateCities());
});

app.listen(3000, function() {
	console.log("Accepting HTTP requests on port 3000.");
});

function generateCities(){
	var numberOfCities = chance.integer({
		min: 1,
		max: 10
	});
	console.log(numberOfCities);
	var cities = [];

	for(var i = 0; i < numberOfCities; i++) {
		var city = chance.city();
		var altitude = chance.altitude();
		cities.push({
			responsableName: chance.name(),
			city: city,
			altitude: altitude
		});
	}
	return cities;
}

