'use strict';
/*
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
*/
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

var firstName = `Matilda`;

const jonas = {
  firstName: `Jonas`,
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    (console.log(this), console.log(`Hey ${this.firstName}`));
  },
};
jonas.greet();
// console.log(this.firstName);
