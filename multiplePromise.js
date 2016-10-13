'use strict';

const fetch = require('node-fetch');
const request = require('request');

console.log('*****************************************************');
console.log('Multiple Promises');
console.log('*****************************************************');
function extractStatusCode(response) {
  return response.status + 1;
}

fetch('http://httpbin.org/get')
.then(extractStatusCode)
//if the handler function that we pass to 'then' or 'catch' method returns a value or another Promise, the Promise-chain will continue
//In our case we are doing a minor data manipulation by adding the response code with 1, so this is valuable when one wants to do data manipulation to a response and send it further down the chain
.then(statusCode => {
  console.log('Request using Promises done. Response status code: %d', statusCode);
})
.catch(error => {
  console.error('something went wong with the promise code:');
  console.error(error.message);
})