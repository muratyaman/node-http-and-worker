const http = require('node:http');
const { queue, tsLog } = require('../sharedLib');
const { processRequest } = require('./work');

const q = queue(); // to connect in main()

const server = http.createServer(httpHandler); // to listen in main()

let id = 0;

async function httpHandler(req, res) {
  id++;
  tsLog('new request...', id);

  const input  = { id, path: req.path, body: req.body, query: req.query };
  const output = await processRequest(input, q);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(output)); // respond to user first

  tsLog('new request...', id, 'handled!');
}

module.exports = { server, q };
