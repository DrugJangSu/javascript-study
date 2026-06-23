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

// ** let, const and var **
// let, const, and var are used to declare variables in JavaScript. However, they have different scopes and behaviors.

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
// console.log(lastName); // This will log 'Schmedtmann' to the console, even though lastName was not declared with let, const, or var. This is because JavaScript allows undeclared variables, but it is not a good practice and can lead to bugs in your code. Always declare your variables with let, const, or var to avoid this issue.

// ** Basic Operators **

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


// // Assignment[Strings and Template Literals]
let country = "South Korea";
let continent = "Asia";
let population = "50";
let isIsland = false;
let language = "Korean";

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);
*/

//// Taking Decisions IF / ELSE Statements
/*
const age = 15;

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


/// Assignment[Taking Decisions: if/else Statements]
let country = "South Korea";
let continent = "Asia";
let population = "50";
let isIsland = false;
let language = "Korean";

if (population > 33) {
  console.log(
    `${country}'s population is ${population - 33} million above average`,
  );
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`,
  );
}
*/

//// Type Coversion and Coercion
/*
/// Type Conversion
const inputYear = `1991`;
console.log(inputYear + 18);
// This will be printed as 199118, instead of adding up since it's considered a string.

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
// This will print a Nan, which means not a number.(invaild)
console.log(typeof NaN);
// Nan is considered a number in programming

console.log(String(23), 23);
// purple color in the console means it's a number.

/// Type Coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
//it means that javascript automatically does conversions so that the code could run.

let n = "1" + 1;
n = n - 1;
console.log(n);
// This will print out 10. (1+1 will automatically covert it as a string, which is 11. and the minus operator on the following code will automatically convert it to an integer which results to 10.)

2 + 3 + 4 + "5"; // this will be 95
"10" - "4" - "3" - 2 + "5"; // this will be 15

/// Assignment[Type Conversion and Coercion]

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> False
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143 <- I only got this wrong
*/

//Truthly and Falsy Values
// 5 falsy values : 0, '', undefined, null, NaN
/*
console.log(Boolean(0)); //-> results in false
console.log(Boolean(undefined)); //-> false
console.log(Boolean("Jonas")); //-> true
console.log(Boolean({})); //-> true
console.log(Boolean("")); //-> false

// const money = 0;
const money = 100;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}
// the reason this works, is that despite 0 not being a boolean, it will try to convert into a boolean which makes the money statement false.

// let height;
let height = 0;
if (height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

//// Equality Operators: == vs ===
/*
const age = 18;
if (age === 18) console.log("You just became an adult :D(strict)");

// a single equal is an assignment operator, and the triple equal is a comparison operator.
// the triple equal is called the strict equality operator.(because it doesn't do type cocercion)
"18" === 18; // <- this would be false.
// the double equal is a loose equality operator. (because it proceeds the time cocercion)
"18" == 18; // <- this would be true.

if (age == 18) console.log("You just became an adult :D(loose)");

// as a general rule, always use strict equality(triple equal signs) in order to find bugs and debug codes to avoid errors.

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// this is a different operator(make sure to use the strict version which is !== instead of !=)
if (favourite !== 23) console.log("why not 23?");

/// Assignment[Equality Operators : == vs ===]
// <My solution>
const numNeighbour = Number(
  prompt(`How many neighbour countries does your country have?`),
);
console.log(numNeighbour);
console.log(typeof numNeighbour);

if (numNeighbour === 1) {
  console.log(`Only 1 border!`);
} else if (numNeighbour > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}

//// Boolean Logic
/// Basic Boolean Logic : The AND, OR & NOT Operators

// A AND B (True when ALL are True)
// A OR B (True when ONE or more is True)
// NOT A, NOT B (Inverts true/false value)


//// Logical Operators
const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B

console.log(hasDriversLicense && hasGoodVision); //&& means AND
console.log(hasDriversLicense || hasGoodVision); // || means OR
console.log(!hasDriversLicense); // ! means not

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false; // variable C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

/// Assignment[Logical Operators]
// {<My solution>
const country = "South Korea";
const continent = "Asia";
const population = 40;
const isIsland = false;
const language = "English";

if (language === `English` && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :()`);
}


/// Coding Challenge #3
// {<My solution>
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  ("Both win the trophy");
}
// <jona's solution>
// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the enemy team, and ther same time a score of at least 100 points.
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else {
  ("Both win the trophy");
}

// Bonus 2: Minimum score also applies to a draw. So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreKoalas === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log(`No one wins the trophy.`);
}
*/

/*
//// The Switch Statement
const day = "thursday";

switch (day) {
  case "monday": // this is an alternative way of checking in a strict way day == 'monday', and if this is true the following code will run.
    console.log("Plan Course Structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// If you don't use the break, it will continue to execute and print out the other statements

// video challenge
// my solution
if (day === "monday") {
  console.log("Plan Course Structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a vaild day!");
}

/// Assignment[The Switch Statement]
// My Solution
const language = "korean";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

//// Statements and Expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}.`);
*/

//// The Conditional (Ternary) Operator
/*
const age = 15;
// age >= 18
//   ? console.log("i like to drink wine 🍷")
//   : console.log("I like to drink water 💧 ");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);


/// Assignment[The Conditional(Ternary) Operator]
// My Solution
const country = "South Korea";
const population = 40;

console.log(
  `South Korea's population is ${population > 33 ? "above average" : "below average"}`,
);

/// Coding Exercise - Challenge #4
// My solution
const bill = 275;

let tip;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

console.log(tip)
console.log(bill + tip)
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)

// Instructor's solution
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
);
*/

///// Section 3 : JavaScript Fundamentals - Part 2
//// Activating Strict Mode
/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio"; <- this will cause an error
// const private = 534; <- this will also cause an error
// const if = 23; <- error.
*/
//// Functions
/*
"use strict";

function logger() {
  console.log("My name is Hyun");
} // this is called the function buddy

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

/// Assignment[Functions]
// My Solution
function describeCountry(country, population, capitalCity) {
  console.log(country, population, capitalCity);
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return description;
}
const finland = describeCountry("Finland", 6, "Helsinki");
console.log(finland);
const southKorea = describeCountry("South Korea", 51, "Seoul");
console.log(southKorea);
const japan = describeCountry("Japan", 126, "Tokyo");
console.log(japan);

// Jonas Solution
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = describeCountry("Portugal", 10, "Lisbon");
const descGermany = describeCountry("Germany", 83, "Berlin");
const descFinland = describeCountry("Finland", 6, "Helsinki");

console.log(descPortugal, descGermany, descFinland);
*/
//// Function Declarations vs. Expressions
/*
"use strict";
// Function declaration example
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression example
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// Function declaration can be called before it is defined in the code, while function expression cannot be called before it is defined.

/// Assignment[Function Declarations vs. Expressions]
// My Solution
// Function Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const china1 = percentageOfWorld1(1441);
const southKorea1 = percentageOfWorld1(51);
const japan1 = percentageOfWorld1(126);
console.log(china1, southKorea1, japan1);

// Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const china2 = percentageOfWorld2(1441);
const southKorea2 = percentageOfWorld2(51);
const japan2 = percentageOfWorld2(126);
console.log(china2, southKorea2, japan2);

//Jonas Solution
function percentageOfWorld1(population) {
   return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);
*/
//// Arrow Functions
/*
"use strict";
// Arrow function example
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Hyun"));
console.log(yearsUntilRetirement(1980, "Bob"));
console.log(yearsUntilRetirement(1980, "Jonas"));

/// Assignment[Arrow Functions]
// Last assessment
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const china2 = percentageOfWorld2(1441);
const southKorea2 = percentageOfWorld2(51);
const japan2 = percentageOfWorld2(126);
console.log(china2, southKorea2, japan2);

//my solution
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const china3 = percentageOfWorld3(1441);
const southKorea3 = percentageOfWorld3(51);
const japan3 = percentageOfWorld3(126);
console.log(china3, southKorea3, japan3);

// jonas solution
show example solution
 {...}
const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percChina3, percUSA3);
*/
//// Functions Calling Other Functions
/*
"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

/// Assignment[Functions Calling Other Functions]
// previous percentageOfWorld1 function
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const china1 = percentageOfWorld1(1441);
const southKorea1 = percentageOfWorld1(51);
const japan1 = percentageOfWorld1(126);
console.log(china1, southKorea1, japan1);

// my solution
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const describe = `${country} has ${population} million people, which is about ${percentage}`;
  return describe;
}
const chinaPopulation = describePopulation("China", 1441);
const southKoreaPopulation = describePopulation("South Korea", 51);
const japanPopulation = describePopulation("Japan", 126);
console.log(chinaPopulation, southKoreaPopulation, japanPopulation);

// Jona's Solution
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);
*/
//// Reviewing Functions
/*
"use strict";

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1997, "Hyun"));
console.log(yearsUntilRetirement(1950, "Mike"));

// The return function should be always at the very last line. The function will stop executing after the return statement.


//// Coding Challenge #1
/// My solution
const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3
    return average;
}


const checkWinner = (scoreDolphins,scoreKoalas) => {
    if (scoreDolphins > scoreKoalas) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
    } else if (scoreKoalas > scoreDolphins) {
        console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`)
    } else {
        console.log("No team wins...")
    }
}
const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(85, 54, 41)
checkWinner(scoreDolphins, scoreKoalas)

const scoreDolphins = calcAverage(85, 54, 41)
const scoreKoalas = calcAverage(23, 34, 27)
checkWinner(scoreDolphins, scoreKoalas)


// Jonas Solution
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);
*/

