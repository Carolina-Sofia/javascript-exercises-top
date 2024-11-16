const add = function(a, b) {
  let sum = a + b;
  return sum;
	
};

const subtract = function(a, b) {
  let sub = a - b;
  return sub;
	
};

const sum = function(arr) {
  return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(...numbers) {
  numbers = numbers.flat();
  if (!numbers.every(num => typeof num === 'number')) {
    throw new Error("All arguments must be numbers");
  }

  return numbers.reduce((acc, num) => acc * num, 1);
}



const power = function(a, b) {
  let pow = a ** b;
  return pow;
	
};


const factorial = function(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
