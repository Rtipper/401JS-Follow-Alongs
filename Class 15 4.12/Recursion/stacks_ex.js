'use strict';

// VIA IN-CLASS REPL EXAMPLE
// ADDITONAL FILES NOT INCLUDED HERE VIA REPL TO ACTUALLY WORK






// RECURSIVE FUNCTION
practice.iterateStackRecursively = function(stack, largest=0) {
  if(! stack.peek() ) { return largest; }

  let current = stack.pop();

  largest = current > largest ? current : largest;

  return practice.iterateStackRecursively(stack, largest);

}