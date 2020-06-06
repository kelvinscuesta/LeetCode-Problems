/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  if (people.length === 0) return [];

  // find the heights in order/ or order the people based on height and then how many people should be in front of them
  // usually the people with more people in front appear later

  people.sort((a, b) => {
    const [aH, aK] = a;
    const [bH, bK] = b;

    if (aH === bH) return aK - bK;
    else return aH - bH;
  });
  const reconstructed = Array.from({ length: people.length }).fill(0);

  // our algorithm will leave open spaces for future candidates to fill for each space
  // based on whats left

  let index = 0;

  // run our loop until we finish the algorithm, meaning our reconstructed queue is finished
  while (people.length) {
    const currentPerson = people.shift();
    const peopleInFront = currentPerson[1];

    // if we're at the last person, we've done our job, just fill in last available space and return

    let emptySpace = 0;
    let i = 0;

    if (people.length === 0) {
      for (; i < reconstructed.length; i += 1) {
        if (reconstructed[i] === 0) {
          reconstructed[i] = currentPerson;
          return reconstructed;
        }
      }
    }

    while (emptySpace !== peopleInFront) {
      if (reconstructed[i] === 0 || reconstructed[i][0] >= currentPerson[0])
        emptySpace += 1;
      i += 1;
    }
    // if after our loop the current i is not a 0, find the first 0
    while (reconstructed[i] !== 0) {
      i += 1;
    }
    reconstructed[i] = currentPerson;
  }
};
