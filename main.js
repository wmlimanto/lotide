//testing module.exports: connects with myModule.js

const sayHelloTo = require('./myModule.js');

console.log('sayHelloTo: ', sayHelloTo);

sayHelloTo('Bernie');
