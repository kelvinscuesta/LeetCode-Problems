/**
 * @param {number} num
 * @return {boolean}
 */
// can't use the native sqrt function, could also replicate it
var isPerfectSquare = function(num) {
  // can't use the sqrt function to find the square of a number
  // return out a boolean

  // a perfect square is a number that is derived from a number multiplying itself

  // so 4 is a perfect square because of 2 * 2
  // 1 4 9 16 25 36 49 64 81 100
  // starts at 1
  // can find each square by adding the derivative of x^2
  // which has a second derivative or rate of change of 2

  // we can do this until we are at the num or past it and can return false

  let square = 1;
  let first = 3;

  // 0 is not a square albeit I think so
  if (num === square) return true;

  // run the loop while the num is greater than
  while (num > square) {
    square += first;
    first += 2;
    if (num === square) return true;
  }

  return false;
};
