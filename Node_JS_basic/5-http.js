// // 5-http-js

const http = require('http');
const url = require('url');
const fs = require('fs').promises;

async function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      const students = lines.slice(1).filter((line) => line).map((line) => line.split(','));
      const fields = {};
      for (const student of students) {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }
      let output = `Number of students: ${students.length}\n`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      return output;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (reqUrl === '/students') {
    const path = process.argv[2];
    res.write('This is the list of our students\n');
    countStudents(path)
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((err) => {
        res.write(err.message);
        res.end();
      });
  }
});
app.listen(1245);
module.exports = countStudents;
