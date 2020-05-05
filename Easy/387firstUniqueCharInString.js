/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  // use a map to have insertion order
  // return the first value from calling values()

  // might have to store in two objects
  // maybe a set and a map

  const uniques = new Set();
  const notUniques = new Map();

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    // if the char doesnt exist in either
    // place it in the set

    // if it exists in the set, delete from the set and place in the map
    // no longer a unique value

    // if it exists in the map we can just carry on since its a not unique value

    if (!uniques.has(char) && !notUniques.has(char)) {
      uniques.add(char);
      notUniques.set(char, i);
    } else if (uniques.has(char)) {
      uniques.delete(char);
    }
  }

  return uniques.size > 0 ? notUniques.get(uniques.values().next().value) : -1;
};
