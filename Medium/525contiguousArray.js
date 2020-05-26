const findMaxLength = function(nums) {
  let count = 0;

  let map = new Map();

  // initialize the hash map with completely balanced array if its empty or from the start of the array
  map.set(0, -1);

  let max = 0;
  // want to at each point store the count and its index
  // if we hit the same count again we know we can calculate a max length from it

  for (let i = 0; i < nums.length; i += 1) {
    nums[i] === 0 ? (count -= 1) : (count += 1);

    // if the map has the count we want to check if we can update the max length
    map.has(count)
      ? (max = Math.max(max, i - map.get(count)))
      : map.set(count, i);
  }

  return max;
};
