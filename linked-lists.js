// LinkedList class which will represent the full list
class LinkedList {
  #head = null; // initially set the head to null

  // create a function append(value), that adds a new node containing [ value ] to the end of the list
  append(value) {
    // if head is empty, create a new Node using [ value ] then set head to the newly created Node
    if (this.#head === null) this.#head = new Node(value);
    // else, get the last node in the list, then set it's .nextNode value to a new Node using [ value ] parameter
    else {
      let current = this.#head; // get the head, this will be the current node we start from

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
    // set head to a new Node using value and this.#head as it's .nextNode
    this.#head = new Node(value, this.#head);
  }

  // a function size(), returns the total number of nodes in the list
  size() {
    let i = 0;
    let current = this.#head;
    // while current is not null, increment i and assign current to it's next node
    while (current !== null) {
      i++;
      current = current.nextNode;
    }
    return i;
  }

  // function head(), should return the value of the first node in the list. If the list is empty, it should return undefined
  head() {
    return this.#head ? this.#head.value : undefined;
  }

  // function tail() should return the value of the final node in the list.  If the list is empty, it should return undefined
  tail() {
    let current = this.#head;
    if (current === null) return undefined;

    // while current has a .nextNode value, assign current to it's .nextNode value. until current does'nt have a next node
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // function at(index) should return the value of the node at the given index. If there’s no node at the given index, it should return undefined
  at(index) {
    // if index is bigger than the size of the list or less than zero, return undefined
    if (index > this.size() - 1 || index < 0) return undefined;
    else {
      let current = this.#head;
      // use a for loop to assign current to the value of it's .nextNode until i === index, then return current
      for (let i = 0; i <= this.size() - 1; i++) {
        // we will start counting from zero (like in an array)
        if (i === index) return current;
        current = current.nextNode;
      }
    }
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
