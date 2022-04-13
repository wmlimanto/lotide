const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

//Implement middle which will take in an array and return the middle-most element(s) of the given array.

const middle = function(array) {
  const index = Math.floor(array.length / 2);
  let newArray = [];

  if (array.length <= 2) {
    newArray = [];
  } else if (array.length % 2 !== 0) {
    newArray.push(array[index]);
  } else if (array.length % 2 === 0) {
    for (i = index - 1; i <= index; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

module.exports = middle;