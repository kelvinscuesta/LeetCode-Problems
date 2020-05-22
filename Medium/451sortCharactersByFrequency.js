/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // if we get 'trreee'
  // output the string 'eeerrt'

  // first map the values into a map
  // then iterate to frequencies and build up

  const frequencies = new Map();

  // O(n)
  for (let char of s) {
    frequencies.has(char)
      ? frequencies.set(char, frequencies.get(char) + 1)
      : frequencies.set(char, 1);
  }

  // sort was O(nlogn) in V8 engine

  const frequencyEntries = [...frequencies.entries()].sort((a, b) => {

    if (b[1] - a[1] === 0) {
      // if the values are equal sort by the string values in the first index
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return 0;
    }
    return b[1] - a[1];
  });
  let output = '';

  // O(n)
  for (let entry of frequencyEntries) {
    const char = entry[0].repeat(entry[1]);
    // want to push entry[1] times
    output += char;
  }

  return output
};