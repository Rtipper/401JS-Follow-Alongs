'use strict';

// VIA IN-CLASS REPL EXAMPLE
// ADDITONAL FILES NOT INCLUDED HERE VIA REPL TO ACTUALLY WORK
const practice = module.exports = {};

const HashTable = require('./data-structures/hashtable');

practice.QuestionOfTheDay = function() {
}

// STANDARD FUNCTION
practice.iterateLinkedListIteratively = function(list) {
  let biggest = list.head.value
  let current = list.head;
  while(current) {
    // if(current.value > biggest) { biggest = current.vale }
    biggest = current.value > biggest ? current.value : biggest;
    current = current.next;
  }

  return biggest;
}

// RECURSIVE FUNCTION
practice.iterateLinkedListIteratively = function(node, largest=0) {
  if(!node) { return largest; }
  largest = node.value > largest ? node.value : largest;
  return practice.iterateLinkedListIteratively(node.next, largest);
}
