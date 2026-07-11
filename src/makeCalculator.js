'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(a, b) {
      a + b;
    },

    substract(a, b) {
      a - b;
    },

    multiply(a, b) {
      a * b;
    },

    divide(a, b) {
      a / b;
    },

    reset() {
      thas.result = 0;
      return this;
    },

    operate(operation, value) {
      this.result = operation(this.result, value);
      return this;
    },
  };
}

module.exports = makeCalculator;
