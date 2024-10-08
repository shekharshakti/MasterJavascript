// push() -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift() -> Add to start
// concat() -> combining arrays

const fruits = [
    "apples",
    "pomegranate",
    "mango",
    "strawberries",
    "pineapple",
    "grapefruit",
  ];
  
  console.log(fruits);
  fruits.push("banana");
  fruits.pop();
  fruits.shift();
  fruits.unshift("orange");
  
  // CONCAT
  // const fruits = ["apples", "pomegranate", "mango"];
  // let moreFruits = ["strawberries", "pineapple", "grapefruit"];
  // let totalFruits = fruits.concat(moreFruits);
  
  console.log(fruits);

  
// join - creates string from array
// reverse - reverse an array
// slice - copy portion of an array
// sort - sorts an array

let pl = ["JavaScript", "Golang", "Python", "php"];
let numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("Golang"));
console.log(pl.join("-"));
console.log(pl.reverse());
console.log(pl.slice(0, 3));
console.log(pl.sort());


// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

// concat()
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

// includes()
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");

// push()
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.push("Kiwi");

// unshift()
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);

// pop()
fruits.pop();

// shift
const array2 = [1, 2, 3];
const firstElement = array2.shift();
console.log(array2);
console.log(firstElement);

// sort()
fruits.sort();

// slice()
const citrus = fruits.slice(1, 3);

// splice()
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
