const http = require('http');

http.createServer((req, res) => {
  res.end('Hello S2I Incremental Build!');
}).listen(3000);
