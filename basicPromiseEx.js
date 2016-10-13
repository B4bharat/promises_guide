'use strict';

const fetch = require('node-fetch');
const request = require('request');

console.log('*****************************************************');
console.log('Basic Promise Example');
console.log('*****************************************************');
fetch('http://httpbin.org/get')
.then(response => {
  console.log('Request using Promises done. Response status code: %d', response.status);
})
.catch(error => {
  console.error('something went wong with the promise code:');
  console.error(error.message);
})