// const convertIslandToZero = (x, y, grid) => {
//   // given coordinates x and y
//   // want to change the grid given the coordinates
//   // and recurse through the

//   // our base case is when we hit a '0', immediately know we've hit water
//   if (grid[x][y] === '0') return;

//   // otherwise we want to work our way to the right and below
//   // and only want to run these if they are within bounds

//   // reassign the '1' at current coordinates to a '0'
//   grid[x][y] = '0';

//   // work below
//   if (x + 1 <= grid.length) convertIslandToZero(x + 1, y);
//   if (y + 1 <= grid[x].length) convertIslandToZero(x, y + 1);

//   return;
// };

const numIslands = grid => {
  // given a grid, of x rows and y columns
  // want to count the number of islands after converting '1's to '0's

  const convertIslandToZero = (x, y, grid = grid) => {
    // given coordinates x and y
    // want to change the grid given the coordinates
    // and recurse through the

    // console.log(grid);
    // console.log(x, y);
    // our base case is when we hit a '0', immediately know we've hit water
    if (grid[x][y] === '0') return;

    // otherwise we want to work our way to the right and below
    // and only want to run these if they are within bounds

    // reassign the '1' at current coordinates to a '0'
    grid[x][y] = '0';

    // console.log(grid[x].length);
    // console.log(y);

    // above
    if (x - 1 >= 0) convertIslandToZero(x - 1, y, grid);
    // below
    if (x + 1 < grid.length) convertIslandToZero(x + 1, y, grid);

    // left
    if (y - 1 >= 0) convertIslandToZero(x, y - 1, grid);
    // right
    if (y + 1 < grid[x].length) convertIslandToZero(x, y + 1, grid);

    return;
  };

  let islandCount = 0;

  for (let x = 0; x < grid.length; x += 1) {
    // console.log(x);
    const row = grid[x];
    // console.log(row);
    // console.log(row.length);
    for (let y = 0; y < row.length; y += 1) {
      // console.log(y);
      if (row[y] === '1') {
        // console.log(row[y]);
        // console.log('x:', x, 'y:', y);
        islandCount += 1;
        convertIslandToZero(x, y, grid);
      }
    }
  }

  return islandCount;
};

module.exports = numIslands;
