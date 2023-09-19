#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 20;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
  } else {
      const films = JSON.parse(body).results;
      const count = films.filter((film) =>
        film.characters.some((character) => character.endsWith(`/${characterId}/`))
      ).length;
      console.log(count);
    
  }
});
