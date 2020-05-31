/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // dp matrix

  const word1length = word1.length;
  const word2length = word2.length;

  // edge cases
  if (word1 === word2) return 0;
  if (word1 === '') return word2length;
  if (word2 === '') return word1length;

  // create dp matrix

  const dpMatrix = Array.from({ length: word1length + 1 }).map(
    el => (el = Array.from({ length: word2length + 1 }).fill(0))
  );

  for (let i = 0; i < dpMatrix[0].length; i += 1) {
    dpMatrix[0][i] = i;
  }
  for (let i = 0; i < dpMatrix.length; i += 1) {
    dpMatrix[i][0] = i;
  }

  for (let x = 1; x < dpMatrix.length; x += 1) {
    for (let y = 1; y < dpMatrix[0].length; y += 1) {
      const top = dpMatrix[x - 1][y];
      const left = dpMatrix[x][y - 1];
      const diagonal = dpMatrix[x - 1][y - 1];

      if (word1[x - 1] === word2[y - 1]) dpMatrix[x][y] = diagonal;
      else dpMatrix[x][y] = Math.min(top, left, diagonal) + 1;
    }
  }
  return dpMatrix[word1length][word2length];
};
