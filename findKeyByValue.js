const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//findKeyByValue takes in an object and a value. it should scan the object and return the first key which contains the given value. if no key with that given value is found, then it should return undefind. 

const findKeyByValue = function(object, value) {
  
  const results = Object.keys(object);

  for (const key of results) {
    if (object[key] === value) {
      return key;
    }
  } 
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);