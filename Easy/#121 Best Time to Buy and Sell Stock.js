/**
 * Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price.

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */

// [8,9,2,7,1,5]

const maxProfit = prices => {
  // ideally can do in O(n)
  let minTracker = Infinity;
  let maxTracker = -Infinity;
  let maxProfit = 0;
  let currentMaxProfit = 0;

  // concerned with the max when the min changes
  // so if the min changes we want to update the maxTracker to the min
  for (const price of prices) {
    // want to check if we are at a new minimum
    if (price < minTracker) {
      // we are at a new minimum want to update the minTracker, reset the  maxTracker, and the currentMaxProfit

      // want to set the current max back to 0 since we are at a new min
      maxTracker = 0;
      minTracker = price;
      currentMaxProfit = 0;
    }

    // want to check if we have a new max
    if (price > maxTracker) {
      // want to update the maxTracker, the currentMaxProfit, and the maxProfit if necessary
      maxTracker = price;
      currentMaxProfit = maxTracker - minTracker;
      if (currentMaxProfit > maxProfit) {
        maxProfit = currentMaxProfit;
      }
    }
  }
  return maxProfit;
};
