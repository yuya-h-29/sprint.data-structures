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

  // if this something contains the value
  // then equal that value and remove the value;

  // look through the tree
  // -> use filter to remove
  //   -> return the removedResult;

  // remove from the array

  // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // var removed = arr.splice(2,2);

  /*
    removed === [3, 4]
    arr === [1, 2, 5, 6, 7, 8, 9, 0]
    */

  // this.children.contains(value).filter()

  /*

parent = {
             name = "Tam";
             children = [
                          // child [0]
                          { 
                            name = "Sue"
                            children = [
                                          { 
                                            name = "Sun"
                                            children = []
                                          },
                                          {
                                            name = "Tory"
                                            children = [];
                                          }  
                                       ];
                          },
                          // child [1]
                          { 
                            name = "Ted"
                            children = [];
                          }   
                        ]
           }


           parent  // parent
          /      \
       gen1child child   // sibling child <-> child
        /    \
      gen2 child  

  */

  //  currentNode = this.children.forEach((child) => {
  //   return loopThrough(child);
  // });

  // function loopThrough() {
  //   while (currentValue !== null) {
  //     if (currentValue === value) {
  //       result = true;
  //     } else {

  //       currentValue = currentNode.value;
  //       // need to find a way to iterate through siblings
  //     }
  //   }
  // }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
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
