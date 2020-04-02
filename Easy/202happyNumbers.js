// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

const isHappy = number => {
  // if it reaches 5 or 4 it will cycle and can return false
  // 19 passes
  // 21 fails

  // if when we are looping we reach a sum of any of these we fail and num is not happy
  const cycleNums = {
    0: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    8: true,
    9: true,
    52: true,
    85: true,
    89: true,
    58: true,
    37: true,
  };

  let workNum = number;

  while (!cycleNums.hasOwnProperty(workNum)) {
    // take the number and split the digits up
    // square the digits
    // and sum the squares
    // reassign the number

    let sumSquares = workNum
      .toString()
      .split('')
      .map(digit => parseInt(digit))
      .reduce((sum, element) => sum + element ** 2, 0);

    if (sumSquares === 1) return true;

    workNum = sumSquares;
  }
  return false;
};

console.log(isHappy());
