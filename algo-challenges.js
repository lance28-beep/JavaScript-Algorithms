//Objective
//write a function that takes in two numbers and adds the numbers together
function addNum(...num) {
  return num.reduce((a, b) => a + b, 0);
}
console.log(addNum(5, 0));

//write a function that takes in a string for your first name. a sting
//for your last name and return them formatted in the example below
//output => 'Hi,may name is Lance Valle;

let firstName = "Lance ";
let lastName = "Valle";
//firstSolution
function myName(firstName, lastName) {
  return `Hi,my name is ${firstName} ${lastName}.`;
}
console.log(myName(firstName, lastName));
//Second Solution
function myName2(firstName, lastName) {
  return "Hi,my name is " + firstName.concat(lastName) + ".";
}
console.log(myName2(firstName, lastName));

//write a function that converts celcius to fahrenheit.
//input =>30 output => 86;

function convertCelToFah(cel) {
  return (cel / 5) * 9 + 32;
}
console.log(convertCelToFah(30));
console.log(convertCelToFah(-30));

//write a function that if a number 3 or greater and is divisable by 3 returns
//'fizz',by 5 returns 'buzz',by both returns 'fizzbuz ,or none.
function divisableNum(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return "";
  }
}
console.log(divisableNum(15));
//write a function that takes in a number and returns the factorial
function factorial(num) {
  let arr = 1;
  for (let i = 1; i <= num; i++) {
    arr *= i;
  }
  return arr;
}
console.log(factorial(10));
//write a function that takes in a string and reverses its value
//input 'javascript' => output 'tpircsavaj'

function reverseStr(str) {
  return str.split("").reverse().join("");
}
function reverseStr2(str) {
  let string = str.split("");
  let newStr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    newStr.push(string[i]);
  }
  return newStr.join("");
}
console.log(reverseStr("javaScript"));
console.log(reverseStr2("javaScript"));
