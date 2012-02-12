var opentok = require('opentok');
var ot = new opentok.OpenTokSDK('11831892', 'fc512f1f3c13e3ec3f590386c986842f92efa7e7');

exports.start = function(io) {
  console.log('ot shit ', ot);
  io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
    socket.on('joined', function (data) {
        console.log('Joined!', data);
       /* ot.createSession('localhost', {}, function() {
          var data = {
            sessionId: session.sessionId,
            token: ot.generateToken({ 
              sessionId: session.sessionId,
              role: opentok.Roles.MODERATOR
            })
          };
          //client.emit('joined', {data: data});
        });*/ 
          // Send initialization data back to the client
         // 
        socket.emit('joined', {hey: 'hey'});
     });

    io.sockets.on('joined', function(message) {
      console.log(message);
    });
  });
}

