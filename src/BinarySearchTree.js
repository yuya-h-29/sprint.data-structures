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
        recursive(tree.left);

        callback(tree);

        if (tree.right) {
          recursive(tree.right);
        }
      } else if (tree.right) {
        recursive(tree.right);
      } else if (tree.value) {
        callback(tree);
        return;
      }
    };

    recursive(this);
  }
}

//          10
//        /   \
//      5      15
//     / \    /   \
//    3   8  14   20
//       / \     /
//      7   9   17

// anotherTree = new BinarySearchTree(10);
// anotherTree.insert(5);
// anotherTree.insert(15);
// anotherTree.insert(8);
// anotherTree.insert(3);
// anotherTree.insert(7);
// anotherTree.insert(20);
// anotherTree.insert(17);
// anotherTree.insert(9);
// anotherTree.insert(14);

//                           10
//                          /   \
//                         5      15
//                        / \    /   \
//                       3   8  14   20
//                          / \     /
//                         7   9   17

//                [3, 5, 7, 8, 9, 10, 14, 15, 17, 20]

//                all left, then middle, then right;
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
