const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

// allItems: an array of string that we need to look through
// itemsToCount: an object specifying what to count
// the function should return how many instances of each string were found in the allItems array of strings.

const countOnly = function(allItems, itemsToCount) {
  const results = {}

  //loop over all the items in the array
  for (const item of allItems) { 
    //if condition to only increment our count in results if the item is found in the itemsToCount object
    if (itemsToCount[item]) {
      //increment the count of each item into results as we encounter each string item in the array
      if (results[item]) {
        results[item] += 1; 
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }

  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);