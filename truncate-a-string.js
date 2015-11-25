/* 

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the length of the string is less than or equal to 3 characters, then the length of the three dots is not added to the string length.

*/

function truncate(str, num) {
  if (str.length > num) {
    if (str.length <= 3) {
        str = str.slice(0, num) + "...";
    } else if (num < 3) {
      str = str.slice(0, num) + "...";
    } else {
        str = str.slice(0, num - 3) + "...";
    }
  }
  return str;
}
// Test Cases
truncate("A-tisket a-tasket A green and yellow basket", 11);
truncate("Absolutely Longer", 2);