// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// const groupAnagrams = strs => {
//   // given an array of strs
//   // group the strs into buckets of respective anagrams

//   // will have to be minimum of O(n)

//   const anagramsArr = [];

//   anagramsArr.push([strs[0]]);
//   const anagramCountCache = { 0: {} };

//   if (strs[0] === '') {
//     anagramCountCache[0][''] = 1;
//   } else {
//     for (let i = 0; i < strs[0].length; i += 1) {
//       if (!anagramCountCache[0].hasOwnProperty(strs[0][i])) {
//         anagramCountCache[0][strs[0][i]] = 1;
//       } else {
//         anagramCountCache[0][strs[0][i]] += 1;
//       }
//     }
//   }

//   const putAnagramCount = (j, cache, word) => {
//     for (let i = 0; i < word.length; i += 1) {
//       if (!cache[j].hasOwnProperty(word[i])) {
//         cache[j][word[i]] = 1;
//       } else {
//         cache[j][word[i]] += 1;
//       }
//     }
//   };

//   // need a checkAnagram function to return a boolean
//   // run it on each buckets first element and the current Str
//   // run while it returns false
//   const checkAnagram = (countObj, word) => {
//     // we get the countObj and compare counts
//     const wordCharCounts = {};
//     const lengthOfCountObj = Object.keys(countObj).length;

//     for (let i = 0; i < word.length; i += 1) {
//       if (!wordCharCounts.hasOwnProperty(word[i])) {
//         wordCharCounts[word[i]] = 1;
//       } else {
//         wordCharCounts[word[i]] += 1;
//       }
//     }

//     let isAnagram = true;
//     let isAnagramCount = 0;
//     for (let char of Object.keys(wordCharCounts)) {
//       // if the char does not exist we break out immediately
//       if (!countObj.hasOwnProperty(char)) {
//         isAnagram = false;
//         break;
//       }
//       if (countObj[char] !== wordCharCounts[char]) {
//         isAnagram = false;
//         break;
//       }
//       if (countObj[char] === wordCharCounts[char]) isAnagramCount += 1;
//     }
//     const wordProps = Object.entries(wordCharCounts).length;
//     isAnagram = isAnagramCount === wordProps && wordProps === lengthOfCountObj;
//     return isAnagram;
//   };

//   // want to iterate through each value of the strs array
//   for (let i = 1; i < strs.length; i += 1) {
//     let j = 0;
//     let foundAnagram = false;
//     if (strs[i] === '') {
//       let foundArr = false;
//       while (j < anagramsArr.length) {
//         if (anagramsArr[j][0] === '') {
//           anagramsArr[j].push('');
//           foundArr = true;
//           break;
//         }
//         j += 1;
//       }
//       if (!foundArr) anagramsArr.push(['']);
//       let nextCacheValue = anagramsArr.length;
//       anagramCountCache[nextCacheValue] = { '': 1 };
//     } else {
//       while (j < anagramsArr.length) {
//         if (checkAnagram(anagramCountCache[j], strs[i])) {
//           anagramsArr[j].push(strs[i]);
//           foundAnagram = true;
//           break;
//         }
//         j += 1;
//       }
//       if (!foundAnagram) {
//         let nextCacheValue = anagramsArr.length;
//         anagramCountCache[nextCacheValue] = {};
//         anagramsArr.push([strs[i]]);
//         putAnagramCount(nextCacheValue, anagramCountCache, strs[i]);
//       }
//     }
//   }
//   return anagramsArr;
// };

const groupAnagrams = strs => {
  const anagramCache = {};

  for (let word of strs) {
    let sortedKey = [...word].sort().join('');
    if (!anagramCache[sortedKey]) {
      anagramCache[sortedKey] = [];
    }
    anagramCache[sortedKey].push(word);
  }
  return Object.values(anagramCache);
};

console.log(groupAnagrams(['and', 'ad']));
