function palindrome(str) {
  str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, '').toLowerCase();
  strReverse = str.split('').reverse().join('');
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");