'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = `Jonas`;
calcAge(1991);
// console.log(age); // This wouldn't work since the scope chain is a one way street, so only the inner scope can have access to the outer scope, not the other way around.
