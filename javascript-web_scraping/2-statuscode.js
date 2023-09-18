#!/usr/bin/node
// Make sure you have the "request" module installed. If you don't have it installed, you can install it using npm:

// npm install request

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
    if (error) {
        console.log(error.message);
    }
    console.log(`code: ${response.statusCode}`);
})