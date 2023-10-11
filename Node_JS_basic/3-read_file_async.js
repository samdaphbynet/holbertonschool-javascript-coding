// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

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

      console.log(`Number of students: ${students.length}`);

      const result = {
        totalStudents: students.length,
        fields: {},
      };

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);

          result.fields[field] = {
            count: fields[field].length,
            list: fields[field],
          };
        }
      }

      resolve(result);
    });
  });
}

module.exports = countStudents;
