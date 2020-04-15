const mergeSort = unsorted => {
  // should return out empty array if already empty
  // should return out the array if only one element
  if (unsorted.length <= 1) return unsorted;

  // helper function to merge left and right arrays
  const merge = (left, right) => {
    // to merge the arrays in ascending order
    // and want to track the left and right side indices
    const mergedArr = [];
    let leftPointer = 0;
    let rightPointer = 0;

    // want to compare the values and push the merged Arr

    // while the leftPointer exists in the bounds of its respective arr
    while (leftPointer < left.length && rightPointer < right.length) {
      const leftValue = left[leftPointer];
      const rightValue = right[rightPointer];

      if (leftValue <= rightValue) {
        mergedArr.push(leftValue);
        leftPointer += 1;
      } else {
        mergedArr.push(rightValue);
        rightPointer += 1;
      }
    }

    if (leftPointer < left.length) {
      for (; leftPointer < left.length; leftPointer += 1) {
        mergedArr.push(left[leftPointer]);
      }
    }

    // if the right array still has values
    if (rightPointer < right.length) {
      for (; rightPointer < right.length; rightPointer += 1) {
        mergedArr.push(right[rightPointer]);
      }
    }

    return mergedArr;
  };

  // helper function to split arrays and recurse through

  const arrSpliter = arr => {
    // base case has to exist here
    // immediately return out if we reach just one element or 0 elements in arr
    if (arr.length === 1) return arr;

    // split the array into a left and right half
    // to do so we have to find the mid point

    const midPoint = Math.floor(arr.length / 2);

    const left = arr.slice(0, midPoint);
    const right = arr.slice(midPoint);

    // we want to return out the merged arr
    // want to run our merge function on each of the split halves
    // keep splitting those halves

    return merge(arrSpliter(left), arrSpliter(right));
  };

  return arrSpliter(unsorted);
};

console.log(
  mergeSort([4, 2000, 42, 78, 31, 99, 0, 9, 7, 10, 8, 100, -1, -2, 2, 1, 3])
);
console.log(mergeSort([2, 1]));
