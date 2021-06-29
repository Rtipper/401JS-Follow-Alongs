'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(value);
  }

  prepend(value) {
    
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  removeHead() {
    let node = null;

    if(this.head) {
      node = this.head;
      this.head = node.next || null;
    }

    return node;
  }

}

module.exports = LinkedList;
