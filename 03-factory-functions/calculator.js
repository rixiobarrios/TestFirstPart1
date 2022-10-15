/* eslint-disable no-unused-vars */

// const createCalculator = function () {
//   return 0;
// };

const createCalculator = () => {
  //   class Calculator {
  //     constructor(props) {
  //       this.value = 0;
  //     }
  //     add(number) {
  //       this.value = this.value + number;
  //       return this;
  //     }
  //     subtract(number) {
  //       this.value = this.value - number;
  //       return this;
  //     }
  //     divide(number) {
  //       this.value = this.value / number;
  //       return this;
  //     }
  //     multiply(number) {
  //       this.value = this.value * number;
  //       return this;
  //     }
  //     compute() {
  //       return this.value;
  //     }
  //   }
  return {
    total: 0,
    value() {
      return this.total;
    },
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    clear() {
      this.total = 0;
    },
  };
};

// let calculator = new Calculator();
// let value = calculator.add(5).subtract(1).divide(2).compute();

// const createCalculator = () => {
//   // class constructor
//   let Calculator = function (valueOfA) {
//     this.a = valueOfA;
//     console.log('Creating the Object');
//   };
//   // class properties and methods
//   Calculator.prototype = {
//     // Hi, i'm a property
//     msg: 'Your sum is: ',
//     // this are my methods
//     valueA: function (a) {
//       this.a = a;
//     },
//     valueB: function (b) {
//       this.b = b;
//     },
//     sumValues: function () {
//       return this.msg + parseInt(this.a + this.b);
//     },
//   };

//   cal = new Calculator(200);
//   cal.valueB(16);
//   cal.sumValues();
// };
