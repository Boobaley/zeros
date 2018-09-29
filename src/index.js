module.exports = function getZerosCount(number) {
  // your implementation
  let result = 0;
  let devider = 5;

  if (number > 4) {
    while (number / devider >= 1) {
      result += Math.floor(number / devider);
      devider = devider * 5;
    }
  }

  return result;
}
