// Remember, we're gonna use strict mode in all scripts now!
'use strict';
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
// -
