/*

Bonfire: Convert HTML Entities

Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

*/

function convert(str) {
  
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

}

// Test Cases

convert("Dolce & Gabbana");
convert("Hamburgers < Pizza < Tacos");
convert("Sixty > twelve");
convert('Stuff in "quotation marks"');
convert("Shindler's List");
convert("<>");
convert("abc");