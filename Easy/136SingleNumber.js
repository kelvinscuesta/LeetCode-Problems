// O(n) time , but O(n) space, apparently can do better

// apparently can use the xor operator in javascript ^

// it leaves the 1 bit if only 1 in the same place

// 0 ^ 1
// 00000000 ^
// 00000001 =
// 00000001

const singleNumber = nums => {
  const numsCache = new Map();
  for (const num of nums) {
    // increment or set value in the map
    numsCache.has(num)
      ? numsCache.set(num, numsCache.get(num) + 1)
      : numsCache.set(num, 1);
  }
  for (const [num, count] of numsCache.entries()) {
    if (count === 1) return num;
  }
};
