/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const output = [[]];

  // has the empty set defaulted to it

  // looks like we want to for each array inside of the output keep adding a value to the array and push it in

  for (const num of nums) {
    // for each number in nums

    // we want find each subset in output
    // make a new set containing values already in subset
    // and push our number into it
    // and push that subset into the output

    const outputLength = output.length;

    for (let i = 0; i < outputLength; i += 1) {
      const subSet = output[i];
      const newSet = [...subSet, num];
      output.push(newSet);
    }
  }

  return output;
};
