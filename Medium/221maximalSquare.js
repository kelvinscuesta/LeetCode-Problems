/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  // count the 0s
  // in our example there were 20 total spaces
  // 7 0s
  // 13 ones, to make a square need an equal length and width
  // so Math.floor(sqrt(13)) === 3
  // max area possible is 9

  if (matrix.length === 0) return 0;

  const totalSpaces = matrix.length * matrix[0].length;
  let zerosCount = 0;

  for (let x = 0; x < matrix.length; x += 1) {
    for (let y = 0; y < matrix[x].length; y += 1) {
      if (matrix[x][y] === '0') {
        zerosCount += 1;
      }
      matrix[x][y] = parseInt(matrix[x][y]);
    }
  }

  // console.log(matrix)
  // console.log(zerosCount);
  // console.log(totalSpaces);

  if (zerosCount === totalSpaces) return 0;
  // now have value of the possible length of the max square and its corresponding area
  let squareLength = Math.floor(Math.sqrt(totalSpaces - zerosCount));
  const maxAreaPossible = squareLength ** 2;

  // console.log(totalSpaces);
  // console.log(squareLength);
  // console.log(maxAreaPossible);

  // if we take the example our maxArea possible is 9

  // can I have a sliding pointer approach where I can see if I find any run of 3
  // have to find squareLength runs all vertically from each other

  // in our example we need to find 3 runs of 1 vertically to have a square
  // if we find squareLength - 1 runs of size squareLength we can return squareLength - 1 ** 2

  function findRun(start, end, col) {
    let sum = 0;
    for (; start <= end; start += 1) {
      sum += col[start];
    }
    return sum;
  }

  function findSquare(matrix, squareLength) {
    // for each row
    for (let x = 0; x < matrix.length; x += 1) {
      // in each row we want to find a run

      let endPointer = squareLength - 1;

      let column = matrix[x];
      // iterate and find a run
      for (
        let startPointer = 0;
        endPointer < column.length;
        startPointer += 1, endPointer += 1
      ) {
        // we get a run if we reach the sum of squareLength, otherwise move on

        if (findRun(startPointer, endPointer, column) === squareLength) {
          // now want to find runs vertically from this point

          // want to iterate below
          // start and end pointer are the same
          // only x is changing

          // console.log(x);
          // console.log(startPointer);

          let rowTracker = x + 1;
          let runs = 1;
          let iterations = squareLength - 1;

          while (iterations > 0 && rowTracker < matrix.length) {
            // console.log(iterations);
            if (
              findRun(startPointer, endPointer, matrix[rowTracker]) ===
              squareLength
            ) {
              runs += 1;
            }
            rowTracker += 1;
            iterations -= 1;
          }
          // console.log(squareLength);
          // console.log(runs);
          if (runs === squareLength) {
            // console.log(squareLength);
            return squareLength ** 2;
          }
        }
      }
    }
    return 1;
  }

  let area = 0;

  while (squareLength >= 1) {
    // console.log(squareLength);
    let newArea = findSquare(matrix, squareLength);
    area = Math.max(newArea, area);
    squareLength -= 1;
  }

  return area;
};

console.log(
  maximalSquare([
    ['0', '0', '0', '1', '1'],
    ['1', '1', '1', '1', '0'],
    ['1', '1', '1', '1', '1'],
    ['0', '1', '1', '1', '1'],
    ['0', '1', '1', '1', '1'],
  ])
);
