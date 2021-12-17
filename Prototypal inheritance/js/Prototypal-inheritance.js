// ***array prototypes***

let array = ["kashyap", "dhanraj", "trushti"];

// in this we write array and wen i put . then my IDE provide me some suggestion(exp: array methods).
// Ya, you are right this called a prototype.
array.forEach((item) => {
  console.log(item);
});

// when ever we create array then javascript engin automatically attached some hidden property & function
// this property & function we use like
array.push("jarvis");

console.log(array.__proto__); // this is print all methods, function, prototype in console please check.
console.log(Array.prototype); // same output as above console.

/*==================================================================*/

// ***object prototypes***

// if define one object then they object have also those own property, methods, function
let objectPerson = {
  name: "Kashyap",
  age: 18,
};

console.log(objectPerson.__proto__); // this is print all methods, function, prototype in console please check.

// as well you can do this same thing with function and another javascript feature.

/*==================================================================*/

// but here when i can do like below

console.log(array.__proto__.__proto__); // then we will get prototype of the Object.
// here we see we get a list of objects prototype
// prototype is the like a chain.

console.log(array.__proto__.__proto__.__proto__); // and here i get a null because array.__proto__.__proto__.__proto__ = null
// in javascript all thing is a object.

// all thing in javascript ends with chain of prototype as an object.

/*==================================================================*/

// ***Prototypal inheritance***

//now we see one example of Prototypal inheritance

let objectPerson1 = {
  name: "Kashyap",
  age: 18,
  getNameAndAge: function () {
    return this.name + "'s age is " + this.age;
  },
};

let objectPerson2 = {
  name: "Dhanraj",
};

// this is for only example never do this in real life code.
objectPerson2.__proto__ = objectPerson1;

// here if i can try to access of property of objectPerson1 using objectPerson2
console.log(objectPerson2.age); // Yes i will access the objectPerson1 property using objectPerson2.

console.log(objectPerson2.getNameAndAge()); // Yes as well i also access of objectPerson1 method using objectPerson2
