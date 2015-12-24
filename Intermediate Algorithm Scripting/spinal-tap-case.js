/*

Bonfire: Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {

    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+|_+/g, "-").toLowerCase();

    //return str.split(' ').join('-').toLowerCase();
}

// Test Cases

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");