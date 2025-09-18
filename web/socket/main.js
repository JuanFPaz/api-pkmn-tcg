const ws = new require('ws');
const wss = new ws.Server({noServer: true});
const http = require('node:http')
const clients = new Set();

http.createServer((req, res) => {
  // aquí solo manejamos conexiones websocket
  // en proyectos reales tendremos también algún código para manejar peticiones no websocket
  wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
});

function onSocketConnect(ws) {
  clients.add(ws);

  ws.on('message', function(message) {
    message = message.slice(0, 50); // la longitud máxima del mensaje será 50

    for(let client of clients) {
      client.send(message);
    }
  });

  ws.on('close', function() {
    clients.delete(ws);
  });
}