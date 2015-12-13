/*

Bonfire: Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the original arrays.

*/

function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  
  function diffFilter(value) {
    if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
      return value;
    }
  }
  
  return newArr.filter(diffFilter);
}
// Test Cases

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diff([], ["snuffleupagus", "cookie monster", "elmo"]);
diff([1, "calf", 3, "piglet"], [7, "filly"]);