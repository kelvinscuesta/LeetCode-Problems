class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function colorGraph(graph, colors) {
  // Create a valid coloring for the graph

  // graphs are arrays of nodes
  // within each node have a color and neighbors property
  // colors will also be an array of colors

  // need to iterate through each node in the graph O(n)

  for (let node of graph) {
    const { neighbors, color } = node;

    if (neighbors.has(node)) throw Error('Loop occurred');

    // if the node already has a color continue
    if (node.color) continue;
    // check the colors of the neighbors

    // can i map the set of colors that the node is adjacent to

    const colorsSet = new Set();

    neighbors.forEach(neighbor => {
      if (neighbor.color !== null) colorsSet.add(neighbor.color);
    });

    for (let color of colors) {
      if (!colorsSet.has(color)) {
        node.color = color;
        break;
      }
    }
  }
}

// Tests
const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];

let graph = [];
{
  const nodeA = new GraphNode('A');
  const nodeB = new GraphNode('B');
  const nodeC = new GraphNode('C');
  const nodeD = new GraphNode('D');
  nodeA.neighbors.add(nodeB);
  nodeB.neighbors.add(nodeA);
  nodeB.neighbors.add(nodeC);
  nodeC.neighbors.add(nodeB);
  nodeC.neighbors.add(nodeD);
  nodeD.neighbors.add(nodeC);
  graph = [nodeA, nodeB, nodeC, nodeD];
}
colorGraph(graph, colors);
assertEqual(validateGraphColoring(graph), true, 'line graph');

{
  const nodeA = new GraphNode('A');
  const nodeB = new GraphNode('B');
  const nodeC = new GraphNode('C');
  const nodeD = new GraphNode('D');
  nodeA.neighbors.add(nodeB);
  nodeB.neighbors.add(nodeA);
  nodeC.neighbors.add(nodeD);
  nodeD.neighbors.add(nodeC);
  graph = [nodeA, nodeB, nodeC, nodeD];
}
colorGraph(graph, colors);
assertEqual(validateGraphColoring(graph), true, 'separate graph');

{
  const nodeA = new GraphNode('A');
  const nodeB = new GraphNode('B');
  const nodeC = new GraphNode('C');
  nodeA.neighbors.add(nodeB);
  nodeA.neighbors.add(nodeC);
  nodeB.neighbors.add(nodeA);
  nodeB.neighbors.add(nodeC);
  nodeC.neighbors.add(nodeA);
  nodeC.neighbors.add(nodeB);
  graph = [nodeA, nodeB, nodeC];
}
colorGraph(graph, colors);
assertEqual(validateGraphColoring(graph), true, 'triangle graph');

{
  const nodeA = new GraphNode('A');
  const nodeB = new GraphNode('B');
  const nodeC = new GraphNode('C');
  const nodeD = new GraphNode('D');
  const nodeE = new GraphNode('E');
  nodeA.neighbors.add(nodeB);
  nodeA.neighbors.add(nodeC);
  nodeB.neighbors.add(nodeA);
  nodeB.neighbors.add(nodeC);
  nodeB.neighbors.add(nodeD);
  nodeB.neighbors.add(nodeE);
  nodeC.neighbors.add(nodeA);
  nodeC.neighbors.add(nodeB);
  nodeC.neighbors.add(nodeD);
  nodeC.neighbors.add(nodeE);
  nodeD.neighbors.add(nodeB);
  nodeD.neighbors.add(nodeC);
  nodeD.neighbors.add(nodeE);
  nodeE.neighbors.add(nodeB);
  nodeE.neighbors.add(nodeC);
  nodeE.neighbors.add(nodeD);
  graph = [nodeA, nodeB, nodeC, nodeD, nodeE];
}
colorGraph(graph, colors);
assertEqual(validateGraphColoring(graph), true, 'envelope graph');

{
  const nodeA = new GraphNode('A');
  nodeA.neighbors.add(nodeA);
  graph = [nodeA];
}
assertThrows(() => {
  colorGraph(graph, colors);
}, 'loop graph');

function validateGraphColoring(graph) {
  const maxDegree = Math.max(...graph.map(node => node.neighbors.size));

  const colorsUsed = new Set();

  graph.forEach(node => {
    colorsUsed.add(node.color);
  });

  if (colorsUsed.has(null)) {
    return false;
  }

  if (colorsUsed.size > maxDegree + 1) {
    return false;
  }

  let badEdges = 0;

  graph.forEach(node => {
    node.neighbors.forEach(neighbor => {
      if (neighbor.color === node.color) {
        badEdges += 1;
      }
    });
  });

  if (badEdges > 0) {
    return false;
  }

  return true;
}

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrows(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
