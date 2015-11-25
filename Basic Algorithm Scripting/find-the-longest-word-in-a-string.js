function findLongestWord(str) {
  str = str.split(' ');
  var strNew = '';
  for (i = 0; i < str.length; i++) {
    if (str[i].length > strNew.length) {
      strNew = str[i];
    }
  }
  str = strNew;
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");