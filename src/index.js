const str = 'ES6';
console.log(`Hello ${str}`);

const Dog = require('./dog');

const tiny = new Dog('tiny');
console.log(tiny.bark())