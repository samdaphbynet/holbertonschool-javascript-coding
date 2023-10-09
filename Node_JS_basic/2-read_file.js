// 2-read_file.js

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function countStudents(filePath) {
  const fullPath = path.resolve(filePath);
  const students = [];

  try {
    fs.createReadStream(fullPath).pipe(csv()).on('data', row => {
        students.push(row);
      })
      .on('end', () => {
        console.log('Number of students:', students.length);

        const fields = ['CS', 'SWE'];
        fields.forEach(field => {
          const fieldStudents = students.filter(student => student.field === field);
          console.log(
            `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents
              .map(student => student.firstname)
              .join(', ')}`
          );
        });
      });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
