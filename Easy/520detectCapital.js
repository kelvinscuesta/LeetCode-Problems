/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  // can deal with the first case immediately by comparing the word to its word.toUpper()
  if (word === word.toUpperCase()) return true;

  // next case is we should check if the first letter is uppercase and the rest are lower

  if (word[0] === word[0].toUpperCase()) {
    let restOfWord = word.slice(1);
    let lowerRest = word.slice(1).toLowerCase();

    return restOfWord === lowerRest;
  }

  // then check if they are all lower
  return word === word.toLowerCase();
};
