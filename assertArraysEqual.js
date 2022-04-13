const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  if ((eqArrays(firstArray, secondArray)) === true) {
    console.log(`✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArraysEqual;
