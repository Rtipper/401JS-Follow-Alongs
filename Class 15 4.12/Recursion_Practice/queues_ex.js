'use strict';

// VIA IN-CLASS REPL EXAMPLE
// ADDITONAL FILES NOT INCLUDED HERE VIA REPL TO ACTUALLY WORK

// ITERATIVE
practice.iterateQueueIteratively = function(queue) {
  let big = queue.peek();
  while( queue.peek() ) {
    let currentItem = stack.dequeue();
    if(currentItem > big) { 
      big = currentItem;
    }
  }
  return big;
}

// RECURSIVE
practice.iterateQueueRecursively = function(queue, largest=0) {
  if (! queue.peek() ) { return largest; }

  let current = queue.dequeue();

  largest = current > largest ? current : largest;

  return practice.iterateQueueRecursively(queue, largest);
}