/*

Bonfire: Slasher Flick

Return the remaining elements of an array after chopping off n elements from the head.

The head meaning the beginning of the array, or the zeroth index

*/

function slasher(arr, howMany) {
  arr = arr.slice(howMany, arr.length);
  return arr;
}

// Test Cases

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);
slasher([1, 2, 3], 4);