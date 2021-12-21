// CamelCase Notation: oneTowThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory function
let personOne = "kashyap";
console.log("=> Factory Function Example");
function hello(value) {
  console.log(`The Person Name is: ${value}`);
}

hello(personOne);

// Constructor function
let personTwo = "Dhanraj";
console.log("=> Constructor Function Example");
function Hello(value) {
  this.name = value;

  console.log(`The Person Name is: ${value}`);
}

const person = new Hello(personTwo);
