/* eslint-disable no-unused-vars */

// The function `repeat`
// returns an empty string with 0 repeats
// repeats a string once
// repeats a string twice
// repeats a string many times
// does not use String.prototype.repeat

function repeat(string, times) {
  var result = '';
  while (times > 0) {
    result += string;
    times--;
  }
  return result;
}

// the function `sum`
// computes the sum of an empty array
// computes the sum of an array of one number
// computes the sum of an array of two numbers
// computes the sum of an array of many numbers

function sum(arr) {
  let sum = 0; // initialize sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// the function `join`
// turns an empty array into an empty string
// turns an array with one element into a string
// turns an array with many elements into a string
// inserts a delimiter between elements
// ignores non-indexed properties set on the array object
// does not call Array.prototype.join

// var join = (arr, separator = ' ') => {
//   let result = '';
//   for (var i = 0; i < arr.length; i++) {
//     if (result) {
//       result += separator;
//     }
//     result += arr[i];
//   }
//   return result;
// };

// the function `gridGenerator`
// returns an empty string when input is 0
// creates a grid with 3 columns and rows when input is 3
// creates a grid with 2 columns and rows when input is 2

function gridGenerator(input) {
  let result = '';
  for (var i = 1; i <= input; i++) {
    for (var j = 1; j <= input; j++) {
      if ((i + j) % 2 == 0) {
        result = result + '#';
      } else {
        result = result + ' ';
      }
    }

    result = result + '\n';
  }
  console.log(result);
}

//   if (input === 0) {
//     return '';
//   } else if (input === 3) {
//     console.log('create a grid with 3 columns and rows');
//   } else if (input === 2) {
//     console.log('create a grid with 2 columns and rows');
//   }
// }
