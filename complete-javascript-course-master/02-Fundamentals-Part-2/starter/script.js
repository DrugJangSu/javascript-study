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

console.log(bills, tips, totals);
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
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
