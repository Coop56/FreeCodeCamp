/*

Bonfire: Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.


*/

function sumPrimes(num) {
  
  var sumPrimeArray = [];
  var total = 0;
  
  for (i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sumPrimeArray.push(i);
    }
  }
  
  for (i = 0; i < sumPrimeArray.length; i++) {
    total += sumPrimeArray[i];
  }
  return total;
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

// Test Cases

sumPrimes(10);
sumPrimes(977);
