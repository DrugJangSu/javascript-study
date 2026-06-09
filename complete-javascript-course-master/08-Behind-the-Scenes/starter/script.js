'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str); // This wouldn't work, because const and let variables are block scoped which means they're only available inside the block.
    console.log(millenial); // This works since it's a var (var variables are function scoped, so they ignore the block.)
  }
  printAge();

  return age;
}

const firstName = `Jonas`;
calcAge(1991);
// console.log(age); // This wouldn't work since the scope chain is a one way street, so only the inner scope can have access to the outer scope, not the other way around.
// printAge(); // The same as this one.
