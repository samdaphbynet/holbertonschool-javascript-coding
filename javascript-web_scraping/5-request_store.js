#!/usr/bin/node

const fs = require('fs');

const request = require('request');

const url = process.argv[2];

const arg2 = process.argv[3];

request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        fs.writeFile(arg2, body, (err) => {
            if (err) throw err;
        })
    }
})