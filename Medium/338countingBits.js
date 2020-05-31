/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  // looks like each number can just be the number added by the modulo or subtraction until we get zero

  // maybe we can memoize the results

  const cache = { 0: 0, 1: 1 };

  const binary = [];

  // test cases
  // don't have to worry about negative numbers because of constraint
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  binary.push(0, 1);

  //     for (let i = 2; i <= num; i += 1) {
  //         // console.log('log value of current num then floored:', Math.log2(i), Math.floor(Math.log2(i)));
  //         let oneCount = 0;
  //         let currentNum = i;

  //         // while our num is not equal to 0
  //         while (currentNum > 0) {
  //             const highestPowerOf2 = Math.floor(Math.log2(currentNum));
  //             if (cache.hasOwnProperty(currentNum)) {
  //                 oneCount += cache[currentNum];
  //                 currentNum -= currentNum;
  //                 continue;
  //             }

  //             // take the biggest modulo we can
  //             if (currentNum % (2 ** highestPowerOf2) >= 0) {
  //                 currentNum = currentNum % (2 ** highestPowerOf2);
  //                 // console.log(currentNum)
  //                 oneCount += 1;
  //             }
  //         }
  //         // console.log(i, oneCount);
  //         cache[i] = oneCount;
  //         binary.push(oneCount);
  //     }

  //     return binary;

  // each value is its power of two and the number of 1s at that point + 1
  // i pretty much emulated that using the cache

  for (let i = 2; i <= num; i += 1) {
    // for each bit check if its a power of two
    // if it is just push 1 to the binary array
    // if it isnt
    // subtract the highest power of 2
    // find that value in the binary array and add it
    // push the added value with 1

    const highestPowerOf2 = 2 ** Math.floor(Math.log2(i));

    // check for a power of 2 and break out
    if (Math.log2(i) % 2 === 0) {
      binary.push(1);
      continue;
    }

    binary.push(binary[i - highestPowerOf2] + 1);
  }
  return binary;
};
