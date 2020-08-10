/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  // looks like we can just multiply the place we are in by

  // find the length of the string s
  // if length 2
  // then we have 26^1 and 26^0 and each multiplied by the corresponding letter

  // console.log(s.charCodeAt(1))

  // at each charCodeAt subtract 64

  // want to work backwards

  let columnNum = 0;
  let reversed = s.split('').reverse();

  for (let i = 0; i < reversed.length; i += 1) {
    const base = Math.pow(26, i);
    columnNum += (reversed[i].charCodeAt(0) - 64) * base;
  }

  return columnNum;
};
