// This file is part of the JavaScript study exercises of a Udemy Course
// The Complete Javascript Course 2025: From Zero to Expert!
// console.log("Hello, JavaScript!");

// *** Javascript Fundamentals : Part 1 ***

// How to open the console in the browser(chrome);
// CMD + Option + J (Mac)
// CTRL + Shift + J (Windows/Linux)

// let js = "amazing";
// if (js ==="amazing") alert("JavaScript is FUN!");

// 40 + 8 + 23 - 10;
// console.log(40 + 8 +23 - 10);

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>JavaScript Fundamentals – Part 1</title>
//     <style>
//       body {
//         height: 100vh;
//         display: flex;
//         align-items: center;
//         background: linear-gradient(to top left, #28b487, #7dd56f);
//       }
//       h1 {
//         font-family: sans-serif;
//         font-size: 50px;
//         line-height: 1.3;
//         width: 100%;
//         padding: 30px;
//         text-align: center;
//         color: white;
//       }
//     </style>
//   </head>
//   <body>
//     <h1>JavaScript Fundamentals – Part 1</h1>

//     <script src="script.js"></script>
//   </body>
// </html>

// ** Values ad Variables **

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = "Matilda";
// // Let is used to declare variables that can be reassigned later
// // let first = 'jonas'
// // let firstNamePerson
// // let first_name_person
// // These are examples of variable names that are used in javascript

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // let 3years = 3; // This is not a valid variable name, it cannot start with a number 

// // let jonas&matilda = 'JM'; // This is also not a vaild variable name, it cannot contain special characters like &

// let jonas_matilda = 'JM'
// // let new = 27: // this is also not vaild, 'new' is a reserved keyword in Javascript
// let $function = 27; // this is also a reserved keyword in javascript
// let name = "Jonas"; // This is vaild, but name is not a good variable name because it's too generic and confusing.
// let Person = 'jonas'; // This is vaild, but it's not a good variable name because it's not a lowercase -which is a common convention in JavaScript for variable names.
// let PI = 3.1415; // This is a good variable name because it's a real constant. (Pie is also used)

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
// // Keeping the variable names in camelCase is a good practice in JavaScript.
// let job1 = 'Programmer';
// let job2 = 'Teacher';
// // As you can see, the variable names are descriptive as the former than the latter.

// console.log(myFirstJob);

// * Practice Assignment *
// Declare variables called country, continent, population and assign their values according to your own country (population in millions), and log their values in the console.

// let country = "South Korea";
// let continent = 'Asia';
// let population 51.7; // Population in millions
// console.log(country);
// console.log(continent);
// console.log(population);
// //You can also use console.log to log multiple variables at once:
// console.log(country, continent, population);

// ** Data Types **

// Number : Floating point numbers -> Used for decimals and integers
// String : Sequence of characters -> Used for text
// Boolean : Logical type that can be true or false -> Used for taking decisions
// Undefined : Value taken by a variable that is not yet defined(empty value)
// Null : Also a type of empty value
// Symbol (ES2015) : Value that is unique and cannot be changed
// BigInt (ES2020) : Larger integers than the Number type can hold

// Javascript has dynamic typing : We do not have to manually define the data type of a variable, it is automatically determined by the value assigned to it. It's worth knowing that the Value has the type, not the variable itself.

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// // This is a descriptive variable name holding a Boolean value.

// // console.log(typeof true); // This will log 'boolean' to the console, indicating the type of the value.
// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!'; // Reassigning the variable to a string value
// console.log(typeof javascriptIsFun);
// // This will log 'string' to the console, indicating the type of the value after reassignment.

// let year; // Declaring a variable without a value
// console.log(year); // This will log 'undefined' to the consol,e indicating that the variable has not been assigned a value.
// console.log(typeof year); // This will log 'undefined' to the console, indicating the type of the value.

// year = 1991; // Assigning a value to a variable
// console.log(typeof year); // This will log the value 1991 to the console.
// console.log(typeof null); // This will log 'object' to the console, which is a known bug in JavaScript. Null is actually a primitive value that represents the absence of any object value.

