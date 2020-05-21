/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  // given a matrix of m length and n width 

  // i.e. a 4x3 matrix, will have a max possible sub length of 3
  // so we would stop our iterations at 3x3 sub matrix

  // dealing with numbers so we can actually deal with sums and expected sum values


  // want to create a table that will build up our counts


  const table = Array.from({ length: matrix.length + 1 }, () => [0]);
  table[0] = new Array(matrix[0].length + 1).fill(0);

  // now want to iterate through each value of the table and increment count

  let subSquares = 0;

  for (let x = 0; x < matrix.length; x += 1) {
    for (let y = 0; y < matrix[0].length; y += 1) {
      // check if the matrix at the current x and y is 0
      if (matrix[x][y] === 0) table[x + 1][y + 1] = 0;
      // find the top left and diagonal values and take the minimum
      // add that value to the subsquares
      else {
        const top = table[x][y + 1];
        const left = table[x + 1][y];
        const diagonal = table[x][y];
        // be sure to add one in case they're all 0

        const input = Math.min(top, left, diagonal) + 1;
        // console.log('x',x,'y',y,'input')
        table[x + 1][y + 1] = input;
        subSquares += input;
      }
    }
  }

  // console.log(table)

  return subSquares;
};