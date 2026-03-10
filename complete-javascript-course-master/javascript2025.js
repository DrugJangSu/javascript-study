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
"use strict";
