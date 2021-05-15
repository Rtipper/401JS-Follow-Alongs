'use strict';

const practice = module.exports = {};

const HashTable = require('./data-structures/hashtable');

practice.QuestionOfTheDay = function () {
}

// Linked List Iterations:
// Return the largest valued Node 
// List Contains: (1->5->12->9)
practice.iterateLinkedListIteratively = function (list) {
  let biggest = list.head.value;
  let current = list.head;
  while(current) {
    biggest = current.value > biggest ? current.value : biggest;
    current = current.next;
  }
  return biggest;
}

practice.iterateLinkedListRecursively = function (node, largest = 0) {
  if (!node) { return largest; }
  largest = node.value > largest ? node.value : largest;
  return practice,this.iterateLinkedListRecursively(node.next, largest);
}


// Stack Iterations:
// Return the largest valued Node 
// Stack Contains: ((9->12->5->1)
practice.iterateStackIteratively = function (stack) {
  return big;
}

practice.iterateStackRecursively = function (stack, largest = 0) {
}

// Queue Iterations:
// Return the largest valued Node 
// Queue Contains: (1->5->12->9)
practice.iterateQueueIteratively = function (queue) {
  return big;
}

practice.iterateQueueRecursively = function (queue, largest = 0) {
}


// Tree Iterations:
// Tree is a BST created from this list of numbers: 
// 9,4,17,3,6,22,5,7,20

// Return True/False if the number (value) is in the tree
// Inbound arguments are the tree and the value to look for
practice.contains = function(tree, value) {
  return false;
}


// For the next 4 iterations: return a list with the values of each node

// Inbound argument is the tree root and an empty array
practice.preOrderTraversal = function (node, values) {
  return values;
}

// Inbound argument is the tree root and an empty array
practice.inOrderTraversal = function (node, values) {
  return values;
}

// Inbound argument is the tree root and an empty array
practice.postOrderTraversal = function (node, values) {
  return values;
}

// Inbound argument is the tree
practice.breadthFirstTraversal = function (tree) {
  return values;
}