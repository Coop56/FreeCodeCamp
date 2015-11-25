
/*

Bonfire: Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

*/
function mutation(arr) {
  
  var firstStr = arr[0].split('');
  var secondStr = arr[1].split('');
  
  for (i = 0; i < firstStr.length; i++) {
    firstStr[i] = firstStr[i].toLowerCase();
  }
  for (i = 0; i < secondStr.length; i++) {
    secondStr[i] = secondStr[i].toLowerCase();
  }
  
  for (i = 0; i < secondStr.length; i++) {
      if (firstStr.indexOf(secondStr[i]) === -1) {
        return false;
      } 
    }
  return true;
}

//Test Cases

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["hello", "neo"]);
mutation(["hello", "neo"]);

