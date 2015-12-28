/*

Bonfire: Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function add() {
  var args = Array.prototype.slice.call(arguments);
  
  if (args.length !== 2) {
    if (typeof args[0] !== 'number') {
      return undefined;
    }
    return function (num) {
      if (typeof num !== 'number') {
        return undefined;
      }
      return args[0] + num;  
    };
  } else {
    if (typeof args[1] !== 'number') {
      return undefined;
    }
    return args[0] + args[1];
  }
}

// Test Cases

add(2,3);
add(2)(3);
add("http://bit.ly/IqT6zt");
add(2, "3");
add(2)([3]);