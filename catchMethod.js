'use strict';

const fetch = require('node-fetch');
const request = require('request');

console.log('*****************************************************');
console.log('Catch Method Example');
console.log('*****************************************************');
function extractStatusCode(response) {
  response = undefined;
  return response.status;
}

fetch('http://httpbin.org/get')
.then(extractStatusCode, errorInFetch => {
  //this won't be executed becuase the error is not in 'fetch' method, its in the success handler of the 'fetch' method.
  console.error('This won\' be executed');
  console.error(errorInFetch.message);
  return Promise.reject(errorInFetch);
})
.then(statusCode => {
  console.log('Request using Promises done. Response status code: %d', statusCode);
})
.catch(error => {
  //So catch method basically catches error from anywhere in the promise chain
  console.error('there is an error somewhere in the promise chain');
  console.error(error.message);
})