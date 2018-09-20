var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('User ' + socket.id + ' connected.');
	socket.on('disconnect', function(){
		console.log('User ' + socket.id + ' disconnected.');
	});
});

http.listen(port, function(){
	console.log('listening on *:' + port);
});
