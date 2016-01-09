/*

Bonfire: Make a Person

Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.

*/

var Person = function(firstAndLast) {
  
  var fullName = firstAndLast.split(' ');
  
  this.getFirstName = function() {
    return fullName[0];
  };
  
  this.setFirstName = function(firstName) {
    fullName[0] = firstName;
  };
  
  this.getLastName = function() {
    return fullName[1];
  };
  
  this.setLastName = function(lastName) {
    fullName[1] = lastName;
  };
  
  this.getFullName = function() {
    return fullName.join(' ');
  };
  
  this.setFullName = function(name) {
    fullName = name.split(' ');
  };
  
};

// Test Cases

var bob = new Person('Bob Ross');

bob.getFirstName();
bob.getLastName();
bob.getFullName();
bob.setFirstName("Haskell");
bob.getFullName();
bob.setLastName("Curry");
bob.getFullName();
bob.setFullName("Haskell Curry");
bob.getFullName();
bob.getFirstName();
bob.getLastName();

