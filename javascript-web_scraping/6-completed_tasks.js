#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
    const todo = JSON.parse(body);
    const completed = {};

    todo.forEach((item) => {
        if (item.completed) {
            if (completed[item.userId]) {
                completed[item.userId]++;
            }else {
                completed[item.userId] = 1;
            }
        }
    });
    console.log(completed);
})