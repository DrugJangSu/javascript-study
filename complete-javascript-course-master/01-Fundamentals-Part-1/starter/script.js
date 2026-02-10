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

// // Variable name conventions
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

// let age = 30;
// age = 31; // Reassigning the value of the variable

// const birthYear = 1991; // Declaring a constant variable(which cannot be reassigned)
// // birthYear = 1990; // This will throw an error because constants cannot be reassigned

// // const job; // This will throw an error because constants must be initialized with a value
// // The instructor recommends using const for variables that will not be reassigned as the default option, and let for variables that will be reassigned later.
// // let is used for variables that can change, while const is used for variables that should not change.

// var job = 'programmer';
// job = 'teacher'
// // var is an older way to declare variables, but it has function scope and can lead to issues with hoisting. It is generally recommended to use let and const instead of var in modern JavaScript.
// // The instructor says never use var, lol

// lastName = 'Schmedtmann';
// console.log(lastName);
// // This will log 'Schmedtmann' to the console, even though lastName was not declared with let, const, or var. This is because JavaScript allows undeclared variables, but it is not a good practice and can lead to bugs in your code. Always declare your variables with let, const, or var to avoid this issue.

// // ** Basic Operators **

// // Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 =8 <- 2의 3승

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);
// // Concatenation of strings

// // Asssignment operators
// let x = 10 + 5; // which is 15
// x += 10; // x = x + 10;, which is 25
// x *= 4; // x = x*4; // which is 100
// x++; // x = x + 1; // which is 101
// x--; // x = x - 1; // which is 100
// console.log(x); // This will log 100 to the console, which is the final value of x after all the operations.

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018)

// // ** Operator precedence **
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// // Average age calculation
// console.log(ageJonas, ageSarah, averageAge);

// ** Challenge #1 **

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// MY SOLUTION
// const massMark = 78;
// const massJohn = 92;

// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// Bonus(create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.)

// console.log(BMIMark > BMIJohn);

// instructor's solution
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// ** Strings and Template Literals **
// -----------review starting from the top ---------------------------------------------------------
/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);

// Once it's linked to the js file and the html, everything that's coded in the js will affect the html.

console.log("Jonas");
console.log(23);
// let firstName = "Jonas";
let firstName = "Matilda";
let first = "jonas";
let firstNamePerson;
let first_name_person;

console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
*/

// // Assignment[Values and Variables]
// let country = "South Korea";
// let continent = "Asia";
// let population = "50";

// console.log(country);
// console.log(continent);
// console.log(population);

//// Data Types
/// 7 Primitive Data Types;
// Number : Floating point numbers -> Used for decimals and integers
// String : Sequence of characters -> Used for text
// Boolean : Logical type that can only be used true or false (Used for taking decisions)
// Undefined : Value taken by a variable that is not yet defined('empty value')
// Null : Also means 'empty value', but in different circumstances
// Symbol(ES2015) : Value that is unique and cannot be changed
// BigInt(ES2020) : Larger integers than the Number type can hold

// Javascript has dynamic typing - which means instead of defining the data type of the value stored manually, data types are determined automatically.
/*
this literally comments out the area.
*/
/*
// true;
// console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// let is used to declare a 'new' variable.
// but when you want to reassign it, don't use let.

let year;
console.log(year);
console.log(typeof year);
// this will result in as undefined in both the variable and the type.
// it's because it's an empty variable

year = 1991;
console.log(year);
console.log(typeof year);

console.log(null);

// // Assignment[Data Types]
let country = "South Korea";
let continent = "Asia";
let population = "50";
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof langauge);
*/

//// let, const and var
/*
let age = 30;
age = 31;
// reassigning a value to a variable(in this case we call the term mutated)

const birthYear = 1991;
// birthYear = 1992;
// this will cause an error, since const(constant) varialbe cannot be mutated
// const job;
// this will also cause an error, since it needs an initializer(=)
var job = "programmer";
job = "teacher";

// // Assignment[let, const and var]

let language = "Korean";
const country = "South Korea";
const continent = "Asia";
const isIsland = false;
*/

//// Basic Operators

// Math Operators
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison Ooperators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);

// // Assignment[Basic Operators]
let country = "South Korea";
let continent = "Asia";
let population = "50";
let isIsland = false;
let language = "Korean";

const cutHalf = population / 2;
console.log(cutHalf);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description =
  country +
  " " +
  "is in" +
  " " +
  continent +
  "," +
  " " +
  "and its" +
  " " +
  population +
  " " +
  "million people speak" +
  " " +
  language;

const description =
  "country" +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description);
*/

//// Operator Precedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//// Strings and Template Literals
/*
const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// Using the template literals(` key is right above the tab key)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

//You can use backticks for all strings.
console.log(`Just a regular normal string lol`);

console.log(
  "string with \n\
multiple \n\
lines",
);

console.log(`String with
multiple
lines`);


/// Assignment[Strings and Template Literals]
let country = "South Korea";
let continent = "Asia";
let population = "50";
let isIsland = false;
let language = "Korean";

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);
*/

//// Taking Decisions IF / ELSE Statements

const age = 15;
/*
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Challenge #2
// <My solution>

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/
