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
