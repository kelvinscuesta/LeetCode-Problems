const fib = n => {
  // lets use memoization
  const memo = {
    0: 0,
    1: 1,
    2: 1,
  };

  const calculateFib = n => {
    // if it exists in the cache return that number
    // console.log(n);
    if (memo.hasOwnProperty(n)) {
      return memo[n];
    }
    // otherwise we want to add values to the memo
    // and return those values out

    memo[n] = calculateFib(n - 2) + calculateFib(n - 1);

    return memo[n];
  };

  return calculateFib(n);
};

console.log(fib(103));
