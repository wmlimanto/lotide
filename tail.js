const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = array.splice(1);
  return newArray;
}

module.exports = tail;
