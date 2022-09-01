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

const gumBrands = ['orbit', 'trident', 'chiclet', 'strident'];
const mintBrands = ['altoids', 'certs', 'breath savers', 'tic tac'];

const hockeyTeam = { ch: 'blackhawks' };
const baseballTeam = { ny: 'yankees' };

// function shallowCopy(arr1, arr2) {
//   //     return arr1.concat(arr2);
//   //   return Object.assign(arr1, arr2)
//   // const result1 = [...arr1, ...arr2];
//   // const result2 = { ...arr1, ...arr2 };
//   const result1 = arr1.concat(arr2);
//   const result2 = Object.assign(arr1, arr2);
//   // return [...arr1, ...arr2, { ...arr1, ...arr2 }];
//   return result1, result2;
// }

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

shallowCopy(gumBrands, mintBrands);
shallowCopy(hockeyTeam, baseballTeam);
