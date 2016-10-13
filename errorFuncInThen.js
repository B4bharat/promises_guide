'use strict';

const fetch = require('node-fetch');
const request = require('request');

console.log('*****************************************************');
console.log('Error Handler in promises Example');
console.log('*****************************************************');
function extractStatusCode(response) {
  return response.status + 1;
}

fetch('invalid URL')
.then(extractStatusCode, errorInFetch => {
  //Since an invalid URL is tried to be fetched, its an error and is handled by an error handler and it doesn't goes to catch since we aren't 'throwing' an error[basically not rejecting the promise] ('catch()' method only handles rejected promises remember?!)
  //Since an error handler handles the error, the promise chain goes on the happy path(subsequest success handler) again and thats why we get a 'statusCode' as response.
  console.error('An error occured in the fetch call.');
  console.error(errorInFetch.message);
  return null;
})
.then(statusCode => {
  console.log('Request using Promises done. Response status code: %d', statusCode);
})
.catch(error => {
  console.error('something went wong with the promise code:');
  console.error(error.message);
})