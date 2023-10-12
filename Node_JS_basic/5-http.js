// // 5-http-js

const http = require('http');
const students = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    students(process.argv[2]).then((data) => {
      res.write(`Number of students: ${data.totalStudents}\n`);
      for (const field in data.fields) {
        if (Object.prototype.hasOwnProperty.call(data.fields, field)) {
          res.write(`Number of students in ${field}: ${data.fields[field].count}. List: ${data.fields[field].list.join(', ')}\n`);
        }
      }
      res.end();
    }).catch((err) => res.end(err.message));
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
