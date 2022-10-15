/* eslint-disable no-unused-vars */

// shortand object syntax
// the object "dog" should be in the global scope
// has methods and uses shorthand-method syntax
// uses the global name variable and assigns it as a property using shorthand-property syntax
// creates a bark method on dog
// uses the global variable loud to create the method loudBark

const loud = 'loud';
// object "dog" in global scope
let dog = {
  //uses the global name variable and assigns it as a property using shorthand-property syntax
  name: 'Cody',
  // has methods and uses short-hand method syntax
  bark() {
    // creates a bark method on dog
    return 'ruff ruff!';
  },
  // uses the global variable loud to create the method loudBark
  [`${loud}Bark`]: function () {
    return this.bark().toUpperCase();
  },
};
