// LinkedList returns an instance of an ES6 class
// .appendToTail(value) adds a new node to the tail and returns the new node
// .removeHead() removes the head node of the linked list and returns removed head node
// .findNode(value) returns first node that has a value matching what was passed in and returns null when no value is found
// What are the time complexities?

function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(tailValue) {
    let node = new Node(tailValue);

    if (this.head === undefined) {
      this.head = node;
      this.tail = this.head;
      return node;
    } else {
      this.head = node;
      this.tail = this.head;
      return this.head;
    }

    // console.log("current tail?", this.tail, "next node??", node);
  }

  removeHead() {}

  findNode(value) {}

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

let testNode = new LinkedList(5);

testNode.appendToTail(3);

console.log(testNode);

// console.log(testNode);

// linkedList = new LinkedList();

// const newNode = linkedList.appendToTail(5);

// console.log(deepEqual(linkedList.head, newNode));
// console.log(deepEqual(linkedList.tail, newNode));

// function deepEqual(object1, object2) {
//   if (object1 === object2) return true;

//   if (
//     object1 == null ||
//     typeof object1 != "object" ||
//     object2 == null ||
//     typeof object2 != "object"
//   )
//     return false;

//   var propertiesInA = 0;
//   var propertiesInB = 0;

//   for (var prop in object1) {
//     propertiesInA += 1;
//   }

//   for (var prop in object2) {
//     propertiesInB += 1;
//     if (!(prop in object1) || !deepEqual(object1[prop], object2[prop]))
//       return false;
//   }

//   return propertiesInA == propertiesInB;
// }

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
