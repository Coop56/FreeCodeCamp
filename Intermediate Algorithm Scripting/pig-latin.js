/*

Bonfire: Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

*/

function translate(str) {
  var pigLatinTranslation = '';
  var vowelRegEx = /[aeiou]/gi;
  
  if (str[0].match(vowelRegEx)) {
    pigLatinTranslation = str + 'way';
  } else {
    var vowelIndex = str.indexOf(str.match(vowelRegEx)[0]);
    pigLatinTranslation = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
  }
  return pigLatinTranslation;
}

// Test Cases

translate("california");
translate("paragraphs");
translate("glove");
translate("algorithm");
translate("eight");