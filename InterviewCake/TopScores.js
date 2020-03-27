function sortScores(unorderedScores, highestPossibleScore) {
  // Sort the scores in O(n) time

  const count = {};
  const sortedScores = [];
  // get the count of each score into the count Cache
  for (let score of unorderedScores) {
    count.hasOwnProperty(score) ? (count[score] += 1) : (count[score] = 1);
  }
  console.log(count);

  // generate sorted array from the scoreCounts array

  // since the range of scores is from 0 to highestPossibleScore
  // and we're sorting in descending order
  // we can start from the highestPossibleScore and work down

  for (let i = highestPossibleScore; i >= 0; i -= 1) {
    // if the score exists in our cache
    // would this be o(n^2)
    if (count[i]) {
      for (let j = 1; j <= count[i]; j += 1) {
        sortedScores.push(i);
      }
    }
  }

  return sortedScores;
}

console.log(sortScores([37, 89, 41, 65, 91, 53, 90, 90], 100));
