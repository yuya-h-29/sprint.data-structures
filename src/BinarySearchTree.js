// BinarySearchTree returns an instance of an ES6 class
//  .insert(value) inserts a value into the correct position within the tree
//      and returns the tree (for chaining purposes)
//  .contains(value) returns true if the value is in the tree,
//        false if not
//  .traverseDepthFirstInOrder(callback) invokes the callback for every node
//        in a depth-first in-order (visit left branch, then current node,
//        than right branch). Returns undefined.

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  insert(value) {
    const node = new BinarySearchTree(value);

    const treeBranch = (parent) => {
      if (value > parent.value) {
        if (parent.right === undefined) {
          parent.right = node;
        } else {
          treeBranch(parent.right);
        }
      } else if (value < parent.value) {
        if (parent.left === undefined) {
          parent.left = node;
        } else {
          treeBranch(parent.left);
        }
      }
    };
    treeBranch(this);
    return this;
  }

  contains(value) {}

  traverseDepthFirstInOrder(callback) {}
}

/*
  check value 7
                  8
                root
                /  \ 
               5    10 
              / \
             3   6
  */

//   if (node.value < testValue && small[0] === undefined) {
//     this.small.push(node);
//     // return node;
//   } else if (node.value > testValue && big[0] === undefined) {
//     this.big.push(node);
//     // return node;
//   } else if (node.value > testValue && node.value > big[0]) {
//     treeBranch(node.value, testValue, small[0], big[0]);
//   } else if (node.value < testValue && node.value < small[0]) {
//     treeBranch(node.value, testValue, small[0], big[0]);
//   } else {
//     return;
//   }

module.exports = BinarySearchTree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
