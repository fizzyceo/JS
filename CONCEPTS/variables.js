// // Variables and Data Types in JavaScript

// let height = 180; // 'let' allows you to reassign the value later

// const pi = 3.14; // 'const' means the value cannot be changed later

// let name = "John Doe"; // Strings are enclosed in quotes

// let isStudent = true;

// //------------------------------------------------------------------------

// // pi = pi + 1; // This will throw an error because 'age' is a constant

// height = height + 1;

// console.log("height: ", height);

// //------------------------------------------------------------------------

// // Checking the type of a variable
// console.log("type of name: ", typeof name);

// // //------------------------------------------------------------------------

// // // Arrays in JavaScript
// let listOfNames = ["John", "Jane", "Doe"];

// console.log("listOfNames: ", listOfNames);
// // // Accessing elements in an array
// console.log("first element of listOfNames: ", listOfNames[0]);

// console.log(
//   "last element of listOfNames: ",
//   listOfNames[listOfNames.length - 1]
// );

// // Modifying arrays
// console.log("reverse the list of names : ", listOfNames.reverse()); //reverse the array

// // listOfNames[0] = "Jack"; // Change the first element
// listOfNames.push("Jill"); // Add an element to the end of the array
// listOfNames.unshift("Jim"); // Add an element to the beginning

// listOfNames.pop(); // Remove the last element
// listOfNames.shift(); // Remove the first element
// console.log("listOfNames after push: ", listOfNames);
// console.log("listOfNames after modifications: ", listOfNames);

// //------------------------------------------------------------------------

// // Strings
// let greeting = "hello team hello people hello gmc";
// console.log("Greeting bla bla ", greeting); // Output: Hello, World!
// console.log("Length of greeting: ", greeting.length); // Output: 13
// console.log("Uppercase greeting: ", greeting.toUpperCase()); // Output: HELLO, WORLD!
// console.log("LowerCase greeting: ", greeting.toLowerCase()); // Output: HELLO, WORLD!
// console.log("Substring: ", greeting.substring(0, 4).toLowerCase()); // Output: Hello
// console.log("Index of h: ", greeting.indexOf("H"));
// console.log("Character at index 1: ", greeting.charAt(0)); // Output: h

// console.log("Last character: ", greeting.charAt(greeting.length - 1)); // Output: !

// let greetingsAsAnArray = greeting.split(","); // Split string into an array

// console.log("greetingsAsAnArray : ", greetingsAsAnArray);
// const exist = greeting.includes("e");
// console.log("the charcter e is present? : ", exist);

// //------------------------------------------------------------------------

// Numbers
// let number = 42;
// console.log("Number: ", number); // Output: 42
// const numbsur10 = number / 10;
// console.log("Number / 10: ", number / 10); // Output: 52
// let age = 30;
// // // Boolean
// let isAdult = age >= 18;
// // equivelent to this:
// if (age >= 18) {
//   isAdult = true;
// } else {
//   isAdult = false;
// }
// console.log("Is adult: ", isAdult); // Output: true

// // Null and Undefined
// let unknownValue = null; // Explicitly set to 'null'
// let notDefined; // Declared but not assigned, so it's 'undefined'

// console.log("unknownValue: ", unknownValue); // Output: null
// console.log("notDefined: ", notDefined); // Output: undefined
