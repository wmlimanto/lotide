//Mocha and Chai based test code:

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});


//old test code for head.js

// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([7,6,5]), 5); //compares element 0 in head array (7) vs expected value in assertEqual function (5) 
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //compares element 0 in head array (Hello) vs expected value in assertEqual function (Hello)
// assertEqual(head([]), 5); //empty array should return undefined