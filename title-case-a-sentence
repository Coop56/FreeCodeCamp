function titleCase(str) {

  var strArr = str.split(' ');
  var newArr = [];
  
  for (i = 0; i < strArr.length; i++) {
    var firstLetter = strArr[i].charAt(0).toUpperCase();
    var restOfWord = strArr[i].slice(1).toLowerCase();
    
    newArr[i] = firstLetter + restOfWord; 
  }
  str = newArr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
