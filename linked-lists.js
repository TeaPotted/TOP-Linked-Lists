// LinkedList class which will represent the full list
class LinkedList {
  head = null; // initially set the head to null
};

// Node class, containing a value property and a nextNode property, set both as null by default
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}