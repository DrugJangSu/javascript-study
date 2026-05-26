'use strict';

// Selecting elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
// These are the exactly the same, but the first one is more recommended because it is more flexible and can be used in other situations, while the second one is only for selecting elements by ID.
const diceEl = document.querySelector(`.dice`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);
