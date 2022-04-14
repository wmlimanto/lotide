const { callbackify } = require("util");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//findKey takes in an object and a callback. it should scan the object and return the first key for which the callback returns a truthy value. if no key is found, it should return undefined.

const findKey = function(object, callback) {

  const results = Object.keys(object); //store keys of object (movie names) in an array called results

  for (let key of results) { //for each movie within the array of movie names
    if (callback(object[key])) { //compares callback.stars value with the key-value pair (in this case, the stars for each movie) and exits after it finds the first match
      return key;
    }
  }
}

module.exports = findKey;

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, callback => callback.stars === 2));
  

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, callback => callback.stars === 2);
  
assertEqual(result, "noma");