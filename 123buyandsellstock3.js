/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // thought process is to find the profits or arbitrage opportunities
  // only take the best two or the only one or if none exist none

  if (prices.length <= 1) return 0;

  let min = prices[0];
  let currentProfit = 0;

  // store the higher profits in order somehow
  const profits = [];
  // do i need to store all of them
  let maxprofit1 = 0;
  let maxprofit2 = 0;
  let output = 0;

  for (let i = 1; i < prices.length; i += 1) {
    // if we reach a new min
    if (prices[i] < prices[i - 1]) {
      // push what we have into profits
      // and update the minimum thus far
      profits.push(currentProfit);

      // compare values

      if (currentProfit > maxprofit1) {
        maxprofit2 = maxprofit1;
        maxprofit1 = currentProfit;
      } else if (currentProfit > maxprofit2) maxprofit2 = currentProfit;
      min = prices[i];
    }
    // other wise
    currentProfit = prices[i] - min;
    // if we're at the end
    if (i === prices.length - 1) {
      if (currentProfit > maxprofit1) {
        maxprofit2 = maxprofit1;
        maxprofit1 = currentProfit;
      } else if (currentProfit > maxprofit2) maxprofit2 = currentProfit;
      profits.push(currentProfit);
    }
  }
  console.log('mp1:', maxprofit1);
  console.log('mp2:', maxprofit2);
  console.log('profits:', profits);
  return maxprofit1 + maxprofit2;
};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // thought process is to find the profits or arbitrage opportunities
  // only take the best two or the only one or if none exist none

  if (prices.length <= 1) return 0;

  let min = prices[0];
  let currentProfit = 0;

  // store the higher profits in order somehow
  const profits = [];
  // do i need to store all of them
  let maxprofit1 = 0;
  let maxprofit2 = 0;
  let output = 0;

  for (let i = 1; i < prices.length; i += 1) {
    // if we reach a new min
    if (prices[i] < prices[i - 1]) {
      // push what we have into profits
      // and update the minimum thus far
      profits.push(currentProfit);

      // compare values

      if (currentProfit > maxprofit1) {
        maxprofit2 = maxprofit1;
        maxprofit1 = currentProfit;
      } else if (currentProfit > maxprofit2) maxprofit2 = currentProfit;
      min = prices[i];
    }
    // other wise
    currentProfit = prices[i] - min;
    // if we're at the end
    if (i === prices.length - 1) {
      if (currentProfit > maxprofit1) {
        maxprofit2 = maxprofit1;
        maxprofit1 = currentProfit;
      } else if (currentProfit > maxprofit2) maxprofit2 = currentProfit;
      profits.push(currentProfit);
    }
  }
  console.log('mp1:', maxprofit1);
  console.log('mp2:', maxprofit2);
  console.log('profits:', profits);
  return maxprofit1 + maxprofit2;
};
