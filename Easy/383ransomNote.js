/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  // given string ransomNote and magazine
  // both contain only lower case letters

  // see if one can construct the ransom note with the letters from the magazine

  // return the boolean value

  // brute force approach would be to count each letter and then compare the counts

  const ransomMap = new Map();
  const magazineMap = new Map();

  for (const char of ransomNote) {
    if (ransomMap.has(char)) ransomMap.set(char, ransomMap.get(char) + 1);
    else ransomMap.set(char, 1);
  }
  for (const char of magazine) {
    if (magazineMap.has(char)) magazineMap.set(char, magazineMap.get(char) + 1);
    else magazineMap.set(char, 1);
  }

  // now for each entry of ransomMap see if magazine has the same entry value and if its equal to or greater than the value in magazines

  let sameKeyCount = 0;

  ransomMap.forEach((value, char) => {
    if (magazineMap.has(char)) {
      magazineMap.get(char) >= value
        ? (sameKeyCount += 1)
        : (sameKeyCount += 0);
    }
  });

  return sameKeyCount === ransomMap.size;
};
