/* eslint-disable no-unused-vars */

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

function setPropsOnFunc(functionObject) {
  (functionObject.year = '20??'),
    (functionObject.divideByTwo = function (num) {
      return num / 2;
    });
}
