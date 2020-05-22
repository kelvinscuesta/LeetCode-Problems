function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers

  if (arrayOfInts.length < 3) throw new Error('array length less than 3');




  // for (let first = 0; first < arrayOfInts.length; first += 1) {
  //   for (let second = first + 1; second < arrayOfInts.length; second += 1 ) {
  //     for (let third = second + 1; third < arrayOfInts.length; third += 1) {
  //       max = Math.max(max, arrayOfInts[first] * arrayOfInts[second] * arrayOfInts[third]);
  //     }
  //   }
  // }

  // grab the initial highest 2 and lowest 2, and the max and min factors that we've currently seen
  let highestOf2 = Math.max(arrayOfInts[0] * arrayOfInts[1], arrayOfInts[0] * arrayOfInts[2], arrayOfInts[1] * arrayOfInts[2]);
  let lowestOf2 = Math.min(arrayOfInts[0] * arrayOfInts[1], arrayOfInts[0] * arrayOfInts[2], arrayOfInts[1] * arrayOfInts[2]);
  let minFactor = Math.min(arrayOfInts[0], arrayOfInts[1], arrayOfInts[2]);
  let maxFactor = Math.max(arrayOfInts[0], arrayOfInts[1], arrayOfInts[2]);
  let outputMax = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  if (arrayOfInts.length === 3) return outputMax;


  // iterate through the rest and update accordingly
  for (let i = 3; i < arrayOfInts.length; i += 1) {
    const current = arrayOfInts[i];

    // might move the max to the top 

    outputMax = Math.max(outputMax, lowestOf2 * current, highestOf2 * current);

    if (maxFactor * current > highestOf2) highestOf2 = maxFactor * current;
    if (current > maxFactor) maxFactor = current;

    if (minFactor * current < lowestOf2) lowestOf2 = minFactor * current;
    if (current < minFactor) minFactor = current;

  }



  return outputMax;
}


















// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}