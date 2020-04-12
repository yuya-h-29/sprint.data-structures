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

    const removeLink = (val1, val2) => {
      for (let i = 0; i < this.nodes[val1].length; i++) {
        if (val2 === this.nodes[val1][i]) {
          this.nodes[val1].splice(i, 1);
        }
      }
    };

    removeLink(value1, value2);
    removeLink(value2, value1);
  }

  removeNode(value) {
    delete this.nodes[value]; // O(1)

    for (const key in this.nodes) {
      // O(n)
      let arrayOfLinks = this.nodes[key]; // O(1)
      if (arrayOfLinks.includes(value)) {
        //O(n)
        arrayOfLinks.splice(arrayOfLinks.indexOf(value), 1); // O(1) + O(n) = O(n)
      }
    }
  } // O(n) + O(n) + O(n) =  O(n^3)

  hasEdge(value1, value2) {
    let result = false;
    if (
      // O(n) = n^1
      this.nodes[value1].includes(value2) &&
      this.nodes[value2].includes(value1)
    ) {
      result = true; // O(1)
    }
    return result; // O(1)
  }
}
//O (n)

module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
