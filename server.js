var Server = require('ws').Server;
var port = 3003;
var ws = new Server({port: port});

ws.on('connection', (w) => {
  
  w.on('message', (msg) => {
    console.log('message from client',msg);
  });
  
  w.on('close', () => {
    console.log('closing connection');
  });

});

console.log(`Server listening on port ${port}...`);
