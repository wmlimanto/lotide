const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
}

assertEqual(head([7,6,5]), 5); //compares element 0 in head array (7) vs expected value in assertEqual function (5) 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //compares element 0 in head array (Hello) vs expected value in assertEqual function (Hello)
assertEqual(head([]), 5); //empty array should return undefined