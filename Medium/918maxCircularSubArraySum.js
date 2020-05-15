/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  // we can run kadane's with a modulo arithmetic

  // intuition is to find the total sum
  // find the max sub array
  // find the min sub array

  // if total sum === min sub array sum we return the max positive count to account for all negatives

  // otherwise find the max of running kadanes vs the total sum - the negative min count sum

  const findMax = () => {
    let currentMax = -Infinity;
    let totalMax = -Infinity;

    for (let i = 0; i < A.length; i += 1) {
      currentMax = Math.max(currentMax, 0) + A[i];
      totalMax = Math.max(totalMax, currentMax);
    }
    return totalMax;
  };

  const findMin = () => {
    let currentMin = Infinity;
    let totalMin = Infinity;

    for (let i = 0; i < A.length; i += 1) {
      currentMin = Math.min(currentMin, 0) + A[i];
      totalMin = Math.min(totalMin, currentMin);
    }
    return totalMin;
  };

  let totalSum = A.reduce((curr, next) => curr + next);
  let max = findMax();
  let min = findMin();

  // accounting for all negatives
  if (totalSum === min) return max;

  // otherwise return the max of running Kadane's or wrapping around
  return Math.max(max, totalSum - min);
};