//// Introduction to Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ["Bob", "Alice"] <- this will cause an error because we cannot reassign a new array to a constant variable. However, we can change the elements of the array.

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years[0])); // this will work because we are passing a single value to the function.

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);
console.log(age1, age2, age3, age4, age5);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
  calcAge(years[4]),
];
console.log(ages);

/// Assignment[Introduction to Arrays]
// My solution
const populations = [1441, 51, 126, 83];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (populations[0] / 7900) * 100;
}
function percentageOfWorld2(population) {
  return (populations[1] / 7900) * 100;
}
function percentageOfWorld3(population) {
  return (populations[2] / 7900) * 100;
}
function percentageOfWorld4(population) {
  return (populations[3] / 7900) * 100;
}
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld2(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld4(populations[3]),
];

console.log(percentages);

// second attempt
const populations = [1441, 51, 126, 83];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

//// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); // Last
console.log(friends);
console.log(newLength);

friends.unshift("John"); // First
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// Boolean
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23")); // this will return false because "23" is a string and 23 is a number.
console.log(friends.includes(23)); // this will return true because 23 is a number and it is included in the array.

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

/// Assignment[Basic Array Operations (Methods)]
// My solution
const neighbours = ["China", "Japan", "North Korea"];
const add1 = neighbours.push("Utopia");
console.log(neighbours);
console.log(add1);
const remove = neighbours.pop();
console.log(neighbours);
console.log(remove);

if (neighbours.includes("Germany")) {
  console.log(neighbours);
} else {
  console.log("Probably not a central european country :D");
}
const index = neighbours.indexOf("Japan");
console.log(index);
neighbours[1] = "Nihon";
console.log(neighbours);


/// Coding Exercise 6 : Challenge #2
// my solution
const bills = [125, 555, 44]

const calcTip = function (bill) {
 return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 
};

const tip1 = calcTip(bills[0])
const tip2 = calcTip(bills[1])
const tip3 = calcTip(bills[2])
const tips = [tip1, tip2, tip3]
console.log(tips)

const totals = [bills[0] + tip1, bills[1] + tip2, bills[2] + tip3]
console.log(totals)

// Jonas Solution
const bills = [125, 555, 44];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

//// Introduction to Objects
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtamnn",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};


/// Assignment[Introduction to Objects]
// My solution
const myCountry = {
  country: "South Korea",
  capital: "Seoul",
  language: "Korean",
  population: 51,
  neighbours: ["China", "Japan", "North Korea", "Taiwan"],
};

// Jonas Solution
const myCountry = {
  country: 'Finland',
  capital: 'Helsinki',
  language: 'finnish',
  population: 6,
  neighbours: ['Norway', 'Sweden', 'Russia']
};
*/

//// Dot vs. Bracket Notation
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtamnn",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
// The order of properties in an object doesn't matter.

// Dot notation
console.log(jonas.lastName);
// Bracket notation
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey); <- this will cause an error because we cannot use dot notation with a variable.

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.",
);
// console.log(interestedIn.jonas); // this will return undefined because we are trying to access a property that doesn't exist in the object.

console.log(jonas[interestedIn]); // this will return the value of the property that the user inputted.

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends.",
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

/// Challenge
/// print "Jonas has 3 friends, and his best friend is called Michael"
// My solution
console.log(
  `${jonas.firstName}` +
    " has " +
    `${jonas.friends.length}` +
    " friends, and his best friend is called " +
    `${jonas.friends[0]}`,
);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

