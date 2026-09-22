// Exercise 1: Personal Info Program
//
// Goal: practice variables, data types, and conditionals.
// Fill in each TODO below, then run:  node week-01/exercise1.js

// TODO 1: create a variable called `name` holding your name (a string)
let name = "Philip";


// TODO 2: create a variable called `age` holding your age (a number)
let age = 30;

// TODO 3: create a variable called `isLearningToCode` set to true (a boolean)
let isLearningToCode = true;

// TODO 4: print a sentence using your variables, e.g.:
//   console.log(name + " is " + age + " years old.");
console.log(name + " is " + age + " years old ");

// TODO 5: write an if/else that checks `age`:
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// TODO 6: BONUS — write an if/else that checks `isLearningToCode`:
//   if true, print "Currently learning to code!"
//   if false, print "Not learning right now."
if (isLearningToCode) {
    console.log("Currently learning to code!");
} else {
    console.log("Not learning right now.");
}

for ( let i=0; i<5; i++) {
    console.log (i);
}