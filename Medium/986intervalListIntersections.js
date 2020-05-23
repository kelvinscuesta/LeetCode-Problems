/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  // want to return an array of arrays as an output representing the intersection list

  const intersections = [];

  // want to iterate until we reach the end of the line for either a or b
  // our smallest problem to solve is to get the min and max of the range

  let pointerA = 0;
  let pointerB = 0;

  // while both pointers are less than their lengths we can keep running our algo
  while (pointerA < A.length && pointerB < B.length) {

    // we want to create a new intersection

    const intersection = [];

    const [lowerA, upperA] = A[pointerA];
    const [lowerB, upperB] = B[pointerB];


    // if one of the upper ranges is lower move it up

    if (upperB < lowerA) {
      pointerB += 1;
      continue;
    }
    if (upperA < lowerB) {
      pointerA += 1;
      continue;
    }

    intersection.push(Math.max(lowerA, lowerB), Math.min(upperA, upperB));
    intersections.push(intersection);

    if (upperA === upperB) {
      pointerA += 1;
      pointerB += 1;
    }
    else {
      intersection[1] === upperA ? pointerA += 1 : pointerB += 1;
    }


  }


  return intersections;
};