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

//function letterPositions will return all the indices (zero-based positions) in the string where each character is found

const letterPositions = function(sentence) {
  const results = {};

  for (let position = 0; position < sentence.length; position++) { //loop over all the letters in the sentence 
    if (position !== ' ') { //if there is no ' ', then run the function
      if (results[sentence[position]]) { //does this letter already exist, if it doesn't, then go to the next. if it does, then run the function below 
        results[sentence[position]].push(position) //push the duplicate value into the array
      } else {
        results[sentence[position]] = [position] //the value of the sentence[i] = [i], which is the index number
      }
    }
  }
  return results;
}

const testResults = letterPositions("lighthouse")
console.log(testResults);

assertArraysEqual(letterPositions("lighthouse is in the house").i, [1, 11, 14]);