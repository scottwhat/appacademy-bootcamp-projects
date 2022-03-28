// Do not change this
class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Fill this in
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) { // O(1)
    // Fill this in
 
    this.head = new LinkedListNode('value', this.head);

    if (!this.tail) this.tail = this.head;

    this.length++;
  }

  addToTail(val) { // O(1)
    // Fill this in
    const newNode = new LinkedListNode(value, null);

    // If the list is empty
    if (!this.head) {
        // point head and tail to new node and return
        this.head = newNode;
        this.tail = newNode;
        return;
    }

    // Point the current tail's next to the new node
    this.tail.next = newNode;
    // Point tail to the new node
    this.tail = newNode;

    this.length++;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;