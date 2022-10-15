/* eslint-disable no-unused-vars */

// the function `hello`
// says hello
// says hello to someone

function hello(name) {
  if (typeof name === 'undefined') {
    return 'Hello!';
  } else {
    return `Hello, ${name}!`;
  }
}

// the function `add`

function add(number, num) {
  return number + num;
}
