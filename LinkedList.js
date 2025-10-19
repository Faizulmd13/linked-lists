import { Node } from "./Node.js";

export class LinkedList {
  head;
  tail;
  size;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  at(index) {
    if (index < 0 || !this.head || index >= this.size) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = null;

    if (this.size === 1) {
      this.tail = this.head = newTail;
      this.size--;
      return;
    }

    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.size--;
  }

  contains(value) {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;

    for (let index = 0; index < this.size; index++) {
      if (current.value === value) {
        return [current, index];
      } else current = current.next;
    }

    return undefined;
  }

  find(value) {
    return this.contains(value);
  }

  toString() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let string = ``;

    while (current) {
      string += `(${current.value}) -> `;
      current = current.next;
    }
    return string + "null";
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const prevNode = this.at(index - 1);
    const nextNode = prevNode.next;

    newNode.next = nextNode;
    prevNode.next = newNode;
    this.size++;
  }

  removeAt(index) {
    if(index < 0 || index >= this.size){
        return undefined;
    }

    if(index === 0){
        this.head = this.head.next;
        this.size--;
        return;
    }

    if(index === this.size - 1){
        this.pop();
        return;
    }

    const prevNode = this.at(index - 1);
    prevNode.next = prevNode.next.next;
    this.size--;
  }
}
