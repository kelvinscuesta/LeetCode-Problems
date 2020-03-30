function findRepeat(numbers) {
  // Find a number that appears more than once
  // optimize for space
  // n + 1 is the length
  // so n, or the max number is n - 1
  // if our array has length 4
  // our max number in the range is 3
  // [1, 2, 3, 2]

  // split the ranges of the numbers up
  // so for [1,2,3,2] will be split [1] [2,3,2]
  // we know one window will be [1] length = 1 and should be 1
  // and the other will be [2,3] length = 3, but should be 2
  // one of the two windows will deviate from their real totals

  // our n value
  let floor = 1;
  let ceiling = numbers.length - 1;

  // while we haven't found our duplicate value and haven't converged the floor and ceiling
  while (floor < ceiling) {
    // want to check if discrepancies between the length of our left and right arrs

    const midpoint = Math.floor(floor + (ceiling - floor) / 2);
    const lowerRangeFloor = floor;
    const lowerRangeCeiling = midpoint;
    const upperRangeFloor = midpoint + 1;
    const upperRangeCeiling = ceiling;

    const distinctInLower = lowerRangeCeiling - lowerRangeFloor + 1;

    let lowerRangeItems = 0;

    numbers.forEach(item => {
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        lowerRangeItems += 1;
      }
    });

    if (lowerRangeItems > distinctInLower) {
      // the duplicate exists here

      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }
  return floor;
}

const arr1 = [4, 1, 4, 8, 3, 2, 7, 6, 5];
const arr2 = [1, 2, 3, 2];
const arr3 = [1, 2, 5, 5, 5, 5];

console.log(findRepeat(arr1));
