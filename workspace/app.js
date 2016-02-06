//Server-side  Create a Server
//<Send>:socket.emit
//<Send>:io.emit(server-side)
//<Receive>:socket.on
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

var user_count = 0;

//The new user is connacting into Server
io.on('connection', function(socket){

	//<Read>Add New User|socket.on to tell server someone join chat room
	socket.on('add user',function(msg){
		socket.username = msg;
		console.log("New user:" + msg + " logged.");
		io.emit('add user',{username: socket.username});//<send>io.emit sends message to other users
	});

	//<Read>Create a server monitor, to catch every message
	socket.on('chat message', function(msg){

		console.log(socket.username + ":" + msg);

  		//<Send>release new messages to all client-users
		io.emit('chat message', {
			username:socket.username,
			msg:msg
		});
	});

	//left chat room,disconnect server
	socket.on('disconnect',function(){
		console.log(socket.username+" left.");
		io.emit('user left',{
			username:socket.username
		});
	});


});

//指定port
http.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//http.listen(process.env.PORT || 3000, function(){
    //console.log('listening on *:3000');
    var addr = http.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});