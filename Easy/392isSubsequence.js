/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // can create our dp table
  if (s.length > t.length) return false;
  if (s.length === 0 && t.length === 0) return true;

  const dp = Array.from({ length: s.length + 1 }).map(el =>
    Array.from({ length: t.length + 1 }).fill(0)
  );

  // start from the 2nd index value to begin our algo
  for (let i = 1; i < s.length + 1; i += 1) {
    for (let j = 1; j < t.length + 1; j += 1) {
      const top = dp[i - 1][j];
      const left = dp[i][j - 1];
      if (s[i - 1] === t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(top, left);
    }
  }

  return dp[s.length][t.length] === s.length;
};
