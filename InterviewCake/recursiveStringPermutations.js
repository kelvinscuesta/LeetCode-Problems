const getPermutations = string => {
  // Generate all permutations of the input string
  // Return as a set

  // edge case with one or less than char string
  if (string.length <= 1) return new Set(string);

  const permutationsSet = new Set();
  // split the string into an array
  const splitString = string.split('');

  const generatePermutation = (buildString = '', arr) => {
    if (arr.length === 0) {
      permutationsSet.add(buildString);
      return;
    }

    for (let i = 0; i < arr.length; i += 1) {
      const workArr = [...arr];
      const splicedChar = workArr.splice(i, 1)[0];
      const newBuild = buildString + splicedChar;
      generatePermutation(newBuild, workArr);
    }

    return;
  };

  generatePermutation('', [...splitString]);

  return permutationsSet;
};

console.log(getPermutations('abcdefghi')); // {'abc','acb', 'bac','bca','cab','cba'}
