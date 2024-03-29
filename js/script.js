// Shane Jeremich
// November 4th, 2023
// Code Exercise 04: Conditionals

// Alert the user to the purpose of the page
alert("Hello and Welcome to the Conditionals Assignment!");

// Alert the user suggesting to open the console to see the results of the assignment
alert("I suggest opening the Console first and then refreshing the page to see the results.");

//  *Grade Letter Calculator
// Alert the user this is the Grade Letter Calculator
alert("First Assignment is the Grade Letter Calculator, where I will tell you what letter grade you earned based on the number grade you enter.");

// Prompt the user for the number grade they received in the class and store it in a variable called grade.
const grade = parseInt(prompt("Grade Letter Calculator: Please enter a number between 0 and 100."));

// Use the following grading scale:
// A is 90-100
// B is 80-89
// C is 70-79
// D is 60-69
// F is 0-59
// Error - If the user types in something above 100 or less than zero give them an error message.

// User Inputs:
// Number Grade (in %)

// Result To Print Out:
// “You have a(n) X%, which means you have earned a(n) Y in the class!”
// Where X is the number grade given by the user
// Where Y is the letter grade.

// If/Else Statements:
// If the user does not enter a number between 0 and 100, then print out an error message.
// If the user enters a number between 0 and 100, then print out the letter grade.

// letterGrade variable is just for having fun with DOM manipulation bonus at the bottom of the page
let letterGrade;

if (grade >= 90 && grade <= 100) {
  letterGrade = "A";
  console.log("You have a(n) " + grade + "%, which means you have earned a(n) " + letterGrade + " in the class!");
} else if (grade >= 80 && grade <= 89) {
  letterGrade = "B";
  console.log("You have a(n) " + grade + "%, which means you have earned a(n) " + letterGrade + " in the class!");
} else if (grade >= 70 && grade <= 79) {
  letterGrade = "C";
  console.log("You have a(n) " + grade + "%, which means you have earned a(n) " + letterGrade + " in the class!");
} else if (grade >= 60 && grade <= 69) {
  letterGrade = "D";
  console.log("You have a(n) " + grade + "%, which means you have earned a(n) " + letterGrade + " in the class!");
} else if (grade >= 0 && grade <= 59) {
  letterGrade = "F";
  console.log("You have a(n) " + grade + "%, which means you have earned a(n) " + letterGrade + " in the class!");
} else {
  console.log("You have entered an invalid number.  Please refresh the page and try again.");
}

// * Pumpkin Cost Calculator
// Pumpkin Weight	Cost Per Pound
// Up To Not Including 5.5 lbs. is $1.00 per lbs.
// Up To Not Including 10.75 lbs. is $0.90 per lbs.
// Up To Not Including 25 lbs. is $0.80 per lbs.
// Up To Not Including 50 lbs. is $0.70 per lbs.
// Up to and including 100 lbs. is $0.60 per lbs.
// Above 100 lbs. is $0.50 per lbs

// Alert the user this is the Pumpkin Cost Calculator
alert("Second Assignment is the Pumpkin Cost Calculator, where I will tell you how much your pumpkin costs based on the weight you enter.");

// Prompt the user for the weight of the pumpkin, assume the weight could contain decimal values and store it in a variable called pumpkin.
const pumpkin = parseFloat(prompt("Pumpkin Cost Calculator: Please enter a positive number for the weight of your pumpkin."));

// User Inputs:
// Weight of the Pumpkin (in lbs)

// Result To Print Out:
// “Your pumpkin of Xlbs costs $Y.”
// Where X is the weight given by the user
// Where Y is the calculated cost.

// If/Else Statements:
// If the user enters a number greater than 0, then print out the cost of the pumpkin.
// store the cost of the pumpkin in a variable
// If the user does not enter a number greater than 0, then print out an error message.

// pumpkinCost variable is just for the having fun with DOM manipulation bonus at the bottom of the page
let pumpkinCost;

if (pumpkin > 0 && pumpkin < 5.5) {
  pumpkinCost = Math.round(pumpkin * 1.0 * 100) / 100;
  console.log("Your pumpkin of " + pumpkin.toFixed(2) + "lbs costs $" + pumpkinCost.toFixed(2));
} else if (pumpkin >= 5.5 && pumpkin < 10.75) {
  pumpkinCost = Math.round(pumpkin * 0.9 * 100) / 100;
  console.log("Your pumpkin of " + pumpkin.toFixed(2) + "lbs costs $" + pumpkinCost.toFixed(2));
} else if (pumpkin >= 10.75 && pumpkin < 25) {
  pumpkinCost = Math.round(pumpkin * 0.8 * 100) / 100;
  console.log("Your pumpkin of " + pumpkin.toFixed(2) + "lbs costs $" + pumpkinCost.toFixed(2));
} else if (pumpkin >= 25 && pumpkin < 50) {
  pumpkinCost = Math.round(pumpkin * 0.7 * 100) / 100;
  console.log("Your pumpkin of " + pumpkin.toFixed(2) + "lbs costs $" + pumpkinCost.toFixed(2));
} else if (pumpkin >= 50 && pumpkin <= 100) {
  pumpkinCost = Math.round(pumpkin * 0.6 * 100) / 100;
  console.log("Your pumpkin of " + pumpkin.toFixed(2) + "lbs costs $" + pumpkinCost.toFixed(2));
} else if (pumpkin > 100) {
  pumpkinCost = Math.round(pumpkin * 0.5 * 100) / 100;
  console.log("Your pumpkin of " + pumpkin.toFixed(2) + "lbs costs $" + pumpkinCost.toFixed(2));
} else {
  console.log("You have entered an invalid number.  Please refresh the page and try again.");
}

