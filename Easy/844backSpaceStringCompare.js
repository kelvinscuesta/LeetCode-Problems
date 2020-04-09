/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
  // can count the number of #'s and create new substrings for each
  // afterwards if at the end of the string length
  // can iterate backwards and remove chars based on how many #s exist

  let subS = '';
  let subT = '';

  for (let char of S) {
    if (char === '#') subS = subS.substring(0, subS.length - 1);
    else subS += char;
  }

  for (let char of T) {
    if (char === '#') subT = subT.substring(0, subT.length - 1);
    else subT += char;
  }

  return subS === subT;
};