/// Assignment[Dot vs Bracket Notation]
// My solution
const myCountry = {
  country: "South Korea",
  capital: "Seoul",
  language: "Korean",
  population: 51,
  neighbours: ["China", "Japan", "North Korea", "Taiwan"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
);

// Jonas Solution
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
*/

//// Object Methods
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

// Challenge
// "jonas is a 46-year old teacher, and he has a driver's license"
// Jonas Solution

console.log(jonas.getSummary());


/// Assignment[Object Methods]
const myCountry = {
  country: "South Korea",
  capital: "Seoul",
  language: "Korean",
  population: 51,
  neighbours: ["China", "Japan", "North Korea", "Taiwan"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`,
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

*/
// Reviewing Objects and Methods
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
// 데이터를 꺼낼 때 숫자 인덱스를 써야 함. [2]가 나이인지 알려면 코드를 처음부터 세어봐야 함.(순서 중요)

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// 데이터를 꺼낼 때 이름(key) 을 써요. jonas.age만 봐도 나이라는 게 바로 명확함. (순서 상관없음)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
// console.log(jonas.firstName);
console.log(jonas["lastName"]);

// These are two ways to access the properties of an object. Dot notation and bracket notation. Dot notation is more common, but bracket notation is useful when we want to compute the property name.

const nameKey = "Name";
console.log(jonas[`first` + nameKey]);
console.log(jonas[`first` + nameKey]);
// This only works in the bracket notation and not in the dot notation.
/*
const interestedIn = prompt(
  `What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.`,
);
console.log(interestedIn);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, age, job, and friends.`,
  );
}

jonas.location = `Portugal`;
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// `Jonas has 3 friends, and his best friend is called Michael`
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`,
);
*/

// Coding Challenge #3
// Come back when I'm ready ------------------------------------

//// Iteration : The for Loop
// console.log(`Lifting weights repetition 1 🏋️‍♀️`);
// console.log(`Lifting weights repetition 2 🏋️‍♀️`);
// console.log(`Lifting weights repetition 3 🏋️‍♀️`);
// console.log(`Lifting weights repetition 4 🏋️‍♀️`);
// console.log(`Lifting weights repetition 5 🏋️‍♀️`);
// console.log(`Lifting weights repetition 6 🏋️‍♀️`);
// console.log(`Lifting weights repetition 7 🏋️‍♀️`);
// console.log(`Lifting weights repetition 8 🏋️‍♀️`);
// console.log(`Lifting weights repetition 9 🏋️‍♀️`);
// console.log(`Lifting weights repetition 10 🏋️‍♀️`);

// for loop keeps running while condition is TRUE
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
// rep++ is the same as rep = rep + 1

/// Assignment[Iteration: The for Loop]
// My solution
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}
// Jonas Solution
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}
*/

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apple, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

//// Looping Arrays, Breaking and Continuing
/*

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// console.log(jonas[3]);
// console.log(jonas[4]);
// jonas[5] does NOT exist, so it will return undefined.

// for (let i = 0; i < 5; i++) {
//   console.log(jonas[i]);
// }

for (let i = 0; i < jonas.length; i++) {
  /// Reading from jonas array
  // console.log(jonas[i], typeof jonas[i]);

  /// Filling types array
  // types[i] = typeof jonas[i];

  /// Push method
  types.push(typeof jonas[i]);
}

// types[0] = "string";
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

/// Continue and Break for loops
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  // this will skip the current iteration if the condition is true.

  console.log(jonas[i], typeof jonas[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == "number") break;
  // this will stop the loop if the condition is true.

  console.log(jonas[i], typeof jonas[i]);
}

/// Assignment[Looping Arrays, Breaking and Continuing]
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

// My Solution
const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
// Jonas Solution
const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);
*/

//// Looping Backwards and Loops in Loops
/*
const jonas = [
  `Jonas`,
  `Schmedtmann`,
  2037 - 1991,
  `teacher`,
  [`Michael`, `Peter`, `Steven`],
  true,
];
// 0, 1, 2, 3, 4
// 4, 3, 2, 1, 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

/// Assignment[Looping Backwards and Loops in Loops]
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// My solution
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
}
// Jonas Solution
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

*/
//// The While Loop
/*
/* <previous for loop example>
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

//<while loop example>
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE : Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// random dice roll example
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
  
/// Assignment[Looping Backwards and Loops in Loops]
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};
const populations = [10, 1441, 332, 83];

// My Previous Solution(for loop)
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// My Solution(while loop)
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
// Jonas Solution
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
*/
// ----------------------- End of Javascript Fundamentals Part 2 ----------------------- (Make sure to return to the coding challenges that are left)

///// Developer Skills & Editor Setup ////
// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
//// Setting up Prettier and VS Code, and installing extensions
const x = 23;
if (x === 23) console.log(23);
const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));

//// Installing Node.js and setting up a Dev Environment
// Using live server extension in VS Code to run the code in the browser
console.log(calcAge(1991));
*/
//// Learning How To Code
// Set a specific, measurable, realistic and time based goal
// Understand the code that you're studying and typing. ALWAYS TYPE THE CODE, no copy and pasting
// After you learn a new feature or concept, use it immediately
// Practicing on your own is the most important thing to do. THIS IS NOT OPTIONAL. Without practice outside of courses, you will not learn how to code.
// Don't be stuck in "tutorial hell"
// Don't get stuck trying to write the perfect code. Just write tons of code, no matter the quality. Clean and efficient code will come in time.
// Embrace the fact that you will never know everything. The JavaScript language is huge and is always changing. Focus on learning the fundamentals and then learn new features as you need them.
// Try not to learn in isolation. Share your goals to make yourself accountable.
// Courses are only the beginner of your journey, the starting point. You are never going to learn everything in a course. You have to practice on your own and learn new things on your own. The course is just the beginning of your journey, not the end.
// Graph goes like this; EVERYTHING IS AWESOME - > CLIFF OF CONFUSION -> Frustration -> PIT OF DESPAIR -> After a long moment of practice and retries -> Back to awesome -> more competence -> JOB READY

/// To sum up
// Study courses : Understand code, take challenges and notes
// Stay motivated! Keep writing lots of code on your own, no matter how bad
// Learn with other people, devs and begineers, and share progress
// Keep challenging yourself, run into lots of problems, and fix them
// Round up your skillset with best practices and tools
// Job ready! (But it never stops)
/// Always remember, you never magically be a web developer

//// How to Think Like a Developer : Become a Problem Solver
/// 4 Steps to Solve a Problem
// <1. Make sure you 100% understand the problem. Ask the right questiios to get a clear picture of the problem.>
// ex) Project Manager : "We need a function that revrses whatever we pass into it."
// - what kind of data will we pass into the function? String? Array? Object? What should be returned? How to recognise whether the argument is a number, a string, or an array?
// <2. Divide and Conquer : Break a big problem into smaller sub-problems and steps.>
// - Check if argument is a number, a string, or an array. Implement reversing a number / a string / an array / and return reversed value.
// <3. Don't be afraid to do as much research as you have to.>
// - Ask google, stackoverflow, mdn docs.
// <4. For bigger problems, write pseudo-code before writing the actual code.>
// 여기서 pseudo-code는 실제 코드가 아니라, 문제를 해결하기 위한 단계들을 자연어로 작성하는 것을 말한다.
// pseudo-code ----------------
// 만약 날씨가 맑으면
//   밖에 나가기
// 아니면
//   집에 있기
// 실제 코드 --------------------
// if (weather === "sunny") {
//   goOutside();
// } else {
//   stayHome();
// }

// Example : Reverse a String
// function reverse(value)
//  if value type !string && !number && !array
//    return "value"
//  if value type == string
//    reverse string
//  if value type == number
//    reverse number
//  if value type == array
//    reverse array

// return reversed value

//// Using Google, StackOverflow and MDN
// PROBLEM 1 : Calculate the Temperature Amplitude
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to calculate max and min temperatures?
// - What is a sensor error? And what to do when it occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max(which is amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
// calcTempAmplitude(temperatures);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2 : Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement the functionality twice? NO! Just merge 2 arrays together

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
//// Debugging with the Console and Breakpoints
/*
const measureKelvin = function () {
  const measurement = {
    type: `temp`,
    unit: `celsius`,

    // C) FIX THE BUG
    // value: prompt(`Degrees celsius`)
    // value: Number(prompt(`Degrees celsius`)),
    value: 10,
  };
  //   console.log(measurement);
  // B) FIND THE BUG
  console.table(measurement);

  //   console.log(measurement.value);10
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());

// - Using the debugger in VS Code

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  // let max = 0;
  // let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;

    debugger;
    // If you put a debugger statement in your code, the execution will stop there and you can then step through the code line by line and inspect variables in the console.
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/
//// Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function `printForecast` which takes in an array `arr` and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1 : [17, 21, 23]
// TEST DATA 2 : [12, 5, -5, 0, 4]

// MY SOLUTION ------------------------------------------------
/*
const printForecast = function (arr) {
  // Making a forecast string with the given array of temperatures
  let forecast = ``;
  // Make a for loop
  for (let i = 0; i < arr.length; i++) {
    // For each element in the array, add a string like "17ºC in 1 day" to the forecast string
    forecast += `...${arr[i]}ºC in ${i + 1} day${i + 1 > 1 ? `s` : ``} `;
  }
  forecast += `...`;
  console.log(forecast);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/

// JONAS SOLUTION ------------------------------------------------
/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// -What is the X days? Answer : index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings need to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// If hardcoded...
// console.log(
//   `... ${data1[0]}ºC in 1 day ... ${data1[1]}ºC in 2 days ... ${data1[2]}ºC in 3 days ...`,
// );
// But if coded properly...

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    // str = str + `${arr[i]}ºC`;
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(`...` + str);
};
printForecast(data1);
printForecast(data2);
*/

//// The Rise of AI Tools (ChatGPT, Copilot, Cursor AI, etc.)
/// The workflow of Using AI for Coding
// - Make sure you 100% understand the problem. Ask questions to get a clear picture
// - Choose AI and give it a very specific prompt and enough context (language, style, etc.)
// AI generates the solution as code
// - Review and test the output solution. Make sure you introduce no bugs into your app
// - Correct or improve the solution, and repeat
// - Integrate the solution into your app

/// Guidelines for safe use of AI
// <BEFORE YOU USE AI>
// - You need to know how to code on your own. Fundamental skills are 100% essential.
// - You need to be able to solve problems on your own.
// - You need to have a very critical thinking (AI code contains a surprising amount of bugs and bad code and errors)
// - You need to have curiosity and joy while coding
// ## Don't use AI without knowing what you're doing. Otherwise AI will turn you into a terrible programmer!
// ## Use AI as an assistant, not a replacement. Save time on repetitive and boring tasks. It's also great for learning!

// <INCORPORATE AI CODE>
// - When you could have written the code yourself
// - When you truly understand the generated code
// - when you have ensured the code is 100% correct
// - When you're not using the code for mission-critical parts of your apps

/// Will AI replace developers and take your job?
// - There's a lot of hype around AI right now. In the past, tools like Dreamweaver, Wordpress, or Wix were supposed to replace web developers.
// - Things will change : a portion of apps will be written by AI. You might write less code in the future, but that's not a bad thing!
// - You will still be needed! You're the one who maintains control and implements the app architecture. You are the one who asks AI to write the code in the first place, reviews it, corrects it, and integrates it into the app.
// - Software developers do a lot more than just writing code: maintain the bigger picture of huge projects / think about software / implement complex design principles / are creative / they collaborate with other developers and cilents
// - AI-generated code is still buggy, and AI is not very good at debugging.
// - The world needs more software than can be built by humans right now.
// - AI will help us, not replace us!

//// Solving CHALLENGE #2 Wih AI
// CODING CHALLENGE #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns;
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA : [7.5, 8, 6.5, 0, 8.5, 4, 0]

Use the Following text on ChatGPT:
I'm building a time tracking application for freelancers. Write a function called analyzeWorkWeek that receives daily work hours for a certain week, and returns an object with the following data:
1. Total hours worked
2. Average daily hours (round to one decimal place)
3. The day with the most hours worked (assume monday is day 0 in the array)
4. Number of days worked (days with more than 0 hours)
5. Whether the week was full-time (worked 35 hours or more)
*/
/*
// Chatgpt personal result:
function analyzeWorkWeek(hours) {
  // 1. Total hours worked
  const totalHours = hours.reduce((sum, day) => sum + day, 0);

  // 2. Average daily hours
  const averageHours = Number((totalHours / hours.length).toFixed(1));

  // 3. Day with the most hours worked
  let maxHours = hours[0];
  let maxDay = 0;

  for (let i = 1; i < hours.length; i++) {
    if (hours[i] > maxHours) {
      maxHours = hours[i];
      maxDay = i;
    }
  }

  // 4. Number of days worked
  const daysWorked = hours.filter(day => day > 0).length;

  // 5. Full-time status
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

// Example usage
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);


// ChatGPT : change maxday to be an actual work day like monday
// ChatGPT changed Result;

function analyzeWorkWeek(hours) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // 1. Total hours worked
  const totalHours = hours.reduce((sum, day) => sum + day, 0);

  // 2. Average daily hours
  const averageHours = Number((totalHours / hours.length).toFixed(1));

  // 3. Day with the most hours worked
  let maxHours = hours[0];
  let busiestDayIndex = 0;

  for (let i = 1; i < hours.length; i++) {
    if (hours[i] > maxHours) {
      maxHours = hours[i];
      busiestDayIndex = i;
    }
  }

  const maxDay = days[busiestDayIndex];

  // 4. Number of days worked
  const daysWorked = hours.filter(day => day > 0).length;

  // 5. Full-time status
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);

// ChatGPT : second the function should require the input array to have exactly 7 days. update the function accordingly
// Third ChatGPT changed resuit;

function analyzeWorkWeek(hours) {
  // Validate input
  if (!Array.isArray(hours) || hours.length !== 7) {
    throw new Error('Input must be an array with exactly 7 days.');
  }

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // 1. Total hours worked
  const totalHours = hours.reduce((sum, day) => sum + day, 0);

  // 2. Average daily hours
  const averageHours = Number((totalHours / hours.length).toFixed(1));

  // 3. Day with the most hours worked
  let maxHours = hours[0];
  let busiestDayIndex = 0;

  for (let i = 1; i < hours.length; i++) {
    if (hours[i] > maxHours) {
      maxHours = hours[i];
      busiestDayIndex = i;
    }
  }

  const maxDay = days[busiestDayIndex];

  // 4. Number of days worked
  const daysWorked = hours.filter(day => day > 0).length;

  // 5. Full-time status
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

// Example usage
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);
*/
///// HTML & CSS Crash Course
//// Basic HTML Structure and Elements
/*
<!-- <html>
  <head>
    <title>Learning HTML & CSS</title>
  </head>

  <body>
    <h1>JavaScript is fun, but so is HTML & CSS!</h1>
    <p>
      You can learn Javascript without HTML and CSS, but for DOM manipulation
      it's useful to have some basic ideas of HTML & CSS.
    </p>
    <h6>Another Heading</h6>
    <p>Just another paragraph</p>
  </body>
</html> -->

<!-- Easy way to make HTML in VS code 
 -> !(exclamination mark) + tab, and the following shows up -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html> -->

<!-- And so you can use it in the structure as following; -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learning HTML & CSS</title>
  </head>
  <body>
    <h1>JavaScript is fun, but so is HTML & CSS!</h1>
    <p>
      You can learn Javascript without HTML and CSS, but for DOM manipulation
      it's useful to have some basic ideas of HTML & CSS.
    </p>
    <h2>Another Heading</h2>
    <p>Just another paragraph</p>
  </body>
</html>

//// Attributes, Classes and IDs

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learning HTML & CSS</title>
  </head>
  <body>
    <h1>JavaScript is fun, but so is HTML & CSS!</h1>
    <p class="first">
      You can learn Javascript without HTML and CSS, but for DOM manipulation
      it's useful to have some basic ideas of HTML & CSS. You can learn more
      about it
      <a
        href="https://www.udemy.com/user/jonasschmedtmann/?srsltid=AfmBOorOuUYodqveD_uDY9ZS-nZV2cNEWGx7N1rgchI3KygPZndB9NSr"
        >on Udemy</a
      >.
    </p>
    <h2>Another Heading</h2>
    <p class="second">Just another paragraph</p>
    <img
      id="course-image"
      src="https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg"
    />

    <form id="your-name">
      <h2>Your name here</h2>
      <p>Please fill in this form :)</p>

      <input type="text" placeholder="Your name" />
      <button>OK!</button>
    </form>
  </body>
</html>
*/
//// Basic Styling with CSS

/// index.html
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//     <link href="style.css" rel="stylesheet" />
//     <title>Learning HTML & CSS</title>
//   </head>
//   <body>
//     <h1>JavaScript is fun, but so is HTML & CSS!</h1>
//     <p class="first">
//       You can learn Javascript without HTML and CSS, but for DOM manipulation
//       it's useful to have some basic ideas of HTML & CSS. You can learn more
//       about it
//       <a
//         href="https://www.udemy.com/user/jonasschmedtmann/?srsltid=AfmBOorOuUYodqveD_uDY9ZS-nZV2cNEWGx7N1rgchI3KygPZndB9NSr"
//         >on Udemy</a
//       >.
//     </p>
//     <h2>Another Heading</h2>
//     <p class="second">Just another paragraph</p>
//     <img
//       id="course-image"
//       src="https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg"
//     />

//     <form id="your-name">
//       <h2>Your name here</h2>
//       <p class="first">Please fill in this form :)</p>

//       <input type="text" placeholder="Your name" />
//       <button>OK!</button>
//     </form>
//   </body>
// </html>

/// style.css
// body {
//   background-color: hsl(60, 11%, 85%);
//   font-family: Arial;
//   font-size: 20px;
// }

// h1 {
//   font-size: 40px;
// }

// .first {
//   color: red;
// }
// /* . is for the class, and the "first" is the class name */
// #your-name {
//   background-color: hsl(51, 98%, 65%);
//   border: 5px solid #444;
// }
// /* # is for id */

//// Introduction to the CSS Box Model
/// The CSS BOX MODEL
// Content : text, images, etc
// Padding : transparent area around the content, inside the box;
// Border: goes around the padding and the content;
// Margin : Space between boxes;

// index.html
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//     <link href="style.css" rel="stylesheet" />
//     <title>Learning HTML & CSS</title>
//   </head>
//   <body>
//     <h1>JavaScript is fun, but so is HTML & CSS!</h1>
//     <p class="first">
//       You can learn Javascript without HTML and CSS, but for DOM manipulation
//       it's useful to have some basic ideas of HTML & CSS. You can learn more
//       about it
//       <a
//         href="https://www.udemy.com/user/jonasschmedtmann/?srsltid=AfmBOorOuUYodqveD_uDY9ZS-nZV2cNEWGx7N1rgchI3KygPZndB9NSr"
//         >on Udemy</a
//       >.
//     </p>
//     <h2>Another Heading</h2>
//     <p class="second">Just another paragraph</p>
//     <img
//       id="course-image"
//       src="https://img-c.udemycdn.com/course/480x270/437398_46c3_10.jpg"
//     />

//     <form id="your-name">
//       <h2>Your name here</h2>
//       <p class="first">Please fill in this form :)</p>

//       <input type="text" placeholder="Your name" />
//       <button>OK!</button>
//     </form>
//   </body>
// </html>

// style.css
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// /* is for selecting all*/

// body {
//   background-color: hsl(60, 11%, 85%);
//   font-family: Arial;
//   font-size: 20px;
//   padding: 50px;
// }

// h1 {
//   font-size: 35px;
//   margin-bottom: 25px;
// }

// h2 {
//   margin-bottom: 20px;
//   text-align: center;
// }

// p {
//   margin-bottom: 20px;
// }
// /* p selector is a way to select all paragraph elements regardless of any class names */
// .first {
//   color: red;
// }
// /* . is for the class, and the "first" is the class name */
// #your-name {
//   background-color: hsl(51, 98%, 65%);
//   border: 5px solid #444;
//   width: 400px;
//   padding: 25px;
//   margin-top: 30px;
// }
// /* # is for id */

// input,
// button {
//   padding: 10px;
//   font-size: 16px;
// }

// a {
//   background-color: yellowgreen;
// }

// #course-image {
//   width: 200px;
// }

// #your-name h2 {
//   color: olivedrab;
// }

///// JavaScript in the Browser : DOM and Events  ----------------------------------------------------
//// PROJECT #1 : Guess My Number!

//// What's the DOM and DOM Manipulation
// DOM (Document Object Model)
// DOM is a structured representation of HTML documents. Allows Javascript to access HTML elements and styles to manipulate them.
// "Manipulating" means to change text, HTML attributes, and even css styles
// DOM은 웹 페이지의 구조를 객체 트리 형태로 표현하는 모델입니다. HTML 문서는 노드와 요소로 구성되며, 각 노드는 JavaScript를 통해 접근하고 조작할 수 있습니다. 이는 웹 개발자들이 동적으로 웹 페이지의 내용을 변경하거나 인터페이스를 상호 작용하게 만듭니다.

// DOM 트리 구조
// DOM은 HTML 문서를 트리 형태로 표현합니다. 각 노드는 다음과 같은 속성을 가집니다:

// 노드: 요소, 텍스트, 특성 등의 기본 단위.
// 요소 (Element): HTML 태그와 그 내용.
// 텍스트 (Text): 요소 내부의 텍스트 내용.
// 특성 (Attribute): 요소에 추가된 속성을 나타냅니다.

// HTML - head or body - title or section - <p> or <img> or <a> etc....

/// DOM ! == Javascript.
// DOM Methods and Properties for DOM Manipulation is not part of JS.
// But it can interact wtih Javascript, as other WEB APIs like Timers and Fetch etc

//// Selecting and Manipulating Elements
/// script.js

// 'use strict';

// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

//// Handling Click Events
/*
const x = function () {
  console.log(23);
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  // console.log(document.querySelector(`.guess`).value);
  // document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔️No number!`;
  }
});
*/
//// Implementing the Game Logic
/*
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔️No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
    }
  }
});

*/
//// Manipulating CSS Styles
/*
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔️No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
    }
  }
});

*/
//// CHALLENGE #1
/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the `again` class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/
// My solution
/*
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
*/
// My solution's problems - despite the code the score number doesn't reset -> the reason for it is because it's set in const, not let
// Plus I have to recreate the secretNumber in the again function
// My final Solution;
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔️No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
*/

