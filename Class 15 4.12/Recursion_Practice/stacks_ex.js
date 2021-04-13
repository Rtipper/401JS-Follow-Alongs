'use strict';

// VIA IN-CLASS REPL EXAMPLE
// ADDITONAL FILES NOT INCLUDED HERE VIA REPL TO ACTUALLY WORK

// ITERATIVE
practice.iterateStackIteratively = function(stack) {
  let big = stack.peek();
  while( stack.peek() ) {
    let currentItem = stack.pop();
    if(currentItem > big) { 
      big = currentItem;
    }
  }
  return big;
}

// RECURSIVE
practice.iterateStackRecursively = function(stack, largest=0) {
  if(! stack.peek() ) { return largest; }

  let current = stack.pop();

  largest = current > largest ? current : largest;

  return practice.iterateStackRecursively(stack, largest);

}