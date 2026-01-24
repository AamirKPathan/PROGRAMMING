// =====================================
// Node Class
// =====================================
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// =====================================
// Linked List Class
// =====================================
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node at the beginning
  addHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Add a node at the end
  addTail(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Remove the first node
  removeHead() {
    if (!this.head) return null;

    const removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  }

  // Convert list to a readable string
  toString() {
    if (!this.head) return "List is empty";

    let result = "";
    let current = this.head;

    while (current !== null) {
      result += current.value + " → ";
      current = current.next;
    }

    return result + "null";
  }
}

// =====================================
// DOM Logic
// =====================================

const list = new LinkedList();

const input = document.getElementById("valueInput");
const output = document.getElementById("output");

// Add to Head
document.getElementById("addHeadBtn").addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;
  list.addHead(value);
  input.value = "";
});

// Add to Tail
document.getElementById("addTailBtn").addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;
  list.addTail(value);
  input.value = "";
});

// Remove Head
document.getElementById("removeHeadBtn").addEventListener("click", () => {
  const removed = list.removeHead();
  output.textContent = removed
    ? `Removed: ${removed}`
    : "List is empty — nothing to remove";
});

// Display List
document.getElementById("displayBtn").addEventListener("click", () => {
  output.textContent = list.toString();
});
