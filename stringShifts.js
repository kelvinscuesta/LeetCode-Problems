var stringShift = function(s, shift) {
  // given a string s
  // and array of arrays
  // if we count the total num of ops in one pass
  // we can then just perform one operation
  let workStr = s;
  let count = 0;
  for (let move of shift) {
    // console.log(move);
    move[0] === 0 ? (count -= move[1]) : (count += move[1]);
  }
  count = count % s.length;
  if (count >= 0) {
    let char = workStr.slice(-count);
    workStr = workStr.slice(0, -count);
    workStr = char + workStr;
    return workStr;
  }
  let char = workStr.slice(0, -count);
  // console.log(char);
  workStr = workStr.slice(-count);
  // console.log(workStr);
  workStr += char;
  return workStr;
};

console.log(
  stringShift('xqgwkiqpif', [
    [1, 4],
    [0, 7],
    [0, 8],
    [0, 7],
    [0, 6],
    [1, 3],
    [0, 1],
    [1, 7],
    [0, 5],
    [0, 6],
  ])
); // expect "qpifxqgwki"
