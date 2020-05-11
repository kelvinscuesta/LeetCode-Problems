/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  // establish our starting color
  const startingColor = image[sr][sc];

  if (newColor === startingColor) return image;

  // know we want to recurse through our image, which is composed of pixels in a 2d array
  // we start our floodfill at the point sr,sc

  const floodfill = (row, col) => {
    // want to check each direction

    if (image[row][col] === startingColor) image[row][col] = newColor;

    // want to check if the top left bottom right can be recursed through

    // if we can go up
    if (row - 1 >= 0) {
      if (image[row - 1][col] === startingColor) floodfill(row - 1, col);
    }
    // if we can go down
    if (row + 1 <= image.length - 1) {
      if (image[row + 1][col] === startingColor) floodfill(row + 1, col);
    }
    // if we can go left
    if (col - 1 >= 0) {
      if (image[row][col - 1] === startingColor) floodfill(row, col - 1);
    }
    // if we can go right
    if (col + 1 <= image[row].length - 1) {
      if (image[row][col + 1] === startingColor) floodfill(row, col + 1);
    }

    return;
  };

  floodfill(sr, sc);

  // refactor to maybe make immutable
  return image;
};

// I implemented dfs here, can also use breadth first search and push new coordinates as they come/ exist
