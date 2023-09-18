#!/usr/bin/node

// script that prints the title of a Star Wars movie where the episode number matches a given integer id.

const request = require('request')
const id = process.argv[2];
const url = "https://swapi-api.hbtn.io/api/films/"

const resultUrl = url + id;

request(resultUrl, (error, response, body) => {
    if (error) {
        console.log(error);
    }
    else {
        const data = JSON.parse(body);
        console.log(data.title);
    }
})