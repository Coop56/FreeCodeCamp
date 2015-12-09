/*

Bonfire: Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/

function sumAll(arr) {
  
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  
  for (i = min + 1; i < max; i++) {
    arr.push(i);
  }
  
  var total = arr.reduce(function(a, b) {
  return a + b;
});
  
  return total;
}
// Test Cases

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);