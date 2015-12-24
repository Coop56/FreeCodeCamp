/*
Bonfire: Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function boo(bool) {
  return typeof bool === 'boolean';
}

//Test Cases

boo(null);
boo(false);
boo([1, 2, 3]);
boo([].slice);
boo({ "a": 1 });
boo(1);
boo(NaN);
boo("a");
