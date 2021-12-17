let employee = {};

employee.title = "kashyap";

console.log(Object.getOwnPropertyDescriptor(employee, "title"));

// This function for adding only one particular value in the Object.
Object.defineProperty(employee, "age", {
  value: 19,
  writable: true,
  configurable: false,
  enumerable: true,
});

// This function for adding only one & more than one  value in the Object.
Object.defineProperties(employee, {
  lastName: {
    value: "kapdi",
    writable: true,
    configurable: false,
    enumerable: true,
  },
  profession: {
    value: "Full Stack Developer",
    writable: true,
    configurable: false,
    enumerable: true,
  },
});

// trying to delete age (but we set configurable: false in line number 35)
delete employee.age;

// Here we change a value of age property(we set writable: true so we can change the value of this age property)
employee.age = 21;

console.log(Object.getOwnPropertyDescriptor(employee, "age"));

for (let key in employee) {
  console.log(key);
}

console.log(employee);

// This function for all property to set configurable: false
Object.seal(employee);

// But we can change the value of particular property
employee.title = "Krupa";

console.log(employee.title);

// Here we are not able to define new property to employee because we set Object.seal() on line number 46
employee.frdName = "Dhanraj";

// it's return false because we set Object.seal() in line number 46
console.log(delete employee.title);

// This function for all property to set writable: false
Object.freeze(employee);

// But we can change the value of particular property
employee.title = "Krupa"; // here we get Krupa because we already change this property above site on line number 49.

console.log(employee.title);

// Using this function we can't add new property in exiting object(employee), but we also modify the exiting one.
Object.preventExtensions(employee);

// here we get undefined because we can't define new property on exiting Object(employee)
employee.carName = "Rolls Royce";

console.log(employee.carName);

// This function called us the object is Extensible or not here we get false because on line number 68 we declare Object.preventExtensions(employee);
console.log(Object.isExtensible(employee)); // return false

// This function called us the object is Sealed or not here we get true because on line number 46 we declare Object.seal(employee);
console.log(Object.isSealed(employee)); // return true

//This function called us the object is freeze or not here we get true because on line number 46 we declare Object.freeze(employee);
console.log(Object.isFrozen(employee)); // return true
