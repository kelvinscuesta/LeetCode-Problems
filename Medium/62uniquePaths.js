/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// recursive top to bottom
var uniquePaths = function(m, n) {
  // can only go right or down
  // want to end when we've reached the point thats n - 1, m - 1

  let paths = 0;

  const dfs = (pointer1, pointer2) => {
    if (pointer1 === n - 1 && pointer2 === m - 1) {
      paths += 1;
      return;
    }

    // can only go down or right
    // check if we can go down

    if (pointer2 + 1 < m) {
      dfs(pointer1, pointer2 + 1);
    }
    if (pointer1 + 1 < n) {
      dfs(pointer1 + 1, pointer2);
    }

    return;
  };

  dfs(0, 0);

  return paths;
};

// try an iterative approach and build up the final array
const uniquePaths = (m, n) => {
  if (m === 1 && n === 1) return 1;
  const dp = Array.from({ length: n });

  for (let i = 0; i < n; i += 1) {
    dp[i] = Array.from({ length: m }).fill(0);
  }

  // fill the right and down bounds

  for (let i = 1; i < dp.length; i += 1) {
    dp[i][0] = 1;
  }
  for (let i = 1; i < dp[0].length; i += 1) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < dp.length; i += 1) {
    for (let j = 1; j < dp[0].length; j += 1) {
      // get the top and the left values
      // add them up and continue our iterations
      // const top = dp[i - 1][j];
      // const left = dp[i][j - 1];
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[n - 1][m - 1];
};
