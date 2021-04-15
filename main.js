// // 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

i = 40;
j = 50;

if ((i >= 50 && i <= 99) || (j >= 50 && j <= 99)) {
  console.log(true);
} else {
    console.log(false);
  }

// // 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

i = 0;
j = 0;
k = 0;

if ((i >= 50 && i <= 99) || (j >= 50 && j <= 99) || (k >= 50 && k <= 99)) {
  console.log(true);
} else {
    console.log(false);
  }

// // 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

a = 31;
b = 12;
c = 53;

if (a >= b && a >= c) {
  console.log('a is the largest!')
} else if (b >= a && b >= c) {
  console.log('b is the largest!') 
} else if (c >= a && c >= b) {
  console.log('c is the largest!')
}

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

const originalStr = 'Chart'
const additionalStr = 'Py'
const str = additionalStr + originalStr
if (str.substring(0, 2) === additionalStr) 
  console.log(originalStr);

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

x = 30
y = 45
z = x + y
if ((x + y) >= 50 && (x + y) <= 80) {
  console.log(65)
} else {
    console.log(80)
  }

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

i = 8
j = 0

if (i + j === 8 || i - j === 8) {
  console.log(true)
} else {
  console.log(false)
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

i = 14
j = 1

if ((i === 15 || j === 15) || (i + j === 15)) {
  console.log(true)
} else {
  console.log(false)
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

i = 3
j = 17

if ((i % 7 === 0 || i % 11 === 0 ) || (j % 7 === 0 || j % 11 === 0)) {
  console.log(true)
} else {
  console.log(false)
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

p = 5
q = 6
r = p + q

if (p === q) 
  console.log(r * 3)

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

p = 22
r = p - 19

if (p > 19)
  console.log(r * 2)

// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

firstName = 'Roco'
age = 50

if (age < 13) {
  console.log(`${firstName} is a child`)
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is a teenager`)
} else if (age >= 20 && age < 30) {
  console.log(`${firstName} is a young adult`)
} else {
  console.log(`${firstName} is an adult`)
}

// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.
