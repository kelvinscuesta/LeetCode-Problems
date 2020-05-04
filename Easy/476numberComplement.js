/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  // given a positive integer find its complement which is to flip the binary bits

  // 5 becomes 2 because 101 is 010

  // can use the ~ character that represents the binary not or flips the bits around

  // have to be cognizant of the leading 0s that cause a problem with how the not is working

  // turn into a binary string and split and join it while changing each element

  return parseInt(
    num
      .toString(2)
      .split('')
      .map(el => (el === '0' ? '1' : '0'))
      .join(''),
    2
  );
};
