/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length === 0) return [];
  if (p.length > s.length) return [];
  // approach is to iterate through string s,
  // find if a start indice indicates an anagram,
  // push that value into output 
  // if not continue

  const output = [];

  const pmap = new Map();


  for (let char of p) {
    pmap.has(char) ? pmap.set(char, pmap.get(char) + 1)
      : pmap.set(char, 1);
  }


  // will check each character to see if its count is 0
  // will at most check 26 times for each letter in the alphabet
  const isValid = map => {
    for (let [char, value] of map) {
      if (value !== 0) return false;
    }
    return true;
  }

  // create the first window 

  let start = 0;
  let end = 0;

  while (end < p.length) {
    const char = s[end];
    if (pmap.has(char)) {
      pmap.set(char, pmap.get(char) - 1);
    }
    end += 1;
  }

  // now iterate through the s string 

  while (end <= s.length) {


    // if our map is valid push the start index
    // is valid checks for all 0s which means we've hit an anagram
    if (isValid(pmap)) output.push(start);


    // if the end character exists subtract from map

    if (pmap.has(s[end])) pmap.set(s[end], pmap.get(s[end]) - 1);
    end += 1;
    if (pmap.has(s[start])) pmap.set(s[start], pmap.get(s[start]) + 1);
    start += 1;

    // if the start character exists add to map, meaning we need one more to decrease
  }


  return output;

};