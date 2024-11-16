const convertToCelsius = function(num) {
  let Celsius = Math.round(((num - 32) / 1.8)*10)/10;
  return Celsius;
};

const convertToFahrenheit = function(num) {
  let Fahrenheit = Math.round(((num * 1.8) + 32)*10 ) /10;
  return Fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
