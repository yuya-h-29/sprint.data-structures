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

  remove() {
    // .remove(value) removes the value from tree and returns the removed value. You may need to write tests for this.
  }

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
