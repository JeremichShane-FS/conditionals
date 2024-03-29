# Conditionals

You can find the deployed project at [Conditionals](https://jeremichshane-fs.github.io/conditionals)

## Overview

### **Problem #1** – Grade Letter Calculator

In this problem, you will be prompting the user for the number grade and giving them the equivalent letter grade.

Prompt the user for the number grade, assume the grade is a whole number.

Determine the appropriate letter grade for that number using conditional statements.

- There should be only one printout to the console.
- Use the following grading scale:
  - A is 90-100
  - B is 80-89
  - C is 70-79
  - D is 60-69
  - F is 0-59
  - **Error** - If the user types in something above 100 or less than zero give them an error message.
- User Inputs:
  - Number Grade. The user would enter 85 for a number grade of 85%
- **Result To Print Out:**
  - “You have a(n) X%, which means you have earned a(n) Y in the class!”
    Where X is the number grade given by the user
    Where Y is the letter grade.

**Data Sets To Test** – Try these values in your program and make sure you get the same results shown here!

- **Test 1:**
  - **User Input**
    - Grade - 92
  - **Results Shown In The Console**
    - You have a(n) 92%, which means you have earned a(n) A in the class!
- **Test 2:**

  - **User Input**
    - Grade - 80
  - **Results Shown In The Console**
    - You have a(n) 80%, which means you have earned a(n) B in the class!

- **Test 3:**
  - **User Input**
    - Grade - 67
  - **Results Shown In The Console**
    - You have a 67%, which means you have earned a(n) D in the class!

### **Problem #2** – Pumpkin Patch Pickers

In this program, we will determine the cost of a pumpkin by its weight using the chart below.

**Pumpkin Weight Cost Per Pound**

- Up To Not Including 5.5 lbs.

  - $1.00 per lbs.

- Up To Not Including 10.75 lbs.

  - $0.90 per lbs.

- Up To Not Including 25 lbs.

  - $0.80 per lbs.

- Up To Not Including 50 lbs.

  - $0.70 per lbs.

- Up to and including 100 lbs.

  - $0.60 per lbs.

- Above 100 lbs.
  - $0.50 per lbs

Prompt the user for the weight of the pumpkin, assume the weight could contain decimal values.

Create a conditional statement that will test the weight of the pumpkin. Remember to have an error output if the user puts in a wrong value, like a negative number.

Do the math for the cost inside of the conditional code blocks

Remember, there should be only one printout to the console.

- **User Inputs:**

  - Weight of the pumpkin

- **Result To Print Out:**
  - “Your pumpkin of Xlbs costs $Y.”
    - Where X is the weight given by the user
    - Where Y is the calculated cost.

**Data Sets To Test** – Try these values in your program and make sure you get the same results shown here!

- **Test 1:**

  - **User Input**
    - Weight - 4.5
  - **Results Shown In The Console**
    - Your pumpkin of 4.5lbs costs $4.50.

- **Test 2:**

  - **User Input**
    - Weight - 10
  - **Results Shown In The Console**
    - Your pumpkin of 10lbs costs $9.00.

- **Other Tests:**
  - Make sure you try each possible code block! Try these other weights.
    - Weight - 20.75, 40, 100, 150.30

### Problem #3 – Loyalty Card

In this problem, you will calculate the total cost of two items that the user will purchase and calculate a discount based on if they are a preferred customer or not.

Prompt the user for the cost of the (2) items. Make sure to parse them to the correct data type.

Then ask the user if they are a preferred customer. The only valid answers are “yes” or “no”, but create a conditional block that tells the user there is an error if they type in something different.

If the customer is a member, then they get a 15% discount. If they are not a member, then no discount is given.

Create a conditional based on the answer if they are a preferred customer or not and do the math inside of the conditional block.

- **User Inputs:**

  - Cost of First Item (in $)
  - Cost of Second Item (in $)
  - Preferred Member Status – “yes”, “no”, or "something wrong"

- **Result To Print Out:**
  - If the user is not a member:
    - **Results** - “Your total purchase is $X.”
  - Or If the user is a member:
    - **Results** - “Your total purchase is $X, which includes your 15% discount.”

**Data Sets To Test** – Try these values in your program and make sure you get the same results shown here!

- **Test 1:**

  - **User Input**

    - First Item Cost - $ 45.50
    - Second Item Cost - $75.00
    - Preferred Member – “yes”

  - **Results Shown In The Console**
    - “Your total purchase is $102.425, which includes your 15% discount.”

- **Test 2:**

  - **User Input**
    - First Item Cost - $ 23.00
    - Second Item Cost - $44.25
    - Preferred Member – “no”
  - **Results Shown In The Console**
    - “Your total purchase is $67.25."

- **Test 3:**
  - **User Input**
    - First Item Cost - $ 10.00
    - Second Item Cost - $20.00
    - Preferred Member – “maybe”
  - **Results Shown In The Console**
    - “You have typed in something wrong and I can not calculate the total."

<br>

![Conditionals](/img/conditionals.png)

<br>

## Contributors

|                                       [Shane Jeremich](https://github.com/shanejeremich)                                       |
| :----------------------------------------------------------------------------------------------------------------------------: |
|      [<img src="https://avatars.githubusercontent.com/u/51142646?v=4" width = "200" />](https://github.com/shanejeremich)      |
|                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/shanejeremich)                   |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/shanejeremich/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=for-the-badge)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&?style=flat-square)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Key Features

- Determine when to use if, else, and else if conditional statements.
- Formulate conditional statements for dynamic decision-making.
- Employ relational operators to weigh conditions as true or false.
- Create logic to resolve a single solution from a selection of possible solutions.

### Front end deployed to `GitHub Pages`

> [Conditionals](https://jeremichshane-fs.github.io/conditionals)

# Installation Instructions

- Fork and clone the repo to install it as your own remote.
- Set up the project with version control (e.g. Git)
- Read the README.md file and have a look around the project
- Set up your project/file architecture however you want
- Start coding!!
