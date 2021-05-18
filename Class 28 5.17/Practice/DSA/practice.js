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
  return practice.iterateLinkedListRecursively(node, largest);
}


// Stack Iterations:
// Return the largest valued Node 
// Stack Contains: ((9->12->5->1)
practice.iterateStackIteratively = function (stack) {
  let big = stack.peek();
  while (stack.peek()) {
    let currentItem = stack.pop();
    if (currentItem > big) {
      big = currentItem;
    }
  }
  return big;
}

practice.iterateStackRecursively = function (stack, largest = 0) {
  if (!stack.peek()) { return largest; }
  let current = stack.pop();
  largest = current > largest ? current : largest;
  return practice.iterateStackRecursively(stack, largest);
}

// Queue Iterations:
// Return the largest valued Node 
// Queue Contains: (1->5->12->9)
practice.iterateQueueIteratively = function (queue) {
  let big = queue.peek();
  while(queue.peek()) {
    let currentItem = queue.dequeue();
    if (currentItem > big) { 
    }
  }
  return big;
}

practice.iterateQueueRecursively = function (queue, largest = 0) {
  if (!queue.peek()) { return largest }
  let current = queue.dequeue();
  largest = current > largest ? current: length;
  return practice.iterateQueueRecursively(queue, largest);
}


// Tree Iterations:
// Tree is a BST created from this list of numbers: 
// 9,4,17,3,6,22,5,7,20

// Return True/False if the number (value) is in the tree
// Inbound arguments are the tree and the value to look for
practice.contains = function(tree, value) {
  let current = tree.root;
  while(current) {
    if (value === current.value) {
      return true;
    }
    if (value > current.value) {
      current = current.right
    }
    if (value < current.value) {
      current = current.left
    }
  }
  return false;
}


// For the next 4 iterations: return a list with the values of each node

// Inbound argument is the tree root and an empty array
practice.preOrderTraversal = function (node, values) {
  value.push(node.value);
  if(node.left){practice.preOrderTraversal(node.left, values)}
  if(node.right){practice.preOrderTraversal(node.right, values)}
  return values;
}

// Inbound argument is the tree root and an empty array
practice.inOrderTraversal = function (node, values) {
  if(node.left){practice.inOrderTraversal(node.left, values)}
  values.push(node.value);
  if(node.right){practice.inOrderTraversal(node.right, values)}
  return values;
}

// Inbound argument is the tree root and an empty array
practice.postOrderTraversal = function (node, values) {
  if(node.left){practice.postOrderTraversal(node.left, values)}
  if(node.right){practice.postOrderTraversal(node.right, values)}
  values.push(node.value);
  return values;
}

// Inbound argument is the tree
practice.breadthFirstTraversal = function (tree) {
  let values = []
  let queue = [];
  queue.push(tree.root);
  while(queue) {
    let currentNode = queue.shift()
    values.push(currentNode.value)
    if(currentNode.left){queue.push(currentNode.left)}
    if(currentNode.right){queue.push(currentNode.right)}
  }
  return values;
}