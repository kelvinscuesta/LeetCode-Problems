// brute force solution
/**
 * @param {number[][]} grid
 * @return {number}
 */

// brute force fails on a really big matrix
// const minPathSum = grid => {
//   // given a grid, find the min path from top left to bottom right
//   // grid has m rows and n columns
//   // return the path with the minimum sum

//   const sumStore = [];

//   // the bottom right has coordinates [m][n]
//   const m = grid.length - 1;
//   const n = grid[0].length - 1;

//   // for a brute force approach we're going to store all our paths/their sums into an arr and find the min from there
//   const findPath = (grid, x, y, sum = 0) => {
//     // base case:
//     // if we've reached the bottom right path, add it and push the sum
//     if (x === m && y === n) {
//       sum += grid[x][y];
//       sumStore.push(sum);
//     }

//     // otherwise we want to keep finding the path, only being able to move down and to the right

//     sum += grid[x][y];

//     // to move down means x + 1,

//     if (x < m) findPath(grid, x + 1, y, sum);
//     if (y < n) findPath(grid, x, y + 1, sum);

//     // to move to the right means y + 1
//     return;
//   };

//   findPath(grid, 0, 0, 0);

//   return Math.min(...sumStore);
// };

// gets the solution wrong on some cases
const greedyMinPath = grid => {
  // want to get to the start point from the bottom right

  // doing so I can minimize the path taken
  // caveat is when the values are tied
  // if paths are tied we have to find the minimum path from either of those values

  // trying to reach [0][0] from [m][n]

  const m = grid.length - 1;
  const n = grid[0].length - 1;

  const backwardsPathFinder = (grid, x, y, sum) => {
    // base case is when we reach the top left

    const currentGridSpot = grid[x][y];
    if (x === 0 && y === 0) {
      sum += currentGridSpot;
      return sum;
    }

    // if x or y === 0, we can only go down one path at that point

    // can't go up anymore, go left
    if (x === 0) {
      return backwardsPathFinder(grid, x, y - 1, sum + currentGridSpot);
    }

    // cant go left anymore, go up
    if (y === 0) {
      return backwardsPathFinder(grid, x - 1, y, sum + currentGridSpot);
    }

    const topSpot = grid[x - 1][y];
    const leftSpot = grid[x][y - 1];

    if (topSpot === leftSpot) {
      return Math.min(
        backwardsPathFinder(grid, x - 1, y, sum + currentGridSpot),
        backwardsPathFinder(grid, x, y - 1, sum + currentGridSpot)
      );
    }

    // if the topSpot is greater than leftSpot, recurse left
    return topSpot > leftSpot
      ? backwardsPathFinder(grid, x, y - 1, sum + currentGridSpot)
      : backwardsPathFinder(grid, x - 1, y, sum + currentGridSpot);
  };

  return backwardsPathFinder(grid, m, n, 0);
};

const backwardsMinPath = grid => {
  // given a grid
  // m by n

  // for each step of the way in the path, I want to choose the sum thats appealing

  const backwardsSum = (grid, x, y) => {
    const currentGridSpot = grid[x][y];

    if (x === grid.length - 1 && y === grid[0].length - 1) {
      return currentGridSpot;
    }

    if (x === grid.length - 1) {
      // can't go down anymore
      return currentGridSpot + backwardsSum(grid, x, y + 1);
    }

    if (y === grid[0].length - 1) {
      return currentGridSpot + backwardsSum(grid, x + 1, y);
    }

    return Math.min(
      currentGridSpot + backwardsSum(grid, x, y + 1),
      currentGridSpot + backwardsSum(grid, x + 1, y)
    );
  };
  return backwardsSum(grid, 0, 0);
};

const minPathSum = grid => {
  // want to initialize the first row and first column with their sums

  let m = grid.length;
  let n = grid[0].length;

  // initialize the first row with its sums
  for (let y = 1; y < n; y += 1) {
    // sum the previous with the current value
    grid[0][y] = grid[0][y] + grid[0][y - 1];
  }

  // do the same for the first column
  for (let x = 1; x < m; x += 1) {
    grid[x][0] = grid[x][0] + grid[x - 1][0];
  }

  // figure out the minimum for the smaller matrix
  for (let x = 1; x < m; x += 1) {
    for (let y = 1; y < n; y += 1) {
      // at each coordinate (x, y)
      // want to add the current grid[x][y]
      // from the minimum of
      // grid[x- 1][y]
      // grid[x][y-1]

      grid[x][y] += Math.min(grid[x - 1][y], grid[x][y - 1]);
    }
  }

  return grid[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

console.log(
  minPathSum([
    [1, 7, 8, 9],
    [2, 4, 10, 1],
    [11, 1, 9, 20],
    [1, 6, 1, 1],
  ])
);

console.log(
  minPathSum([
    [1, 4, 8, 6, 2, 2, 1, 7],
    [4, 7, 3, 1, 4, 5, 5, 1],
    [8, 8, 2, 1, 1, 8, 0, 1],
    [8, 9, 2, 9, 8, 0, 8, 9],
    [5, 7, 5, 7, 1, 8, 5, 5],
    [7, 0, 9, 4, 5, 6, 5, 6],
    [4, 9, 9, 7, 9, 1, 9, 0],
  ])
);