// * Loyalty Card
// Alert the user this is the Loyalty Card
alert("Third Assignment is the Loyalty Card, where I will determine if you get a discount on your purchases.");

// User Inputs:
// Cost of Item 1
// Cost of Item 2
// Are you a preferred customer? (yes or no)

// Result To Print Out:
// “Your total purchase is $X, which includes your 15% discount.”
// Where X is the total cost of the items after the discount.
// If the user is not a preferred customer, then print out the total cost of the items.
// If the user is a preferred customer, then print out the total cost of the items after the discount.

// If/Else Statements:
// Ask the user for the cost of the first item. Store it in a variable called item1.
// If the user does not enter a number greater than 0 or NaN is true, then print out an error message.
// If the user enters a number greater than 0, then ask the user for the cost of the second item. Store it in a variable called item2.
// If the user does not enter a number greater than 0 or NaN is true, then print out an error message.
// If the user enters a number greater than 0, then ask the user if they are a preferred customer. Store it in a variable called preferred.
// If the user enters “yes”, then print out the total cost of the items after the discount.
// If the user enters “no”, then print out the total cost of the items.
// If the user does not enter “yes” or “no”, then print out an error message.

// This prompt starts the if/else statement for the Loyalty Card assignment and stores
const item1 = parseFloat(prompt("What is the cost of the first item?  Please enter a positive number."));

// item2, preferred, and total variables are just for the having fun with DOM manipulation bonus at the bottom of the page
let item2;
let preferred;
let total;

if (item1 <= 0 || isNaN(item1)) {
  console.log("You have entered an invalid number.  Please refresh the page and try again.");
} else if (item1 > 0) {
  item2 = parseFloat(prompt("What is the cost of the second item?  Please enter a positive number."));
  if (item2 <= 0 || isNaN(item2)) {
    console.log("You have entered an invalid number.  Please refresh the page and try again.");
  } else if (item2 > 0) {
    preferred = prompt("Are you a preferred customer?  Please enter yes or no.").toLowerCase();
    if (preferred == "yes") {
      total = Math.round((item1 + item2) * 0.85 * 100) / 100;
      console.log("Your total purchase is $" + total.toFixed(2) + ", which includes your 15% discount.");
    } else if (preferred == "no") {
      total = Math.round((item1 + item2) * 100) / 100;
      console.log("Your total purchase is $" + total.toFixed(2));
    } else {
      console.log("You have entered an invalid answer.  Please refresh the page and try again.");
    }
  }
}

//  Alert the user to the end of the assignment
alert("Thank you for participating in the Conditionals Assignment!  Please check the Console for your results.");

/**
 *
 * BONUS - Having fun with DOM Manipulation
 * This if just for fun and to practice DOM manipulation
 * This is not part of the assignment
 *
 */
const gradeID = document.getElementById("grade");
const pumpkinID = document.getElementById("pumpkin");
const loyaltyID = document.getElementById("loyalty");

if (grade >= 0 && grade <= 100) {
  gradeID.innerHTML = `You have a(n) <span class="blue-text">${grade}</span>%, which means you have earned a(n) <span class="blue-text">${letterGrade}</span> in the class!`;
} else {
  gradeID.innerHTML = `You have entered an invalid number.  Please refresh the page and try again.`;
}

if (pumpkin > 0) {
  pumpkinID.innerHTML = `Your pumpkin of <span class="blue-text">${pumpkin.toFixed(2)}</span>lbs costs $${pumpkinCost.toFixed(2)}.`;
} else {
  pumpkinID.innerHTML = `You have entered an invalid number.  Please refresh the page and try again.`;
}

if (item1 > 0 && item2 > 0) {
  if (preferred == "yes") {
    loyaltyID.innerHTML = `Your total purchase is $<span class="blue-text">${total.toFixed(2)}</span>, which includes your 15% discount.`;
  } else if (preferred == "no") {
    loyaltyID.innerHTML = `Your total purchase is $<span class="blue-text">${total.toFixed(2)}</span>`;
  } else {
    loyaltyID.innerHTML = `You have entered an invalid answer.  Please refresh the page and try again.`;
  }
} else {
  loyaltyID.innerHTML = `You have entered an invalid number.  Please refresh the page and try again.`;
}
