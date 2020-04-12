class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    let newChild = new Tree(value);
    this.children.push(newChild);
  }

  contains(value) {
    let result = false;

    const recursive = (data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value === value) {
          result = true;
          return result;
        }
        recursive(data[i].children);
      }
    };
    recursive(this.children);
    return result;
  }

  remove(value) {
    // .remove(value) removes the value from tree and returns the removed value.
    let result;

    const removeRecursive = (data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value === value) {
          result = data[i].value;
          data.splice(i, 1);

          return result;
        }
        removeRecursive(data[i].children);
      }
    };
    removeRecursive(this.children);

    return result;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  // traverseDepthFirst(fn) {}

  // traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