//// Implementing High Scores
// // overwriting highscore
//   if (score > highscore) {
//     highscore = score;
//     document.querySelector(`.highscore`).textContent = highscore;
//   }

/// Putting the highscore code into the previous code
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔️No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // overwriting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
*/

//// Refactoring Our Code: The DRY Principle
/// DRY : Don't Repeat Yourself Principle
/// Refactoring : improving the code without changing its functionality
//// Before Refactoring the code;
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔️No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // overwriting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

*/
/// After Refactoring the code;
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔️No number!`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // overwriting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈Too high!` : `📉Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💥You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }

    //   // When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(`.message`).textContent = `📈Too high!`;
    //     score--;
    //     document.querySelector(`.score`).textContent = score;
    //   } else {
    //     document.querySelector(`.message`).textContent = `💥You lost the game!`;
    //     document.querySelector(`.score`).textContent = 0;
    //   }
    //   // when guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector(`.message`).textContent = `📉Too low!`;
    //     score--;
    //     document.querySelector(`.score`).textContent = score;
    //   } else {
    //     document.querySelector(`.message`).textContent = `💥You lost the game!`;
    //     document.querySelector(`.score`).textContent = 0;
    //   }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
*/
/// End of PROJECT #1 : Guess My Number!

//// PROJECT #2 : Modal Window
/*

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
// console.log(modal);
// console.log(overlay);
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
*/
//// Working With Classes
/*
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
// console.log(modal);
// console.log(overlay);
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, function () {
    console.log(`Button clicked`);
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
  });

btnCloseModal.addEventListener(`click`, function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});

overlay.addEventListener(`click`, function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});
*/
/// After DRYing the code;
/*

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = function () {
  console.log(`Button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

 */
