const getMaxProfit = stockPrices => {
  // given an array of stock prices :int
  // return out a max profit :int
  // have to buy and sell on different days
  // brute force is to O(n^2) where for each stock price find its max profit

  // profit is derived from sell value to buy value

  // our best time here is O(n)
  // can do this one in place

  // if less than one price throw an error

  if (stockPrices.length <= 1) throw 'Need more than one stock to find profit';

  // can have a situation where profit is negative
  // in our case we want to throw out the max profit regardless of if its negative
  let maxProfit = -Infinity;

  // want to keep track of the minimum as we're iterating through the array
  let minTracker = 0;

  for (let i = 1; i < stockPrices.length; i += 1) {
    const currentValue = stockPrices[i];
    const currentMin = stockPrices[minTracker];
    // find the max at each step of the way
    maxProfit = Math.max(maxProfit, currentValue - currentMin);

    // if the value is less than the current Min,
    if (currentValue < currentMin) {
      minTracker = i;
    }
  }

  return maxProfit;
};

console.log(getMaxProfit([1, 1, 1, 1, 1])); // should return 0
console.log(getMaxProfit([1, 2, 3, 4, 5])); // should return 4
console.log(getMaxProfit([10, 7, 5, 8, 11, 9, 1, 11, 0])); // should return 6
console.log(getMaxProfit([1])); // error
console.log(getMaxProfit([])); // error
