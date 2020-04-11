class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(value) {
    this.nodes[value] = [];
  }

  contains(value) {
    let result = false;

    if (this.nodes[value]) {
      result = true;
    }

    return result;
  }

  addEdge(value1, value2) {
    if (this.nodes[value1] && this.nodes[value2]) {
      if (
        !this.nodes[value1].includes(value2) &&
        !this.nodes[value2].includes(value1)
      ) {
        this.nodes[value1].push(value2);
        this.nodes[value2].push(value1);
      }
    } else {
      return "Invalid node value";
    }
  }

  removeEdge(value1, value2) {
    //probably need to fix later???
    for (let i = 0; i < this.nodes[value1].length; i++) {
      if (value2 === this.nodes[value1][i]) {
        this.nodes[value1].splice(i, 1);
      }
    }

    // this.nodes[value1].splice() &&
    // graph.addNode(5);
    // graph.addNode(3);
    // graph.addNode(6);
    // graph.addEdge(5, 3);
    // expect(graph.nodes[5][0]).to.equal(3);
    // expect(graph.nodes[3][0]).to.equal(5);
    // graph.addEdge(3, 6);
    // expect(graph.nodes[3][0]).to.equal(5, 6);
    // expect(graph.nodes[6][0]).to.equal(3);
    // graph.removeEdge(3, 6);
    // expect(graph.nodes[5][0]).to.equal(3);
    // expect(graph.nodes[3][0]).to.equal(5);
  }

  removeNode(value) {
    delete this.nodes[value];
  }

  hasEdge(value1, value2) {}
}

module.exports = Graph;

/*

graph.nodes[5] = 

nodes {
        
      }

{
  5:
  3:
  6: 
}
*



// { 3: [6], 6: [3] }

/*

Adjacency List
[ 
  [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7] 
]

Adjacent Matrix

[ [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] ]


Adjaceny List

{ 
  Node1: ["node2", "node3"],
  Node2: ["node1"],
  Node3: ["node3"]
}

*/

/*
  - [ ] `Graph` returns an instance of an ES6 class
  - [ ] `.addNode(value)` adds a node to graph with a primitive value. Returns undefined.
  - [ ] `.removeNode(value)` removes a node from graph and returns undefined.
  - [ ] `.contains(value)` returns boolean. Returns true if value is found in graph, false otherwise
  - [ ] `.addEdge(value1, value2)` returns undefined. Create connection between two nodes if they're both present in the graph
  - [ ] `.removeEdge(value1, value2)` returns undefined. Remove connection between two nodes
  - [ ] `.hasEdge(value1, value2)` returns boolean. Returns true if edge exists, false otherwise
  - [ ] What are the time complexities?
*/

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
