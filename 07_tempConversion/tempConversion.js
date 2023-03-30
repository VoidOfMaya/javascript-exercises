const convertToCelsius = function(x) {
  let convertToC = (x -32) * 5/9;
  return Number(convertToC.toFixed(1));
};

const convertToFahrenheit = function(x) {
  let convertToF =(x * 9/5) + 32;
  return Number(convertToF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

//npm test tempConversion.spec.js
