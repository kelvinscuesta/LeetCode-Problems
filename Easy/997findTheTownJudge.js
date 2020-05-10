/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  // put the values into a hash

  const trustObj = {};

  for (let arr of trust) {
    if (trustObj.hasOwnProperty(arr[0])) trustObj[arr[0]].add(arr[1]);
    else {
      trustObj[arr[0]] = new Set();
      trustObj[arr[0]].add(arr[1]);
    }
  }

  // if has more or less than n - 1 props we know we have a false value
  if (Object.keys(trustObj).length !== N - 1) return -1;

  let judge;
  // find the hypothetical judge
  for (let i = 1; i <= N; i += 1) {
    if (!trustObj.hasOwnProperty(i)) judge = i;
  }

  // now want to check if everyone else trusts the judge
  const trustInJudge = N - 1;
  let trustCount = 0;

  for (let set of Object.values(trustObj)) {
    if (set.has(judge)) trustCount += 1;
  }
  // console.log(trustCount);

  if (trustCount === trustInJudge) return judge;
  else return -1;
};
