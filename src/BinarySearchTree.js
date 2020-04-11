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
        if (!parent.right) {
          parent.right = node;
        } else {
          treeBranch(parent.right);
        }
      } else if (value < parent.value) {
        if (!parent.left) {
          parent.left = node;
        } else {
          treeBranch(parent.left);
        }
      }
    };
    treeBranch(this);
    return this;
  }

  contains(value) {
    let result = false;

    const treeSearch = (tree) => {
      if (value > tree.value && tree.right) {
        treeSearch(tree.right);
      } else if (value < tree.value && tree.left) {
        treeSearch(tree.left);
      } else if (value === tree.value) {
        result = true;
        return;
      }
    };

    treeSearch(this);
    return result;
  }

  traverseDepthFirstInOrder(callback) {
    const recursive = (tree) => {
      if (tree.left) {
        recursive(tree.left); // n
        callback(tree);
        if (tree.right) {
          recursive(tree.right); // n
        }
      } else if (tree.value) {
        // 1
        callback(tree); // 1
        return; // 1
      }
    };

    recursive(this); // n
  }
}

//n^3

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
