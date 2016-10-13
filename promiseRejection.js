'use strict';

const fetch = require('node-fetch');
const request = require('request');

console.log('*****************************************************');
console.log('Promise Rejection Example');
console.log('*****************************************************');
function extractStatusCode(response) {
  return response.status + 1;
}

fetch('invalid URL')
.then(extractStatusCode, errorInFetch => {
  console.error('An error occured in the fetch call.');
  console.error(errorInFetch.message);
  return Promise.reject(errorInFetch);
})
.then(statusCode => {
  console.log('Request using Promises done. Response status code: %d', statusCode);
})
.catch(error => {
  console.error('Promise is rejected now with a reason, "catch()" method is meant to catch it');
  console.error(error.message);
})