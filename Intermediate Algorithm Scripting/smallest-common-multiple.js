/*

Bonfire: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

*/

function smallestCommons(arr) {
  for (i = Math.max(...arr); i >= Math.min(...arr); i--) {
    arr.push(i);
  }
  return arr.slice(2).reduce(function(x,y){
    var a = x, b = y, t = 0;    
    while(a % b){a = a % b; t = a; a = b; b = t;}
    return x / b * y;
  });
}

// Test Cases

smallestCommons([1,5]);
smallestCommons([5, 1]);
smallestCommons([1, 13]);