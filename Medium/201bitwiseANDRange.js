/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  // given a range of nums from m to n inclusive
  // give the bitwise AND of all numbers in the range

  // 0 = 0000
  // 1 = 0001
  // 2 = 0010
  // 3 = 0011
  // === 0000 or 0

  // 5 = 0101
  // 6 = 0110
  // 7 = 0111
  // 4 = 0100

  //    5 =   0000 0101
  /*    6 =   0000 0110
    7 =   0000 0111
    8 =   0000 1000
    9 =   0000 1001
   10 =   0000 1010
   11 =   0000 1011
   12 =   0000 1100
   13 =   0000 1101
   14 =   0000 1110
   15 =   0000 1111
   16 =   0001 0000
    
         15 - 8 is 8
         2^4 to 2^3 = lowest power of 2 
         
  */
  // 0001
  // 0010
  // 0011
  // depends on the range
  // only if they're in the range of a power of 2

  // this means that for all those numbers they have to be able to be divided or subtracted by
  // a power of 2

  // 2^31 is the max that n could be or

  // if the ranges are equal only one value
  if (m === n) return m & n;

  // otherwise want to

  // want to keep finding the max common log they share
  // then add that to a count

  let finalLog = 0;

  // if after decrementing they reach m & n = 0 we return out the final value

  while ((m & n) !== 0 && m !== 1) {
    if (Math.floor(Math.log2(n)) - Math.floor(Math.log2(m)) > 0) break;

    if (m === 1) break;

    let commonLog = 2 ** (Math.floor(Math.log2(m)) & Math.floor(Math.log2(n)));

    finalLog += commonLog;

    m -= commonLog;
    n -= commonLog;

    // console.log(commonLog)
  }

  return finalLog;

};

console.log(rangeBitwiseAnd());
