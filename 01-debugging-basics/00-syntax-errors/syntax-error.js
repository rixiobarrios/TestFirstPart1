/* eslint-disable no-unused-vars */

// helloWorld
// a `hi` variable is in the global scope
// a `world` variable is in the global scope
// the function helloWorld returns a string
// the object `goodbyeWorld` has three keys

const hi = 'hi';
const bye = 'bye';
const world = 'world';
function helloWorld() {
  return `${hi} ${world}`;
}
const goodbyeWorld = {
  good: 'good',
  bye,
  world,
};
