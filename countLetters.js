const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//the function should take in a sentence as a string and then return a count of each of the letters in that sentence
//logic: perhaps this function could return an object where each unique character encountered in the string is a property of the object and the value for that property/key should be the number of occurrences for that character

const countLetters = function(allItems, itemsToCount) {
  const results = {};

  //loop over all the items in the array
  for (const item of allItems) {
    //count each element in the array 
    if (item !== ' ') { //if there is no ' ', then run the function
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
}
  console.log(results);

  return results;
}

countLetters("lighthouse is in the house");
countLetters("sam has six boxes of shells");