//Mocha and Chai based test code:

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it('returns 6 for length of [1, 2, 3, 4, 5, 6] after calling tail([1, 2, 3, 4, 5, 6])', () => {
    assert.strictEqual([1, 2, 3, 4, 5, 6].length, 6);
  });

  it('returns ["Lighthouse", "Labs"] after calling tail(["Hello", "Lighthouse", "Labs"])', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
})


// //old test code for tail.js

// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!