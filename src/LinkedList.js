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
      this.tail.next = node;
      this.tail = node;
      return node;
    }
  }

  removeHead() {
    let removedHead = this.head;
    this.head = this.head.next;
    return removedHead;
  }

  findNode(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.next === null) {
        return null;
      }
    }
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/
  /*
  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
*/
}

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
