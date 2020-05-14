/**
 * Initialize your data structure here.
 */
var Trie = function(char) {
  // trie will be composed of different tries itself
  // each trie will have its root values and then other values that we can look up instantly since they're all pretty much maps
  this.value = char ? char : null;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  // want to iterate through the word
  let wordPoint = 0;
  let currentNode = this;

  // iterate through the last character of the word
  while (wordPoint < word.length) {
    const char = word[wordPoint];
    // check if the current node of the trie has the value at word pointer
    // move down the trie and continue with iteration

    if (currentNode.hasOwnProperty(char)) {
      currentNode = currentNode[char];
      wordPoint += 1;
      continue;
    }

    // if the character doesn't exist then create a new Trie with the character tacked on

    // and move on
    currentNode[char] = new Trie(char);
    currentNode = currentNode[char];
    wordPoint += 1;
  }

  // add the null node at the end to indicate the complete word
  currentNode.end = null;
  // console.log(currentNode);
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  // given a word
  // iterate through it and see if the end property exists on the last node of the word

  // can return false early if a property doesn't exist

  let wordPoint = 0;
  let currentNode = this;

  while (wordPoint < word.length) {
    const char = word[wordPoint];

    // trigger an end if we don't find matching character
    if (!currentNode.hasOwnProperty(char)) return false;

    // otherwise, move on down if it exists

    currentNode = currentNode[char];
    wordPoint += 1;
  }
  // reached end of the word
  // check end property if it exists

  return currentNode.hasOwnProperty('end');
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  // here we're given a prefix, which is just a subset of a word if it exists
  // kind of the same as the insert except we're not checking the end property

  let wordPoint = 0;
  let currentNode = this;

  while (wordPoint < word.length) {
    const char = word[wordPoint];

    // trigger an end if we don't find matching character
    if (!currentNode.hasOwnProperty(char)) return false;

    // otherwise, move on down if it exists

    currentNode = currentNode[char];
    wordPoint += 1;
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const obj = new Trie();
obj.insert('ken');
console.log(obj);
obj.insert('kelvin');
console.log(obj);
console.log(obj.search('kenn'));
