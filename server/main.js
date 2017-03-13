var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
	res.status(200).send('hola mundo');
});


server.listen(8080, function() {
	console.log("servidor escuchando en el 8080");
});


