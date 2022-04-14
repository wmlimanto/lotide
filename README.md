# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @wmlimanto/lotide`

**Require it:**

`const _ = require('@wmlimanto/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assert whether two arrays are equal
* `assertEqual(...)`: assert whether two values are equal
* `assertObjectsEqual(...)`: assert whether two objects are equal
* `countLetters(...)`: count the number of letters in a sentence string
* `countOnly(...)`: count the number of specified items in an array
* `eqArrays(...)`: check whether two arrays are an exact match
* `eqObjects(...)`: check whether the key-value pairs of two objects are identical
* `findKey(...)`: find the first key of an object through a callback function
* `findKeyByValue(...)`: find the first key of an object given its value pair
* `flatten(...)`: return nested arrays into a single array
* `head(...)`: return the value of the first index in an array
* `letterPositions(...)`: return an array of all the indices of a specified letter within a sentence string
* `map(...)`: return a new array based on the results of the callback function
* `middle(...)`: return the value of the middle-most index in an array
* `tail(...)`: remove the first index of an array and return the new array
* `takeUntil(...)`: return a slice of an array with elements taken from the beginning until the value matches a callback function
* `without(...)`: return a subset of a given array and remove unwanted items