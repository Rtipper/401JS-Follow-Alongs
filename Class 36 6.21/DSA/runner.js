'use strict';

const LinkedList = require('./data-structures/linked-list');
const Stack = require('./data-structures/stack');
const Queue = require('./data-structures/queue');
const Tree = require('./data-structures/tree');
const HashMap = require('./data-structures/hashtable');

const practice = require('./practice');

module.exports = {
  runPracticeFunctions: () => {
    practice.QuestionOfTheDay();
    linkedListIterations();   
    stackIterations();
    queueIterations();
    treeIterations();
  }
}

function linkedListIterations() {

  const list = new LinkedList();
  list.append(1);
  list.append(12);
  list.append(5);
  list.append(9);

  const iLargest = practice.iterateLinkedListIteratively(list);
  console.log(`Linked List: Iterative Largest: ${iLargest}`);

  const rLargest = practice.iterateLinkedListRecursively(list.head);
  console.log(`Linked List: Recursive Largest: ${rLargest}`);

}

function stackIterations() {

  const numbers = new Stack();
  
  numbers.push(1);
  numbers.push(12);
  numbers.push(5);
  numbers.push(9);

  const iLargest = practice.iterateStackIteratively(numbers);
  console.log(`Stack: Iterative Largest: ${iLargest}`);

  numbers.push(1);
  numbers.push(12);
  numbers.push(5);
  numbers.push(9);

  const rLargest = practice.iterateStackRecursively(numbers);
  console.log(`Stack: Recursive Largest: ${rLargest}`);

}

function queueIterations() {

  const numbers = new Queue();
  
  numbers.enqueue(1);
  numbers.enqueue(12);
  numbers.enqueue(5);
  numbers.enqueue(9);

  const iLargest = practice.iterateQueueIteratively(numbers);
  console.log(`Queue: Iterative Largest: ${iLargest}`);

  numbers.enqueue(1);
  numbers.enqueue(12);
  numbers.enqueue(5);
  numbers.enqueue(9);

  const rLargest = practice.iterateQueueRecursively(numbers);
  console.log(`Queue: Recursive Largest: ${rLargest}`);

}

function treeIterations() {

  const tree = new Tree();

  const numbers = [ 9,4,17,3,6,22,5,7,20];

  numbers.forEach( num => tree.insert(num) )

  const preOrderValues = practice.preOrderTraversal(tree.root, []);
  console.log('Pre Order: ', preOrderValues);

  const inOrderValues = practice.inOrderTraversal(tree.root, []);
  console.log('In Order: ', inOrderValues);

  const postOrderValues = practice.postOrderTraversal(tree.root, []);
  console.log('Post Order: ', postOrderValues);

  const breadthFirstValues = practice.breadthFirstTraversal(tree);
  console.log('Breadth First Order: ', breadthFirstValues);

  const containsTrue = practice.contains(tree, 22);
  console.log('Tree Contains 22:', containsTrue);

  const containsFalse = practice.contains(tree, 67);
  console.log('Tree Contains 67:', containsFalse);

}