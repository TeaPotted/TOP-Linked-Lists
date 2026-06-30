// LinkedList class which will represent the full list
class LinkedList {
  head = null; // initially set the head to null

  // create a function append(value), that adds a new node containing [ value ] to the end of the list
  append(value) {
    // if head is empty, create a new Node using [ value ] then set head to the newly created Node
    if (this.head === null) this.head = new Node(value);
    // else, get the last node in the list, then set it's .nextNode value to a new Node using [ value ] parameter
    else {
      let current = this.head; // get the head, this will be the current node we start from

      // while current.nextNode is not null, set current to it's next node
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      // once current is the last node, set it's .nextNode value by creating a new Node using [ value ]
      current.nextNode = new Node(value);
    }
  }

  // create a function prepend(value) adds a new node containing [ value ] to the start of the list.
  prepend(value) {
    // set head to a new Node using value and this.head as it's .nextNode
    this.head = new Node(value, this.head)
  }
}

// Node class, containing a value property and a nextNode property, set both as null by default
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  // create setter and getter functions for nextNode property
  set nextNode(val) {
    this._nextNode = val;
  }

  get nextNode() {
    return this._nextNode;
  }
}
