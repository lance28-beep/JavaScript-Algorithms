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
//write a function that takes in a string that ignores special characters and
//underscore,is a case insensitive,ignores spaces and sees if it is a palindrome.
function palindrome(str) {
  let arr = str
    .toLowerCase()
    .replace(/[^a-z]/gm, "")
    .split("")
    .reverse()
    .join("");
  return arr === str.toLowerCase().replace(/[^a-z]/gm, "");
}
//write a function that takes in a string and returns the length of the longest string
function longestStr(str) {
  let arrStr = str.split(" ");
  console.log(arrStr);
  let longWord = "";
  for (let i of arrStr) {
    if (i.length > longWord.length) {
      longWord = i;
    }
  }
  return longWord.length;
}
function longestStr2(str) {
  let result = str.split(" ").sort((a, b) => b.length - a.length);
  return result[0].length;
}
console.log(longestStr("I would like to work for Google"));
console.log(longestStr2("I would like to work for Google"));
//write a function that taked in a string and capitalize the first letter of each word.

function capitalizeFirstLetter(str) {
  let string = str.split(" ");
  console.log(string);
  string = string.map(function (word) {
    let newword = word.charAt(0).toUpperCase();
    return newword.concat(word.slice(1, word.length));
  });
  return string.join(" ");
}
console.log(capitalizeFirstLetter("i would like to work for google"));
//write a function that takes in a string and number that repeats the string that a number of times.

function repeatStr(str, num) {
  return str.repeat(num);
}
function repeatStr2(str, num) {
  let newStr = "";
  let repeatNum = 0;
  while (repeatNum !== num) {
    newStr += str;
    repeatNum++;
  }
  return newStr;
}
console.log(repeatStr("lance", 5));
console.log(repeatStr2("lance", 5));

//write a function that takes in a string and returns a boolean on whether or
//not it is a digit.a degit is defines as a number between 0 - 9
function digitTrueOrFalse(guess) {
  return typeof guess === "number";
}
function digitTrueOrFalse2(guess) {
  let numRef = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return numRef.includes(guess.toString());
}
console.log(digitTrueOrFalse(55));
console.log(digitTrueOrFalse2("10"));
///write a function that takes in a string and returns the largest word in the array
function isLargestWord(str) {
  let word = str.replace(/[^A-Z a-z]/gm, "").split(" ");
  word = word.sort(function (a, b) {
    return b.length - a.length;
  });
  return word[0];
}
console.log(isLargestWord("Ready}}}}, steady, go"));
//write a function that takes in an array of numbers and finds what number is missing between at 0 and largest value in the array
function missingNum(arry) {
  let returnValue = [];
  let number = arry.sort((a, b) => a - b);
  for (let i = 0; i <= number[number.length - 1]; i++) {
    if (!number.includes(i)) {
      returnValue.push(i);
    }
  }
  return returnValue.join(" ");
}
console.log(missingNum([10, 1, 0, 9, 2, 8, 3, 5, 7, 4, 100]));
//write a function that takes in an array of numbers and finds out if there are any duplicate numbers
function isDuplicate(numArr) {
  let x = [];
  let dupNum = [];
  for (let i of numArr) {
    if (x.includes(i)) {
      dupNum.push(i);
    } else {
      x.push(i);
    }
  }
  console.log(x.sort((a, b) => a - b));
  console.log(dupNum.sort((a, b) => a - b));
  if (dupNum.length > 0) {
    return true;
  }
  return false;
}
console.log(isDuplicate([1, 2, 3]));
//write a function that takes a string and parses out all the numbers and add them together.
function addNum2(str1) {
  let num = str1.match(/\d+/g) || [];
  console.log(num);
  return num.reduce((a, b) => Number(a) + Number(b), 0);
}
console.log(addNum2("your payment is method is invalid "));

//write a function that takes in an array of positive numbers and returns the first number that is duplicated.if no duplicates occur return -1;
function firstDuplicate(arr) {
  let objectDup = {};
  for (let i of arr) {
    if (objectDup.hasOwnProperty(i)) {
      return i;
    }
    objectDup[i] = [i];
  }
  return -1;
}
console.log(firstDuplicate([8, 9, 3, 1, 5, 2]));
//write a function that takes in a string has no spaces,but new words are denoted with capital letters and return a lowercase spaced out string.
function convertedText(str) {
  let newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== newArr[i].toLowerCase()) {
      newArr[i] = newArr[i].toLowerCase();
      newArr.splice(i, 0, " ");
    }
  }
  return newArr.join("");
}
console.log(convertedText("CondingIsAwesomed"));
//write a function that takes a number array with two positive numbers and finds the sum of all the numbers between and including the largest value and smalles value;
function addArrayNum(num) {
  let numArr = num.sort((a, b) => a - b);
  let newArray = [];
  for (let i = numArr[0]; i <= numArr[1]; i++) {
    newArray.push(i);
  }
  return newArray.reduce((a, b) => a + b, 0);
}
function addArrayNum2(num) {
  let newArray = [];
  let min = Math.min(...num);
  let max = Math.max(...num);
  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }
  return newArray.reduce((a, b) => a + b, 0);
}
console.log(addArrayNum([10, 5]));
console.log(addArrayNum2([10, 5]));
//write a function that takes in two arrays and returns an array of the unique values;
function uniqueValue(arr1, arr2) {
  let unique = [];
  for (let i of arr1) {
    if (!arr2.includes(i) && !unique.includes(i)) {
      unique.push(i);
    }
  }
  for (let i of arr2) {
    if (!arr1.includes(i) && !unique.includes(i)) {
      unique.push(i);
    }
  }
  return unique.join(" ");
}
console.log(uniqueValue([1, "calf", 3, "filly"], [4, "fisdf"]));
