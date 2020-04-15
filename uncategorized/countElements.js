/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  // given an arr of integers
  // return out the count of integers that follow the rule of being counted if x + 1 exists

  // brute force would be to see if each one has a corresponding number that exists

  // instead we can go through two passes, first to gather up the elements
  // and the second to work on our incrementer

  const numberCache = {};
  let finalCount = 0;

  for (const num of arr) {
    if (!numberCache.hasOwnProperty(num)) {
      numberCache[num] = 1;
    } else {
      numberCache[num] += 1;
    }
  }

  for (const num of arr) {
    if (numberCache[num + 1]) finalCount += 1;
  }

  return finalCount;
};
