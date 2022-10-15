/* eslint-disable no-unused-vars */

// Properties on Object Literal
// the function `setPropsOnObj`
// sets x to 7
// sets `y` to 8 (and we can use a string to access it)
// sets the property `onePlus` to a function that adds one to its argument

function setPropsOnObj(object) {
  //   object.x = 7;
  object['x'] = 7;
  object.y = 8;
  //   object['y'] = 8;
  object.onePlus = function (num) {
    return num + 1;
  };
}

setPropsOnObj();

// object {
//     x: 0, <--- will redefine
//     y: 0, <--- will redefine
// }

// Properties on an Array Object
// the function `setPropsOnArr`
// sets the property `hello` to a function that returns the string `Hello!`
// sets the property `full` and assigns the value `stack`
// accesses the zeroth index value in the array
// sets the property 'twoTimes' to a function that multiplies its parameter by 2

function setPropsOnArr(arrayObject) {
  ((arrayObject.twoTimes = function (num) {
    return num * 2;
  }),
  (arrayObject[0] = 5)),
    (arrayObject.full = 'stack'),
    (arrayObject.hello = function (str) {
      return (str = 'Hello!');
    });
}
setPropsOnArr();

// Properties on a Function Object
// the function `setPropsOnFunc`
// sets year to 20??
// sets `divideByTwo` to a function that accepts a number and returns the value divided by two

function setPropsOnFunc(functionObject) {
  (functionObject.year = '20??'),
    (functionObject.divideByTwo = function (num) {
      return num / 2;
    });
}

// shallowCopy
// is a function
// merges and returns a shallow copy of two arrays
// merges and returns a shallow copy of an object

function shallowCopy(collection1, collection2) {
  if (Array.isArray(collection1) && Array.isArray(collection2)) {
    return [...collection1, ...collection2];
  } else {
    return {
      ...collection1,
      ...collection2,
    };
  }
}