//// Handling an "ESC" Keypress Event
/*
'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = function () {
  console.log(`Button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  console.log(e.key);

  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
*/

//// End of PROJECT #2 : Modal Window

//// PROJECT #3 : PIG GAME
/*
// Selecting elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
// These are the exactly the same, but the first one is more recommended because it is more flexible and can be used in other situations, while the second one is only for selecting elements by ID.
const diceEl = document.querySelector(`.dice`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);
*/
//// Rolling the Dice
/*
'use strict';

// Selecting elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
*/

//// Switching the Active Player
/*
'use strict';

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle(`player-active`);
    player1El.classList.toggle(`player-active`);
  }
});
*/
//// Holding Current Score
/*
'use strict';

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

*/
//// Resetting the Game
/*
'use strict';

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

let scores, currentScore, activePlayer, playing;

// Starting conditions
// This will be used as a function that is used for the very first time & when the game gets resetted
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add(`hidden`);

  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, init);
*/
///// End of PROJECT #3 : PIG GAME -------------------------------

///// Section 8 : How JavaScript Works Behind the Scenes --------------------------------------------------------------------------------------------------------

//// An High-Level Overview of JavaScript
/// Revisiting the JavaScript Language

/// JavaScript is a high-level, prototype-based, multi-paradigm interpreted or just-in-time dybanuc single-threaded garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

/// High-level
// -> Unlike C+ which developers have to manage resources manually, high level langauges like JavaScript (including Python) does it automatically, so developers can focus on the logic of the program rather than the low-level details of memory management and other system resources.
// 고급 언어는 개발자가 하드웨어와 직접 상호작용하지 않고 프로그램의 논리에 집중할 수 있게 함. C++와 같은 언어에서는 메모리 관리를 개발자가 직접 처리해야 하지만, JavaScript는 이러한 작업을 자동으로 수행하므로 개발자는 프로그램의 논리에 집중할 수 있음.

/// Garbage-collected
// -> JavaScript automatically manages memory allocation and deallocation. It uses a garbage collector to identify and free up memory that is no longer in use, preventing memory leaks and improving performance.
// JavaScript는 사용하지 않는 메모리를 자동으로 정리하여 메모리 누수를 방지하고 성능을 향상시킴.

/// Interpreted or just-in-time compiled
// -> JavaScript can be interpreted at runtime or compiled to machine code at runtime for better performance.
// JavaScript는 실행 시 해석되거나 코드가 실행되는 동안 컴파일될 수 있어 코드의 성능을 개선하면서도 실행 시점에서 필요한 컴파일을 수행할 수 있게 함.

/// Multi-paradigm
// -> A paradigm is an approach and mindset of structuring code, which will direct your coding style and technique.
// -> Procedural, Object Oriented(OOP), Functioning Programming(FP)
// -> Paradigms could be Imperative vs Declarative etc
// 패러다임은 코드를 구조화하는 방식으로, JavaScript는 절차적, 객체 지향 프로그래밍, 함수형 프로그래밍 등 다양한 패러다임을 지원함.

/// Prototype-based object-oriented
// -> JavaScript uses prototypes for inheritance, allowing objects to inherit properties and methods from other objects. This is different from class-based inheritance used in languages like Java or C++.
// JavaScript는 프로토타입을 사용하여 객체 간 상속을 구현함. Java나 C++와 같은 클래스 기반 상속과는 달리, JavaScript에서는 객체가 다른 객체로부터 속성과 메서드를 상속받을 수 있음.

