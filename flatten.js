const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if ((eqArrays(firstArray, secondArray)) === true) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(inputs) {
  let flattenedOutput = [];
  for (let input of inputs) {
    if (!Array.isArray(input)) {
      flattenedOutput.push(input);
    } else {
      for (let elements of input) {
        flattenedOutput.push(elements);
      }
    }
  }
  return flattenedOutput;
}

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4, 'testing'], 5, [6]])) // => [1, 2, 3, 4, 'testing', 5, 6]