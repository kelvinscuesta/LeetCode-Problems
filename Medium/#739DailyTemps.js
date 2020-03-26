const dailyTemperatures = T => {
  // given an int array T
  // want to return out an int array of days until we find a warmer temp
  // warmer temp will be higher

  // brute force would be to iterate through each value and find that value that is warmer

  const daysArr = [];

  for (let i = 0; i < T.length; i += 1) {
    let daysCount = 0;

    if (i >= T.length - 2) {
      console.log(i);
      if (T[i] < T[i + 1]) {
        console.log(i);
        if (i !== T.length - 1) {
          daysArr.push(1);
        }
      } else daysArr.push(0);
    } else {
      for (let j = i + 1; j < T.length; j += 1) {
        if (T[i] > T[j]) {
          daysCount += 1;
        }
        if (T[i] < T[j]) {
          daysCount += 1;
          break;
        }
        if (j === T.length - 1) {
          if (T[i] > T[j]) {
            daysCount = 0;
          }
        }
      }
      daysArr.push(daysCount);
    }
  }
  return daysArr;
};

console.log(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78]));