/// First-class functions
// -> Functions in JavaScript are treated as variables. We can pass them into other functions, and return them from functions.
// 일급 함수 -> JavaScript에서 함수는 변수처럼 취급되며, 함수를 다른 함수에 인수로 전달하거나 함수에서 반환할 수 있음. 이걸로 함수를 일급 객체로 다루어 콜백, 고차함수 등의 고급 기능을 활용할 수 있음.

/// Dynamic
// -> Dynamically typed means that you don't have to specify the type of a variable when you declare it. The type is determined at runtime based on the value assigned to the variable. This allows for more flexibility in coding, but can also lead to unexpected behavior if not used carefully.
// 동적 -> 동적으로 타이핑된 언어는 변수 선언 시 타입을 지정하지 않아도 됨. 대신 변수에 할당된 값의 타입에 따라 결정되나, 코드 작성 시 유연성이 높아지는 대신 타입 오류 및 예기치 못한 버그 발생 가능성이 높음. (Lecturer 말로는 JavaScript 베이스지만 작성할 때마다 type를 쓰는 언어는 TypeScript를 쓰면 된다고 함)

/// Single-threaded & Non-blocking event loop
// -> Concurrency model is how the Javascript engine handles multiple tasks happening at the same time. The reason for this is because Javascript runs in one single thread- which means it can do only one thing at a time. But if it's based about a long running task, it would block a single thread. But since we want non-blocking behavior, to achieve that Javascript uses an event loop which takes long running tasks, executes them in the background and puts them back in the main thread once they're done.
// Javascript 엔진은 한번에 한 작업만 수행 가능하며, 장시간 실행되는 작업이 있으면 단일 스레드가 차단될 수 있음. 이를 해결하기 위해 JavaScript는 이벤트 루프를 사용하여 장시간 실행되는 작업을 백그라운드에서 처리하고 완료되면 메인 스레드로 다시 가져와 비동기적으로 처리함.

//// The Javascript Engine and Runtime ----------------------------------------------------------------------

/// JS Engine :  Program that executes the JavaScript code

/// Computer Science Sidenote : Compilation vs Interpretation
// Compilation : Entire code is coverted into machine code at once, and written to a binary file that can be executed by a computer.
// Interpretation : Interpreter runs through the source code and executes it line by line.

// Javascript used to be a purely interpreted language, but it used to be very slow. Today low performance is not acceptable, so modern JavaScript engines use a combination of both compilation and interpretation to achieve better performance. They compile the code to machine code at runtime using just-in-time (JIT) compilation.
// Just-in-time compilation : Entire code is converted into machine code at once, then executed immediately.
// Js Engine works like ; Parsing - > Compilation(AST, Just-in-time compilation) -> Execution(happens in Call Stack) -> Optimation(during execution) -> back to compilation and so on.

/// The Bigger Picture : JavaScript Runtime
// JavaScript runtime is the environment in which JavaScript code is executed. It consists of the JavaScript engine and other components that provide additional functionality, such as the Web APIs, the event loop, and the callback queue. The runtime allows JavaScript to interact with the browser and perform tasks like manipulating the DOM, making network requests, and handling user events.
// Web APIs include DOM, Timers, Fetch API etc. These are not part of the JavaScript language itself, but are provided by the environment (like browsers) in which JavaScript runs. They allow JavaScript to perform tasks that are not natively supported by the language, such as manipulating the DOM, making network requests, and handling user events.
// Callback queue is a queue of callback functions that are waiting to be executed. When an asynchronous operation is completed, its callback function is added to the callback queue. The event loop continuously checks the call stack and the callback queue, and if the call stack is empty, it takes the first callback from the queue and pushes it onto the call stack for execution. (click, timer, data etc)

//// Execution Contexts and The Call Stack  ----------------------------------------------------------------------

/// Execution Context : Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed.
// Exactly one global execution context (EC) : Default context, created for code that is not inside any function (top-level)
// One execution context per function : For each function call, a new execution context is created.

/// Execution Context In Detail
// 1. Variable Environment : Where all the variables, functions and parameters are stored. This is where the JavaScript engine looks for variable values when they are accessed in the code.
// - let, const, and var declarations
// - Functions
// - arguments object
// 2. Scope Chain : A mechanism that allows the JavaScript engine to resolve variable names in nested functions. It consists of the current execution context's variable environment and the variable environments of all its parent execution contexts.
// 3. this keyword
// (Generated during `creation phase,` right before execution)
/// Call Stack : A data structure that keeps track of the execution contexts in a LIFO (Last In First Out) order. When a function is called, its execution context is pushed onto the call stack, and when the function finishes executing, its execution context is popped off the stack.
// - "place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution.

//// Scope and The Scope Chain
/// Scoping and Scope in JavaScript : Concepts
// Scoping : How our program's variables are organized and accessed. "Where do veariables live?" or "Where can we access a certain variable, and where not?"
// 스코핑 : 스코핑은 프로그램 내의 변수가 어떻게 정의되고, 어디서 접근할 수 있는지를 결정하는 개념이다.

// Lexical scoping : Scoping is controlled by placement of functions and blocks in the code;
// 문법적 스코핑 :  JavaScript는 문법적 스코핑(Lexical scoping)를 사용하며, 이는 함수나 블록 내에서 변수가 정의되는 위치에 따라 그 접근 가능한 범위가 결정됨.

// Scope : Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope, and block scope;

// 스코프는 변수가 선언된 특정 공간이나 환경을 의미하며, Javascript에서는 세 가지로 구분할 수 있음.

/// The 3 Types of Scoep;
// Global Scope (전역 스코프)
// - Outside of any function or block
// - Variables declared in global scope are accessible everywhere
// - 함수나 블록 외부에서 선언된 변수는 전역 스코프에 속한다.
// - 페이지 전체에서 접근할 수 있으며, 중복된 변수 선언이 발생하면 덮어씌워짐.
// - var, let, const 키워드로 선언된 변수 중 전역 스코프에 있는 경우 해당 변수는 페이지의 어느 곳에서든 접근할 수 있음.

// Function Scope (함수 스코프)
// - Variables are accessible only inside the function, not outside
// - Also called as the "local scope"
// - 함수 내부에서 선언된 변수는 해당 함수의 스코프에 속함.
// - 함수 내부에서 선언된 변수는 해당 함수 외부에서는 접근할 수 없음.
// - var 키워드로 선언된 변수는 함수 스코프에 속함.

// Block Scope (블록 스코프)
// - Variables are accessible only inside the block, not outside (block scoped)
// - However, this only applies to let and const variables
// - Functions are also block scoped (only in strict mode)
// - 블록 ( {} ) 내부에서 선언된 변수는 해당 블록의 스코프에 속함.
// - let 과 const 키워드로 선언된 변수는 블록 스코프에 해당됨.
// - for 문이나 if 문 내부에서 선언된 변수는 해당 블록 외부에서는 접근 불가.

/// Scope Chain (스코프 체인)
// 스코프 체인은 JavaScript 엔진이 변수를 해결할 때 사용하는 메커니즘으로, 현재 실행 컨텍스트의 변수 환경에서 변수를 찾지 못하면 부모 실행 컨텍스트의 변수 환경으로 이동하여 다시 검색하는 체인 구조를 통해 변수에 접근할 수 있음.
// 예로 들어 함수 내부에서 선언된 변수는 해당 함수의 스코프에 있지만, 그 함수 내부에 또 다른 함수가 있을 때, 그 안에서 선언된 변수는 해당 내부 함수의 스코프에 있음. 이때 내부 함수에서 부모 함수의 변수를 접근하려면 스코프 체인이 동작하여 부모 함수의 변수 환경을 찾아가게 됨.

// EXAMPLE ----------------------------------
/*
const myName = `Jonas`;      

function first() {
  const age = 30;     

  if (age >= 30) {
    //true
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = `teacher`;    
    console.log(`${myName} is a ${age}-old ${job}}`);
  }

  second();
}

first();
*/
//  ----------------------------------
// Global Scope (전역 스코프)
// - myName 변수가 정의되어 있음.
// - myName = "Jonas"라는 선언이 있음

