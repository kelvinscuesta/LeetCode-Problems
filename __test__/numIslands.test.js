const numIslands = require('../Medium/200numIslands.js');

// will count a matrix of islands
/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

*/

// Ideally I should also test the different functions I plan to make in the numIslands module

describe('Grid tests', () => {
  // should count islands on various matrices with varying lengths

  it('should count islands on one row matrix', () => {
    let matrix1 = [['0']];
    let matrix2 = [['1']];
    let matrix3 = [['0', '1', '1', '0']];
    let matrix4 = [['1', '0', '1', '0', '1']];
    let matrix5 = [['0', '0', '0', '0']];
    expect(numIslands(matrix1)).toBe(0);
    expect(numIslands(matrix2)).toBe(1);
    expect(numIslands(matrix3)).toBe(1);
    expect(numIslands(matrix4)).toBe(3);
    expect(numIslands(matrix5)).toBe(0);
  });

  it('should count islands on two row matrices', () => {
    let matrix1 = [
      ['0', '0', '0', '0'],
      ['0', '0', '0', '0'],
    ];
    let matrix2 = [
      ['1', '1', '0', '1'],
      ['0', '0', '0', '1'],
    ];
    let matrix3 = [
      ['1', '0', '1', '0'],
      ['0', '1', '0', '1'],
    ];
    let matrix4 = [
      ['1', '1', '1', '0'],
      ['0', '0', '0', '1'],
    ];
    let matrix5 = [
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
    ];
    expect(numIslands(matrix1)).toBe(0);
    expect(numIslands(matrix2)).toBe(2);
    expect(numIslands(matrix3)).toBe(4);
    expect(numIslands(matrix4)).toBe(2);
    expect(numIslands(matrix5)).toBe(1);
  });

  it('should work on matrices of varying row lengths', () => {
    let matrix1 = [
      ['0', '0', '0', '0'],
      ['0', '0', '0', '0'],
      ['0', '0', '0', '0'],
    ];
    let matrix2 = [
      ['1', '1', '0', '1'],
      ['0', '1', '0', '1'],
      ['0', '1', '0', '0'],
      ['0', '0', '1', '0'],
      ['1', '0', '1', '0'],
    ];
    let matrix3 = [
      ['1', '0', '1', '0'],
      ['0', '1', '0', '1'],
      ['1', '0', '1', '0'],
      ['0', '1', '0', '1'],
    ];
    let matrix4 = [
      ['1', '1', '1', '0'],
      ['0', '0', '0', '1'],
      ['1', '0', '0', '0'],
      ['1', '0', '0', '0'],
      ['1', '0', '1', '1'],
      ['1', '0', '1', '1'],
    ];
    let matrix5 = [
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
    ];
    expect(numIslands(matrix1)).toBe(0);
    expect(numIslands(matrix2)).toBe(4);
    expect(numIslands(matrix3)).toBe(8);
    expect(numIslands(matrix4)).toBe(4);
    expect(numIslands(matrix5)).toBe(1);
  });
});
