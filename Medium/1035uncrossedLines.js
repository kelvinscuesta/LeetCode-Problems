/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
  // create our dp table and return out the last value

  // will be m * n

  // build it from A.length rows
  // each row will have b.length items
  // array.from is useful method
  // be sure when creating the columns to make them each new arrays and not pass the same reference to each one of them
  const dpTable = Array.from({ length: A.length + 1 });

  for (let i = 0; i < dpTable.length; i += 1) {
    dpTable[i] = Array.from({ length: B.length + 1 }).fill(0);
  }

  // now have a dpTable with independent arrays, not passed by reference

  // our algorithm states that we want the maximum valu from the top, left and right of our matrix
  // if the values A[x] === B[y] we want to take the diagonal and add one to it
  // we build up our uncrossed lines subsequence this way

  // i see now why everyone adds the 0th row, to deal with these shenanigans and the bounds
  // console.log(dpTable)

  for (let x = 1; x < dpTable.length; x += 1) {
    for (let y = 1; y < dpTable[x].length; y += 1) {
      // find the top, left, and diagonal values
      // want to check first if the values are equal

      const valueA = A[x - 1];
      const valueB = B[y - 1];

      const diagonal = dpTable[x - 1][y - 1];

      if (valueA === valueB) dpTable[x][y] = diagonal + 1;
      else {
        const top = dpTable[x - 1][y];
        const left = dpTable[x][y - 1];
        // our current table spot is the max of the three values
        dpTable[x][y] = Math.max(top, left, diagonal);
      }
    }
  }

  // console.log(dpTable);

  // at the end of our process we want to return out the last value of our matrix
  return dpTable[A.length][B.length];
};
