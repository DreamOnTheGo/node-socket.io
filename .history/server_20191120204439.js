var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message', function(msg){
    console.log(msg)
    socket.emit('message', msg)
  });
  socket.on('chat message', function(msg){
    console.log(msg)
    socket.emit('chat message', msg)
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    