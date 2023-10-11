// 4-http.js

const app = require('http');

const hostname = 'localhost';
const port = 1245;

const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'test/plain');
  res.end('Hello Holberton School!');
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
