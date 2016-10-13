'use strict';

const fetch = require('node-fetch');
const request = require('request');

console.log('*****************************************************');
console.log('Basic Promise Example');
console.log('*****************************************************');
//'fetch' returns a promise object, if the promise is resolved, it returns data [response.status] in our case, if a promise is rejected, it returns a reason for rejection.
fetch('http://httpbin.org/get')
.then(response => {
  console.log('Request using Promises done. Response status code: %d', response.status);
})
.catch(error => {
  console.error('something went wong with the promise code:');
  console.error(error.message);
})