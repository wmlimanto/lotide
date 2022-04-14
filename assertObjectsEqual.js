//eqObjects function
const eqObjects = function(object1, object2) {

  const keysOfObject1 = Object.keys(object1);
  const keysOfObject2 = Object.keys(object2);

  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;
  }
  for (let key of keysOfObject1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key, object2[key]]);
    } else if (object1[key] !== object2[key]) {
      return false;
    } else {
      return true;
    }
  }
};

//function that helps us easily test functions that return objects

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect; //util library's inspect function

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false