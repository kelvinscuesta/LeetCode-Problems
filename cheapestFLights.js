class Node {
  constructor(val, priority, c) {
    this.val = val;
    this.priority = priority;
    this.c = c;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // function to add values to priority queue
  enqueue(val, priority, c) {
    let newNode = new Node(val, priority, c);
    // pushing nodes to PriorityQueue.values
    this.values.push(newNode);
    this.bubbleUp();
  }
  // function to bubble up the min value to the top
  bubbleUp() {
    // grab the last value of the array and move to appropriate spot
    let idx = this.values.length - 1;
    const element = this.values[idx];
    
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // break the loop if the priority is greater than parent
      if (element.priority >= parent.priority) break;
      // otherwise switch up the parent and child 
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      // continue the process with the earlier parent
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }

  // add vertex to the graph as a key and initillize with a array
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  // adds the edge by pushing an object with direction to vertex2 and the weight of that edge
  addEdge(vertex1, vertex2, weight) {
    this.adjList[vertex1].push({node: vertex2, weight});
  }

  // modified dijkstra
  dijkstra(start, finish, k) {
    // create priority queue
    const queue = new PriorityQueue();

    for (let {node, weight} of this.adjList[start]) {
      queue.enqueue(node, weight, 0);
    }

    // keep looping until there's a node

    while (queue.values.length) {
      let { val, priority, c} = queue.dequeue();

      // check if using this will crosss the limit for number of stops
      if (c > k) continue;

      // if its the limit check if its finished, if it is then return the weight
      if (val === finish) return priority;

      // else get children of that node as its still under the stops limit 
      // and keep traversing further

      let children = this.adjList[val];

      for (let { node, weight} of children) {
        queue.enqueue(node, weight + priority, c + 1);
      }


    }

    // not possible if we don't return above
    return -1;

  }






}

var findCheapestPrice = function (n, flights, src, dst K) {
  const graph = new WeightedGraph();

  // add all nodes to graph and create the edges

  for (let [n1, n2, w] of flights) {
    graph.addVertex(n1);
    graph.addVertex(n2);
    graph.addEdge(n1, n2, w);
  }

  return graph.dijkstra(src, dst, k);
}