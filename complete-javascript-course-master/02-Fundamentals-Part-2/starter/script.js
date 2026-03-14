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
