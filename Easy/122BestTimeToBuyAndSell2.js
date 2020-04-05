/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = prices => {
  // looks like we just want to run multiple arbitrages until we hit a point that dips down
  // so for  prices = [7,1,5,3,6,4]

  // want to buy at 1 and sell at 5 because the value after 5 dips down and holding out would miss an arbitrage point

  // need to check i and the points after the new max

  // need to keep track of each new minimum
  // and new max profit and the total profit
  let min = Infinity;
  let totalProfit = 0;
  let currentArbitrage = 0;

  // want to keep adding currentArbitrage to the total profit

  for (let i = 0; i < prices.length; i += 1) {
    const currentPrice = prices[i];

    min = Math.min(min, currentPrice);
    currentArbitrage = Math.max(currentArbitrage, currentPrice - min);

    // if the value after the arbitrage point is lower, then sell and add to total
    // sell and reset to 0
    if (prices[i + 1] < currentPrice && currentArbitrage >= 0) {
      min = Infinity;
      totalProfit += currentArbitrage;
      currentArbitrage = 0;
    }
    if (i === prices.length - 1) {
      totalProfit += currentArbitrage;
    }
  }
  return totalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // expect 7
console.log(maxProfit([1, 2, 3, 4, 5, 6])); // expect 5
console.log(maxProfit(7, 6, 5, 4, 3, 2, 1)); // expect 0
console.log(maxProfit([1, 9, 8, 7, 6, 10, 2, 4])); // expect 14
