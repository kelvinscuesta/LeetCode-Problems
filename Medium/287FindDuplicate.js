/**
 * @param {number[]} nums
 * @return {number}
 */

const findDuplicate = nums => {
  // given an int array
  // Input: [1,3,4,2,2]
  // Output: 2
  // Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive)

  // with n + 1 integers in the array
  // and range 1 to n
  // we get n being the nums.length - 1

  // can get better than n^2 time, needs to be constant space
  // the n^2 approach is to hit each value to find a duplicate

  let floor = 1;
  let ceiling = nums.length - 1;

  while (floor < ceiling) {
    const midPoint = Math.floor(floor + (ceiling - floor) / 2);
    const lowerFloor = floor;
    const lowerCeiling = midPoint;
    const upperFloor = midPoint + 1;
    const upperCeiling = ceiling;

    let distinctPossibilitiesLower = 0;

    nums.forEach(element => {
      if (element >= lowerFloor && element <= lowerCeiling) {
        distinctPossibilitiesLower += 1;
      }
    });

    if (distinctPossibilitiesLower > lowerCeiling - lowerFloor + 1) {
      floor = lowerFloor;
      ceiling = lowerCeiling;
    } else {
      floor = upperFloor;
      ceiling = upperCeiling;
    }
  }
  return floor;
};

console.log('4');
console.log(findDuplicate([1, 3, 4, 2, 2]));
