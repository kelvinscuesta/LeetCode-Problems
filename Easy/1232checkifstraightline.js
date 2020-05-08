/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  // delta y over delta x is the slope of the curve or mx + b
  // want to find if they all conform to that theory
  // can find the slope and b of each coordinate using just 2
  // since if they vary at any point then we know its not a straight line''

  if (coordinates.length === 2) return true;

  // find m first

  const m =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0]);

  const b = coordinates[0][1] - m * coordinates[0][0];

  // y === (m * x) + b;

  // console.log('m:', m, 'b:',b);

  for (let coordinate of coordinates) {
    if (!(coordinate[1] === m * coordinate[0] + b)) return false;
  }

  return true;
};
