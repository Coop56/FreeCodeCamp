/*


Bonfire: Sum All Odd Fibonacci Numbers

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

*/

function sumFibs(num) {
  var prev = 0, curr = 1, next = 0, total = 0;
  
  while (curr <= num) {
    if (0 !== curr % 2) {
      total += curr;
    }
    
    next = curr + prev;
    prev = curr;
    curr = next;
  }
  return total;
}

// Test Cases

sumFibs(1);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);
sumFibs(75025);