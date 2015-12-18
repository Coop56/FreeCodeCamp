/*

Bonfire: Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convert(num) { 
  if(num < 1){ return "";}
  if(num >= 1000){return "M" + convert(num - 1000);}
  if(num >= 900){return "CM" + convert(num - 900);}
  if(num >= 500){return "D" + convert(num - 500);}
  if(num >= 100){return "C" + convert(num - 100);}
  if(num >= 90){return "XC" + convert(num - 90);}
  if(num >= 50){return "L" + convert(num - 50);}
  if(num >= 40){ return "XL" + convert(num - 40);}
  if(num >= 10){ return "X" + convert(num - 10);}
  if(num >= 9){ return "IX" + convert(num - 9);}
  if(num >= 5){ return "V" + convert(num - 5);}
  if(num >= 4){ return "IV" + convert(num - 4);}
  if(num >= 1){ return "I" + convert(num - 1);}  
}
// Test Cases

convert(5);
convert(9);
convert(12);
convert(16);
convert(29);
convert(44);
convert(45);
convert(68);
convert(83);
convert(97);
convert(99);
convert(500);
convert(501);
convert(649);
convert(798);
convert(891);
convert(1000);
convert(1004);
convert(1006);
convert(1023);
convert(2014);
convert(3999);