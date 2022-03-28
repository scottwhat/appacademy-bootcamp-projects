// Do not change this
class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Fill this in
    this.head = null;
    this.length = null;
  }

  addToHead(val) {
    // Fill this in
    const newNode = new LinkedListNode(val);

   // sets the head nodes pointer to null 
    newNode.next = this.head;

    this.head = newNode;

    this.length++;

  }
  
  addToTail(value) {
    // Create a new node with the given value
    const newNode = new LinkedListNode(value, null);

    // If the head is `null`, set it to the new node and return
    if (!this.head) {
        this.head = newNode;
        return;
    }

    // Iterate through the linked list until you reach the last node
    let current = this.head;
    while (current.next != null) {
        current = current.next;
    }

    // Point the last node's pointer to the new node
    current.next = newNode;
}
  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

const ll = new LinkedList();
ll.addToHead(1);
ll.addToHead(2);
ll.addToHead(3);
ll.print();

module.exports = LinkedList;