// first() 함수의 스코프
// - age = 30 이라는 변수가 정의됨.
// - if (age >= 30) 조건문 안에서 decade = 3; 과 millenial = true; 라는 변수가 정의됨.

// second() 함수의 스코프
// - job = `teacher`라는 변수가 정의됨.
// - console.log(${myName} is a ${age}-old ${job}); 라는 코드가 실행되며, 여기서 myName, age, job이 필요함.

// Scope Chain은 함수 내에서 변수를 찾을 때, 현재 스코프를 먼저 검색하고, 그 다음으로 외부 스코프를 검색한다. 이 경우 second() 함수는 first () 함수의 스코프를 먼저 검색하고, 그 다음으로 전역 스코프를 검색한다.

// 따라서 second() 함수에서 다음과 같이 myName, age, job을 찾을 수 있음;
// - myName = `Jonas`는 전역 스코프에서
// - age = 30은 first() 함수의 스코프에서
// - job = `teacher`는 second() 함수의 스코프에서

/// Scope Chain VS Call Stack

// Call Stack (콜 스택)은 함수 호출의 순서를 추적하고 관리하는 데이터 구조.
// - 콜 스택은 함수 호출이 발생할 때마다 새로운 실행 컨텍스트를 생성하고, 해당 컨텍스트를 스택에 쌓는다.
// - 함수가 실행을 완료하면 해당 컨텍스트는 스택에서 제거된다.
// 작동방식
// - 함수가 호출되면 해당 함수의 실행 컨텍스트가 콜 스택에 푸시된다.
// - 함수 내부에서 다른 함수가 호출되면 새로운 실행 컨텍스트가 생성되어 콜 스택에 푸시된다.
// - 함수의 실행이 완료되면 해당 컨텍스트가 콜 스택에서 팝된다.
// - 이 과정이 계속되며 가장 최근에 호출된 함수가 가장 위로 위치된다.

// 차이점
// - 스코프 체인은 변수와 함수에 대한 접근성을 결정 VS 콜스택은 함수 호출의 순서를 추적하고 관리
// - 스코프 체인은 현재 실행 컨텍스트에서 변수를 찾지 못할 때 부모 실행 컨텍스트의 스코프로 순차적으로 검색함 VS 콜 스택은 함수 호출이 발생할 때마다 새로운 실행 컨텍스트를 생성하고, 해당 컨텍스트를 스택에 쌓고 함수가 완료되면 해당 컨텍스트를 스택에서 제거함.
// - 스코프 체인은 연결 리스트 형태로, 현재 실행 컨텍스트에서 부모 실행 컨텍스트를 가리키는 링크가 연결됨 VS 콜 스택은 LIFO(Last In First Out) 형태의 스택으로 가장 최근에 호출된 함수가 가장 위로 위치함.

/// SUMMARY
// - Scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?"
// - There are 3 types of scope in JavaScript : The global scope, scopes defined by functions, and scopes defined by blocks;
// - Only let and const variables are block-scoped. Variables declared with var end up in ther closest function scope;
// - In JavaScript we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written;
// - Every scope always has access to all the variables from all its outer scopes. This is the scope chain.
// - When a variable is not in the current scope, the engine looks up in the scope chain until it finds the varaible it's looking for. This is called "variable lookup";
// - The scope chain is a one-way street; a scope will never ever have access to the variables of an inner scope;
// - The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes;
// - The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all.

//// 나만의 요약
/*
Scoping 요약 정리

1. Scoping이란?
"변수가 어디에 존재하는가?" "어디서 접근 가능하고, 어디서 불가능한가?"를 결정하는 규칙.

2. JS의 3가지 Scope
Global Scope → 함수 밖에 선언된 변수. 어디서든 접근 가능
Function Scope → 함수 안에 선언된 변수. 그 함수 안에서만 접근 가능
Block Scope → {} 안에 선언된 변수. let, const만 해당

const a = 1;        // Global scope

function fn() {
  const b = 2;      // Function scope
  
  if (true) {
    const c = 3;    // Block scope - let/const만
    var d = 4;      // var는 블록 무시 → function scope로 올라감
  }
  console.log(d);   // ✅ var는 접근 가능
  console.log(c);   // ❌ const는 블록 밖에서 접근 불가
}


3. Lexical Scoping
Scope는 함수가 호출된 위치가 아니라 작성된 위치로 결정됨.

const a = 1;

function outer() {
  const b = 2;
  function inner() {
    console.log(a); // ✅ 작성 위치 기준으로 바깥인 Global 접근 가능
    console.log(b); // ✅ 작성 위치 기준으로 바깥인 outer 접근 가능
  }
}


4. Scope Chain
모든 scope는 바깥 scope의 변수에 접근 가능함.
inner → outer → Global


5. Scope Chain은 단방향
바깥 → 안쪽은 절대 안됨.
javascriptfunction outer() {
  function inner() {
    const c = 3;
  }
  console.log(c); // ❌ outer는 inner 안을 못 봄
}

6. Scope Chain과 Call Stack은 무관
Scope Chain은 코드 작성 위치로만 결정되며, 함수가 어떤 순서로 호출됐는지는 전혀 상관없음

전체 한 줄 요약
Scoping - 변수 접근 가능 범위 규칙
Lexical Scoping - 작성 위치가 기준
Scope Chain - 안에서 바깥으로 변수 탐색
Variable Lookup - 없으면 바깥으로 올라가며 찾기
단방향 - 바깥 -> 안쪽 접근 불가


*/
//// Scoping in Practice
/*
'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = `Steven`; // This will work since Javascript tries to look for the variable name first in the same scope block. And this will priotise this one since it's in the same scope. (so if this code is active the console will print out Steven instead of Jonas)
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassigning outer scope's variable
      //  output = `NEW OUTPUT!`; // This manipulates the existing variable inside of the child scope(inner scope) However if this should be possible the same variable need to be defined not as const(like the top).
      const output = `NEW OUTPUT!`; // However because we defined the new variable with the same name, this will not affect the previous output anymore thus printing out the original output.
    }
    // console.log(str); // This wouldn't work, because const and let variables are block scoped which means they're only available inside the block.
    console.log(millenial); // This works since it's a var (var variables are function scoped, so they ignore the block.)
    // console.log(add(2, 3)); // This wouldn't work because the code's currently in "strict mode", in which makes the function block scoped. if I turn off strict mode it will work.
    console.log(output); //
  }
  printAge();

  return age;
}

const firstName = `Jonas`;
calcAge(1991);
// console.log(age); // This wouldn't work since the scope chain is a one way street, so only the inner scope can have access to the outer scope, not the other way around.
// printAge(); // The same as this one.

// This is the reason why it's okay to have many functions with the exact same parameter names, in the same way it's not a problem to have functions wit the same variable names inside of them.



/// 방금 강의내용 요약 정리;
const firstName = 'Steven'
✅ JS는 변수를 찾을 때 현재 스코프 먼저 찾고, 없으면 바깥으로 올라감. if 블록 안에 firstName이 있으니까 Jonas 대신 Steven이 출력됨.

output = 'NEW OUTPUT!'
✅ output은 const가 아니라 let이라서 재할당 가능함. 내부 스코프에서 바깥 스코프 변수를 재할당하는 것.

const output = 'NEW OUTPUT!'
✅ 바깥 output을 건드리는 게 아니라 같은 이름의 새 변수를 만든 것. 그러므로 바깥 output은 그대로임.

console.log(str) 에러
✅ const, let은 블록 스코프라 if {} 밖에서 접근 불가.

console.log(millenial) 작동
✅ var는 블록 스코프를 무시하고 함수 스코프로 올라감. if {} 안에서 선언해도 printAge 함수 전체에서 접근 가능함

console.log(add(2, 3)) strict mode에서 에러
✅ strict mode에서는 함수 선언도 블록 스코프로 취급됨. if {} 밖에서 add 접근 불가.

마지막 주석들 (age, printAge 접근 불가)
✅ Scope Chain은 단방향이라 바깥에서 안쪽 변수/함수에 접근 못함.
 */

