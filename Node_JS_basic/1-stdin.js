// 1-stdin.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  console.log(`your name is: ${input}`);
});

rl.on('close', () => {
  console.log('This important software is now closing\n');
  rl.close();
});
