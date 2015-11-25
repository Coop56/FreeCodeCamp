/*

Bonfire: Repeat a string repeat a string

Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

*/
function repeat(str, num) {
  if (num < 0) { // If a user passes a negative number as num, return an empty string.
    return ""; 
  } else {
    var newStr = ""; // Initialize a new empty string.
    for (i = 0; i < num; i++) {
      newStr = newStr + str; // Set the new string equal to itself + the original string on each loop iteration.
    }
  return newStr;
  }
}

// Test Cases

repeat("abc", 3);
