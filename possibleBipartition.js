/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
  if (dislikes.length === 0) return true;
  // looks like a graph of nodes
  // if a future node has a connection then we fucked up

  // make a graph class and color it
  // if we have a legal coloring we are set
  // if not we got an error

  // also can just have a visited or not visited flag, I like the colors more

  // node class
  class Node {
    constructor(number) {
      // neighbors will be all the adjacent nodes
      this.neighbors = new Set();
      this.name = number;
    }
  }

  const graph = new Map();

  for (let i = 1; i <= N; i += 1) {
    graph.set(i, new Node(i));
  }

  // add all the dislikes
  for (const dislike of dislikes) {
    const [name, neighbor] = dislike;

    // grab the node corresponding to the name, and add the n
    const neighbors = graph.get(name).neighbors;
    const neighborNode = graph.get(neighbor);
    neighbors.add(neighborNode);
  }

  // graph is now a map of nodes, each node containing a set of neighbor nodes

  // instead of coloring the graph why don't we see if a parent and child share the same reference
  // to a neighbor
  // if they do then return false

  for (let i = 1; i <= N; i += 1) {
    const node = graph.get(i);
    const stack = [[node, 0]];
    let currentNode;
    let neighborPlace;

    while (stack.length) {
      currentNode = stack[stack.length - 1][0];
      let parentNode = null;
      // if only one item in stack means we dont have a parent
      if (stack.length > 1) {
        parentNode = stack[stack.length - 2][0];
      }
      neighborPlace = stack[stack.length - 1][1];

      // if a node has any neighbors we want to see if parent also has that neighbor
      // if parent also has the neighbor we are shit out of luck

      // if it has no neighbors
      if (currentNode.neighbors.size === 0) {
        // remove the current node from the top of the stack
        stack.pop();
        // increment the neighbor place in the parent nodes stack frame
        if (!stack.length) break;
        stack[stack.length - 1][1] += 1;
        // break out of this iteration
        continue;
      }
      // go through the neighbors and add stackframes

      // if we are out of neighbors then run usual logic
      if (neighborPlace > currentNode.neighbors.size - 1) {
        // reached the end of our neighbors list
        // pop off the currentNode's stack frame from the stack
        stack.pop();
        if (!stack.length) break;
        stack[stack.length - 1][1] += 1;
        // and continue since we've done all we could with this one
        continue;
      }

      // for each of the current node's neighbors, check if the parent node also has that neighbor

      // maybe store in sets to reduce look up time
      if (parentNode) {
        for (const neighbor of currentNode.neighbors) {
          console.log('currentNode:', currentNode);
          console.log('parentNode:', parentNode);
          console.log('current neighbor:', neighbor);
          if (parentNode.neighbors.has(neighbor)) return false;
        }
      }

      // need to push the current neighbor in the stack frame

      const stackFrame = [[...currentNode.neighbors][neighborPlace], 0];
      stack.push(stackFrame);
    }
  }

  return true;
};

// Input: N = 4, dislikes = [[1,2],[1,3],[2,4]] true
// N = 4 [[1,2],[1,3],[2,4]] false
// N = 5 [[1,2],[2,3],[3,4],[4,5],[1,5]] false
