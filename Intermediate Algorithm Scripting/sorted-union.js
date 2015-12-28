/*

Bonfire: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/

function unite(arr1, arr2, arr3) {
  var sortedUnion = [];
  for (i = 0; i < arguments.length; i++) {
    for (j = 0; j < arguments[i].length; j++) {
      sortedUnion.push(arguments[i][j]);
    }
  }
  var sortedUnionUnique = sortedUnion.filter(function(elem, pos) {
    return sortedUnion.indexOf(elem) === pos;
  });
  return sortedUnionUnique;
}

// Test Cases

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
unite([1, 3, 2], [1, [5]], [2, [4]]);
unite([1, 2, 3], [5, 2, 1]);
unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);