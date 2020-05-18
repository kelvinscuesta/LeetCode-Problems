/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {

  // s1 can't be bigger than s2
  // if they're equal they still have a chance
  if (s1.length > s2.length) return false;

  // find if s2 contains a permutation of s1
  // return true if find a first instance 
  // return false if don't find initially 


  const map = new Map();

  for (let char of s1) {
    map.has(char) ? map.set(char, map.get(char) + 1)
      : map.set(char, 1);
  }

  // console.log(map);

  let allZeroCount = map.size;

  // if allZeroCount reaches 0 at some point we have reached a permutation

  // start and end pointers to track the sliding window
  let start = 0;
  let end = 0;

  // start off the end point at one value to the right of the window
  while (end < s1.length) {
    const charInS2 = s2[end];

    if (map.has(charInS2)) {
      map.set(charInS2, map.get(charInS2) - 1)

      if (map.get(charInS2) === 0) allZeroCount -= 1;
    };
    end += 1;
  }

  // console.log(end)
  // console.log(map)
  // console.log(allZeroCount)

  // if we pass immediately on first run return true
  if (allZeroCount === 0) return true;

  // continue linearly until end is greater than s2 length

  while (end <= s2.length) {


    const endChar = s2[end];
    const startChar = s2[start];

    if (map.has(endChar)) {
      map.set(endChar, map.get(endChar) - 1);
      if (map.get(endChar) === 0) allZeroCount -= 1;
    }
    end += 1;

    if (map.has(startChar)) {
      map.set(startChar, map.get(startChar) + 1);
      if (map.get(startChar) - 1 === 0) allZeroCount += 1;
    }

    start += 1;
    if (allZeroCount === 0) return true;

  }

  return false;
};

console.log(checkInclusion('ab', 'eidbaoo'));