// -------------------------------
// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}

// -------------------------------
// declaring a function named greet()
function greet() {
    console.log("Hello there");
  }
  
  greet(); // calling function
  
  // -------------------------------
  function sayHello(username) {
    console.log(`Hello ${username}`);
  }
  
  sayHello("HuXn"); // calling function
  // -------------------------------
  // The return statement can be used to return the value to a function call.
  function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
    // console.log("Hello World"); NOTHING
  }
  
  const result = add(10, 20);
  console.log(result);
  // -------------------------------

  // ---------------------------
function myFunction(p1, p2) {
    return p1 * p2; // The function returns the product of p1 and p2
  }
  
  let x = myFunction(4, 3);
  console.log(x);


  // Function Declaration
function sayHello(username) {
    console.log(`Hello ${username}`);
  }
  
  sayHello("HuXn");
  
  // Function Expressions
  const greetings = function (user) {
    console.log(`Hello ${user}`);
  };
  
  greetings("Doe");
  
  // -------------------------
  console.log(x1); // ERROR
  let x1 = 10;



  
// -------------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})
// -------------------------------
function showCallFunc(fn) {
    const value = 10;
    fn(value);
  }
  
  showCallFunc(function (value) {
    console.log(value);
  });
  // -------------------------------
  // function
  function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb();
  }
  
  // callback function
  function callMe() {
    console.log("I am callback function");
  }
  
  // passing function as an argument (callback)
  greet("Peter", callMe);
  // -------------------------------
  

  
// Global Scope
// Local Scope

let textMessage = "hi"; // Global Scope

function showMessage() {
  let textMessage = "hi"; // Local Scope
  console.log(textMessage); // Access Local Scope
}

for (let i = 0; i < 5; i++) {
  console.log(i); // Local Scope
}

console.log(i); // Global Scope
console.log(textMessage); // Access Global Scope

// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// The two types of scope are local and global

// Global variables are those declared outside of a block.

// Local variables are those declared inside of a block.



// a method is a function that is associated with an object. It allows objects to perform actions or provide functionalities.

// ------------------------------------
// Defining a method outside the object
// function greet() {
//   return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
// }

// const person = {
//   name: "John",
//   age: 30,
//   greet,
// };

// console.log(person.greet());

// ------------------------------------

const person = {
    name: "HuXn",
    age: 19,
    greet: function greet() {
      return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
    },
  };
  
  console.log(person.greet());
  // ------------------------------------
  