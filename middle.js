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

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]