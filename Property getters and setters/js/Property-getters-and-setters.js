let person = {
  name: "kashyap",
  age: 19,
};

// if we want change a person.name into uppercase what will be do here
console.log(person.name.toUpperCase()); // KASHYAP

/*==================================================================*/

// but now i say change they property inside of they object.
// now we create new method in object like below.
let person2 = {
  name: "Dhanraj",
  age: 20,

  getName: function () {
    return this.name.toUpperCase();
  },
};

// here we call one method and they method is inside of person2
console.log(person2.getName()); // DHANRAJ

/*==================================================================*/

// but problem is we only want a property not a one method.
// now in this example we only call property & we create one method how don't call like one method but call as one property.
// now we look getter & setter function

// ***getter function***

let person3 = {
  name: "Trushti",
  age: 20,

  get getName() {
    /*
        -> This function not only work with the toUpperCase().
        -> This getter function use for send manipulate data. 
        -> Using this function we send changed data to the user.
    */
    return this.name.toUpperCase();
  },
};

// here we call one property inside of person2
console.log(person3.getName); // TRUSHTI

// ***setter function***

// now we all see how to get data from object as property
// now i will send data outside from the object and i want store the modified data into object
let person4 = {
  name: "Kashyap",
  age: 20,

  set setName(n) {
    this.name = n.toUpperCase();
  },
};

person4.setName = "Jarvis";

// here we call one property inside of person2
console.log(person4.name); // JARVIS
// if your are console a setName then you see undefined.
