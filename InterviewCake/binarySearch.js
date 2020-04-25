/***
 * Suppose we had an array of n integers sorted in ascending order. How quickly could we check if a given integer is in the array?
 */

function contains(array, value) {
  // Check if an integer is present in the array
  if (array.length <= 1) {
    if (array.length === 1 && array[0] === value) return true;
    return false;
  }

  // given an array and a value

  let midpoint = Math.floor((array.length - 1) / 2);
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    if (array[midpoint] === value) return true;

    // otherwise update pointers

    // if the value is less than the value at the midpoint
    if (value < array[midpoint]) {
      // update the midpoint and the right pointer
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }

    midpoint = Math.floor((left + right) / 2);
    console.log(midpoint);

    //   value <= array[midpoint] ? (right = midpoint) : (left = midpoint);
    //   midpoint = Math.floor((left + right) / 2);
  }

  console.log(midpoint);
  return false;
}

// Tests

let desc = 'empty array';
let actual = contains([], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'one item array, number present';
actual = contains([1], 1);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one item array, number absent';
actual = contains([1], 2);
expected = false;
assertEquals(actual, expected, desc);

desc = 'small array, number present';
actual = contains([2, 4, 6], 4);
expected = true;
assertEquals(actual, expected, desc);

desc = 'small array, number absent';
actual = contains([2, 4, 6], 5);
expected = false;
assertEquals(actual, expected, desc);

desc = 'large array, number present';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
expected = true;
assertEquals(actual, expected, desc);

desc = 'large array, number absent';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
expected = false;
assertEquals(actual, expected, desc);

desc = 'large array, number first';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
expected = true;
assertEquals(actual, expected, desc);

desc = 'large array, number last';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
expected = true;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
