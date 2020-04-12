/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  // sort the array first and work on the two max values
  // best possible time is O(n) I believe

  const workStones = [...stones].sort((a, b) => a - b);

  while (workStones.length >= 2) {
    // want to find the 2 maxes
    console.log(workStones);
    let y = workStones[workStones.length - 1];
    let x = workStones[workStones.length - 2];

    if (y === x) {
      workStones.splice(workStones.length - 2, 2);
    } else {
      workStones.splice(workStones.length - 2, 1);
      workStones[workStones.length - 1] = y - x;
    }
    workStones.sort((a, b) => a - b);
    console.log(workStones);
  }

  return workStones[0] ? workStones[0] : 0;
};
