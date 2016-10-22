// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {
	count: 12,
	message: 'hey'
};
var fs = require('fs');
var express = require('express');
var app = express();
// On Hitting the Root, it should return the html file

app.get('/', function(req, res) {
	fs.readFile('./index.html', (err, data) => {
		if (err) throw err;
		console.log(data);
		// Send the HTMl response
		console.log(data);
		res.setHeader('Content-type','text/html')
		res.send(data);
	});
});

app.get('/data', function(req, res) {
	res.json(jsonData);
});


// start server on port 3000
app.listen(3000);
