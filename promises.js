'use strict';

const fetch = require('node-fetch');
const request = require('request');

console.log('*****************************************************');
console.log('Callback Example');
console.log('*****************************************************');
request.get('http://httpbin.org/get', (error, response, body) => {
  if (error) {
    console.error('Something went wrong');
    console.error(error.message);
    return
  }

  console.log('Request done. Response status code: %d', response.statusCode);
})