//// Variable Environment : Hoisting and The TDZ -----------------------------
/*
/// Hoisting in JavaScript
// Hoisting : Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifed to the top of their scope."
// Hoisting은 JavaScript에서 변수나 함수를 선언하기 전에 코드에서 사용할 수 있도록 하는 기능.
// - 코드가 실행되기 전에 JS가 먼저 변수/함수 선언을 쭉 훑어보고 Variable Environment에 등록해두는 것. 그래서 선언보다 위에서 사용이 가능해지는 것처럼 보임.
// - Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.
// function delclarations -> HOISTED? YES /  INITIAL VALUE - Actual function / SCOPE - Block
// 함수 선언 : 함수 선언은 코드의 시작 부분에서부터 사용 가능하게 만듦.
// 예시) -------
// 선언 전에 호출해도 작동
greet(); // ✅ "Hello"

function greet() {
  console.log("Hello");
}
//---------------

// - 호이스팅 됨 + 실제 함수 통째로 등록됨. 그래서 선언 전에 쓰는 것이 가능.
//
//
// var variables -> HOISTED? YES / INITIAL VALUE - undefined / SCOPE - Function
// var 변수 선언 : var로 선언된 변수는 코드의 시작 부분에서부터 사용 가능하게 만듦.
// 예시) --------
console.log(x); // undefined (에러 아님!)
var x = 10;
console.log(x); // 10
//---------------
// - 호이스팅은 되는데 값은 undefined로 등록됨. 선언 전에 쓰면 에러는 안나지만 undefined가 나와서 버그 찾기가 힘듦. (고로 실질적으로는 안 쓰는 편)
//
//
// let and const variables -> HOISTED? NO / INITIAL VALUE - <uninitialized>, TDZ / SCOPE - Block
// let & const 변수 선언 : let나 const로 선언된 변수는 위와 다르게 불가능함. 이 경우 코드가 실행되기 전에 변수를 선언하지 않으면 에러가 발생함.
// 예시) --------
console.log(x); // ❌ ReferenceError
const x = 10;
//---------------

// - 기술적으로 호이스팅이 되긴 하나 TDZ(Temporal Dead Zone) 때문에 선언 전에 접근하면 에러가 남.
// TDZ : 변수가 선언된 줄에 도달하기 전까지 접근 금지 구간
// 예시) --------
코드 시작
     ↕  ← TDZ (접근하면 에러)
const x = 10;  ← 여기서부터 접근 가능
//---------------
// - var처럼 undefined로 넘어가는 것보다 에러를 바로 터트려줘서 오히려 버그 찾기가 쉬움

// function expressions and arrows -> Depends if using var or let / const
// 예시) ---------
// var로 선언하면
console.log(add); // undefined
var add = function(a, b) { return a + b; }

// const/let으로 선언하면
console.log(add); // ❌ ReferenceError
const add = function(a, b) { return a + b; }
//---------------
// - 함수가 아니라 변수로 취급됨. 그래서 var / let / const 규칙을 그대로 따름.

*/
// Hoisting
// - Using functions before actual declaration;
// - var hoisting is just a byproduct

// TDZ reason
// - Makes it easier to avoid and catch errors : accessing variables before declaration is bad practice and should be avoided
// - Makes const variables actually work

//// Hoisting and TDZ in Practice -----------------------------------
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = `Jonas`;
let job = `teacher`;
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;


// Example

console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//// The this Keyword ---------------------------------------
/// How the this Keyword works
// this keyword/variable : Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used.
// "this" is Not static. It depends on how the function is called, and its value is only assigned when the function is actually called.
// - Method 👉 this = <Object that is calling the method>
// - Simple function call 👉 this = undefined (In strict mode! Otherwise : window (in the browser))
// - Arrow functions 👉 this = <this of surrounding function (lexical this)>
// - Event listener 👉 this = <DOM element that the handler is attached to>
// - new, call, apply, bind 👉 <later in the course>

// <this does NOT point to the function itself, but also NOT the its variable environment!>

//// The this Keyword in Practice ---------------------------------------
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);
// shows undefined.

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
// This will show an error called undefined.

*/
//// Regular Functions VS Arrow Functions ---------------------
/*

var firstName = `Matilda`;

const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    /// Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    /// Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    (console.log(this), console.log(`Hey ${this.firstName}`));
  },
};
jonas.greet();
// console.log(this.firstName);
jonas.calcAge();

/// 부연설명
this 키워드
- greet(화살표, 객체 안)  => 전역 window -> Matilda
- calcAge (일반 메서드) => jonas 객체
- isMillenial (화살표, calcAge 안) => calcAge의 this 상속 -> jonas

// 즉 일반함수는 자신의 this, argument 가 존재하나 
// 화살표 함수는 this는 바깥에서 가져오거나 argument 는 존재하지 않음


/// Arguments keyword ---------
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);
// this will still be working

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
// this will cause an error

*/

//// Memory Management : Primitives vs Objects ---------------------
/// The Memory Lifecycle in JavaScript (자바스크립트의 메모리 생애주기) -------
// "How and where are variables created in JavaScript?"
// Unlike other languages, memory is automatically managed by JavaScriopt behind the scenes
// Every value we create in JavaScript goes through a memory lifecycle

// 1) Allocate Memory (메모리 할당)
// - Whenever we assign a value to a new variable, the engine automatically allocates (reserves) a piece of memory to store the value
// ex) let temp = 23.7
// 변수를 선언하는 순간, JS 엔진이 자동으로 메모리 공간을 예약하고 값을 저장함. (C+언어는 반면에 개발자가 직접 메모리 할당 및 해제를 수시로 해야 됨 -> 그에 따른 메모리 누수 위험 높음)

// 2) Use Memory (메모리 사용)
// - While code is running, the value is written, read, and updated in the allocated piece of memory
// ex) temp = temp + 5
//     round(temp)
// 코드가 실행되는 동안 값을 읽고 쓰고 수정하는 단계로, 일반적으로 코딩할 때 변수 쓰는 단계임.

// 3) Release Memory
// - When no longer needed, the value is deleted from memory to free up resources. The released memory is used for new values
// ex) temp is removed from memory
// 값이 더 이상 필요 없어지면 JS 엔진이 자동으로 메모리를 회수함. (Garbage Collector)

/// Where is Memory Allocated? ------
// Primitives : Number, String, Boolean, Undefined, Null, Symbol, BigInt
// References to objects
// => These will be stored in the "Call Stack"

// Objects : Object Literals, Arrays, Functions, etc
// => These will be stored in the "Heap"

// 물론 세세하게 따지면 예외사항은 존재함.

/// Understanding Object References -----

// example)
/*
const name = `Jonas`;
const age = calcAge(1991);
let newAge = age;
newAge++;

const location = {
  city: `Faro`,
  country: `Portugal`,
};

const newLocation = location;
newLocation.city = `Lisbon`;

console.log(location);

function calcAge(birthYear) {
  const now = 2037;
  const x = now - birthYear;
  return x;
}
*/

// CALLSTACK has the following;

// <calcAge() EC> -----
// - now = 2037
// - x = 46

// <global EC> ----
// - name = "Jonas"
// - age = 46
// - newAge = 47 (newAge++ 때문)
// - location = (#1 HEAP으로부터 reference를 통해서 가져옴)
// - newLocation = (reference를 카피해서 가져옴. 위 location과 동일.)
// - calcAge = (#2 HEAP으로부터 reference 가져옴)

// HEAP has the following;
// #1)
// city = "Faro" -> "Lisbon" (기존 location object를 변경)
// country = "Portugal"

// #2)
// function calcAge(birthYEar) {
//   const now = 2037;
//   const x = now - birthYEar;
//   return x;
// }

/// 개인정리용
/// Primitive - 값 자체를 복사함
// -> 위 내용처럼 Call Stack 값 자체에 저장되기 때문에 복사하면 완전히 다른 별개의 값이 생김.
// -> newAge를 바꿔도 age는 영향이 없음.

/// Object - reference(참조)를 복사
// -> Call Stack에는 "Heap 주소(reference)"만 저장됨.
// -> newLocation = location 처럼 할 시 같은 reference를 공유하게 됨
// -> 같은 객체를 가리키고 있으므로 newLocation.city를 바꾸면 location.city도 함께 바뀜.
