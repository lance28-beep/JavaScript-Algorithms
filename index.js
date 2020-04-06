//-------------------------------------------------------------------------------------------------------------------------------------
// list of String Methods
// 1//.concat()
// 2//.endWith()
// 3//.indexOf()
// 4//.includes()
// 5//.lastIndexOf
// 6//.match()
// 7//.padEnd()
// 8//.padStart()
// 9//.repeat()
// 10//.replace()
// 11//.search()
// 12//.slice()
// 13//.split()
// 14//.join()
// 15//.startsWith()
// 16//.substr();
// 17//.toLowerCase() & .toUpperCase();
// 18//.trim(), trimLeft() & trimRight()
// 19//.toString()
// example
// .concat()
//summary
// let name = 'lance ';
// let sureName = "valle";
// let regex = /[a-z]/gm;
// let fullName = name.concat(sureName);
// console.log(fullName)
// console.log(fullName.endsWith(sureName));
// console.log(fullName.startsWith(name))
// console.log(fullName.indexOf('a'));
// console.log(fullName.includes('a'));
// console.log(fullName.lastIndexOf('a'));
// console.log(fullName.match(regex));
// console.log(fullName.padEnd(fullName.length + 3,'.'));
// console.log(fullName.repeat(2));
// console.log(fullName.replace(sureName,'sarsola'));
// console.log(fullName.search('a'));
// console.log(fullName.slice(0,6));
// console.log(fullName.split('').join(''))
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.trim());
// -------------------------
// let str1 = 'Hello World';
// let str2 = 'example';
// console.log(str1.concat(str2));

// //.endWith()
// // -------------------------
// //   =>boolean return true or false
// console.log(str1.endsWith('World'));
// console.log(str1.endsWith('Worl',str1.length - 1));
// console.log(str1.endsWith('Wo',8))
// console.log(str2.endsWith('wow'));

// //indexOf()
// // -------------------------
// // looking for a specific character //return -1 if not existing
// console.log(str1.indexOf('l'));

// //.includes()
// // -------------------------
// // similar with indexOf except it returns a boolean
// //not recommeded to use indexOf when evaluating if a string exist.
// console.log(str1.includes('l'));

// //.lastIndexOf()
// // -------------------------
// // similar with indexOf except it count backward.
// console.log(str1.lastIndexOf("l",3))

// //.match()
// // -------------------------
// // taken a regular expression
// let regex = /[A-Z]/gi;
// let regex2 = /[a-e]/gi;
// console.log(str1.match(regex));
// console.log(str2.match(regex2));

// //.padEnd()
// // -------------------------
// console.log(str1.padEnd(str1.length + 3,'.'))

// //.padStart()
// // -------------------------
// console.log(str1.padStart(str1.length + 3,'.'))

// //.repeat()
// // -------------------------
// console.log(str1.repeat(2))

// //.replace()
// // -------------------------
// console.log(str1.replace(regex2,"o"));

// //.search()
// // -------------------------
// console.log(str1.search(/World/));

// //.slice()
// // -------------------------
// console.log(str1.slice(0,4));
// console.log(str1)

// //.split()
// // -------------------------
// console.log(str1.split(" "));
// console.log(str2.split(""));

// //.join()
// // -------------------------
// let array = ["l","a","n","c","e"];
// console.log(array.join(""));

// //.startsWith()
// // -------------------------
// console.log(str1.startsWith("H"))
// console.log(str1.startsWith("e",1))
// console.log(str1.startsWith("l",2))
// console.log(str1.startsWith("l",5))

// //substr();
// // -------------------------
// console.log(str1.substr(0,2))
// console.log(str1.substr(2,3))
// console.log(str1.substr(6))
// console.log(str1.substr(11))

// //.toLowerCase() & .toUpperCase();
// // -------------------------
// console.log(str1.toLowerCase(11))
// console.log(str1.toUpperCase(11))

// //.trim(), trimLeft() & trimRight();
// // -------------------------
// // remove spaces
// let stringWithSpaces = "/a        This will removes spaces             b/";
// console.log(stringWithSpaces.trim())
// console.log(stringWithSpaces.trimLeft())
// console.log(stringWithSpaces.trimRight())

// //.toString() convert numbers to sting
// // -------------------------
// let numberToStr = 12352;
// console.log(typeof numberToStr)
// console.log(typeof numberToStr.toString())
////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Numbers Property
// 1//.isFinite() ;
// 2//.isInteger();
// 3//.isNaN();
// 4//.isSafeInteger();
// 5//.parseFloat();
// 6//.parseInt();
// 7//.toExponential();
// 8//.toFixed();
// 9//.toPrecision();
//summarry
// let num = '245.54';
// let num1 = 100;
// let num2 = 352.65;
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.isInteger(num1));
// console.log(Number.isNaN(num1));
// console.log(Number.isSafeInteger(num2));
// console.log(Number.parseInt(num1));
// console.log(Number.parseFloat(num));
// console.log(num1.toExponential())
// console.log(num2.toFixed())
// console.log(num1.toPrecision(1))

// let num = 111; //sample Interger;
// let num2= 112.25 // sample float;
// //Number.MAX_VALUE & Number.MIN_VALUE;
// // -------------------------
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// //,isFinite()
// // -------------------------
// // ==>boolean //determine if the number in finite or not.
// //a finite set is a set that has a finite number of elements. Informally,
// //a finite set is a set which one could in principle count and finish counting
// console.log(Number.isFinite(num));
// //.isInteger()
// // -------------------------
// // integer is a whole Number. returns false if the number is point something.
// console.log(Number.isInteger(num))
// console.log(Number.isInteger(num2));
// //.isNaN()
// // -------------------------
// console.log(typeof NaN);
// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN(num))
// console.log(Number.isNaN("hello"));
// //isSafeInteger();
// // -------------------------
// console.log(Number.isSafeInteger(num2));
// console.log(Number.isSafeInteger(Math.pow(2,53)));
// console.log(Number.isSafeInteger(Math.pow(2,25)));
// console.log(Number.isSafeInteger(num));
// //.parseFloat
// // -------------------------
// //=>pull out number
// console.log(Number.parseFloat(num));
// console.log(Number.parseFloat(num2));
// //.parseInt()
// // -------------------------
// //round off numbers if it is an integer.
// console.log(Number.parseInt(num));
// console.log(Number.parseInt(num2));
// //.toExponential()
// // -------------------------
// //take a number and make it as exponential;
// let number = 11111111111111111111111
// console.log(number.toExponential())
// console.log(number.toExponential(4));
// //.toFixed
// // -------------------------
// //=>take a number and round off.
// let number2 = 11111111.9496
// console.log(number2.toFixed())
// console.log(number2.toFixed(2));
// //toPrecision()
// // -------------------------
// //method formats a number to a specified length
// let example1 = 192.225;
// console.log(example1.toPrecision(3))
// console.log(example1.toPrecision(2));
////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Arrays Properties
// 1//.concat();
// 2//.copyWithin();
// 3//.entries()
// 4//.every();
// 5//.fill();
// 6//.filter()
// 7//.find()
// 8//.findIndex();
// 9//.forEach();
// 10//.includes();
// 11//.indexOf();
// 12//.join()
// 13//.lastIndexOf()
// 14//.map();
// 15//.pop()
// 16//.push()
// 17//.reduce()
// 18//.shift()
// 19//.slice()
// 20//.some()
// 21//.sort();
// 22//.toString();
// 23//.unshift();
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let array2 = [16,17,18,19,20];
// let array3 = [true,false]
// //.concat();
// //-------------------------
// //combined two number
// array = array.concat(array2,array3)
// console.log(array);
// //.copyWithin();
// //-------------------------
// //allows you to copy the values over within your index.
// console.log(array.copyWithin(3));
// console.log(array.copyWithin(-3));
// //.entries()
// //-------------------------
// //methods that takes an array and takes the values in it and then creates a key value pair based.
// let iterator = array2.entries();
// for(let i=0;i<array2.length;i++){
//     console.log(iterator.next().value)
// }
// //.every();
// //-------------------------
// //evaluate to true or false//callback function
// // return all false when atleast 1 is false;
// console.log(array2.every((element) => element > 0));
// console.log(array2.every((element) => element > 16));
// //.fill();
// //-------------------------
// //method that allows us to fill an array for the entire length of an array overwrite
// //the value of an array rather with a certain value;
// console.log(array2.fill(1))
// console.log(array.fill(5,6,9))
// //.filter()
// //-------------------------
// //filter and return to new array once the criteria is true;
// ///callback function
// let anotherNum = [1,2,3,4,5,6,7,8,9,7];
// console.log(anotherNum.filter(i => i > 5));
// //.find()
// //-------------------------
// //look for the value that satisfies what it si you're looking for.only the first one
// //callback function
// console.log(anotherNum.find(i => i > 4));
// //findIndex();
// //-------------------------
// //get index not the value; only the first one
// console.log(anotherNum.findIndex(i => i > 4));
// //forEach();
// //-------------------------
// //iterate through an entire array
// anotherNum.forEach((element,index,array) => {
//     console.log(element); //used mosdt of the time;
//     console.log(index);
//     console.log(array)
// });
// //.includes();
// //-------------------------
// //find out if an array has a particular value;returns boolean
// console.log(anotherNum.includes(4));
// //.indexOf();
// //-------------------------
// //get index of a value.similar to findIndex.return the index//not a boolean
// console.log(anotherNum.indexOf(4));
// console.log(anotherNum.indexOf(10)); //retrurn negative -1 if not existing.
// //.join();
// //-------------------------
// //join all them together convert to string.
// console.log(anotherNum.join(''));
// console.log(anotherNum.join('-'))
// //.lastIndexOf()
// //-------------------------
// //opposite direction.//same with indexOf except it get the very last value inside the array.
// console.log(anotherNum.lastIndexOf(7))
// console.log(anotherNum.indexOf(7))
// //.map();
// //-------------------------
// //takes the original array and then it creates a new array with some additional logic.
// //callback function
// let newArray = anotherNum.map(element => element + 2);
// let newArray2 = anotherNum.forEach(element => element + 2);
// console.log(newArray);
// console.log(newArray2); //undefined
// //.pop()
// //-------------------------
// //take out last element of array ((optional)and restore the value that we pop up)
// let popArray = anotherNum.pop();
// console.log(anotherNum);
// console.log(popArray);
// //push()
// //-------------------------
// //add new elemet to the last array
// anotherNum.push(10,11,12);
// console.log(anotherNum);
// //.reduce()
// //-------------------------
// //call back function
// let sum = anotherNum.reduce((currentTotal,currentValue) => currentTotal + currentValue ,0);
// console.log(sum)
// //.shift()
// //-------------------------
// //similar with pop() except that this method remove the first value of an array.
// let shiftArray = anotherNum.shift()
// console.log(anotherNum);
// console.log(shiftArray);
// //.slice()
// //-------------------------
// //.copy a piece of an array.
// let sliceArray = anotherNum.slice(2,5)
// console.log(sliceArray)
// //some()
// //-------------------------
// //similar with every() method except it return true when atleast 1 element is true;
// let someArray = anotherNum.some(i => i > 5);
// console.log(someArray);
// //.sort();
// //-------------------------
// let alphabet = ["a","aa","cd","b","cc","ce","c"];
// let randomNum =[1,5,3,2,4,8,9,7,6];
// console.log(alphabet.sort())
// console.log(randomNum.sort((a,b)=> a-b ));
// //toString();
// //-------------------------
// // convert our arrays into string
// console.log(randomNum.toString());
// console.log( typeof (randomNum.toString()))
// //unshift();
// //-------------------------
// //similar to push except this method add element to the beginning of an array;
// anotherNum.unshift(1);
// console.log(anotherNum);
// ////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Operators
//Arithmetic Operators
// //-------------------------
//Addition (+)
//Subtraction (-)
//Division (/)
//Multiplication (*)
//Remainder (%)
//Exponentiation (**)
//Increment (++)
//Decrement (--)
//Unary negation (-)
//Unary plus (+)
// function addTwoNumbers(a,b){
//     return a + b;
// }
// console.log(addTwoNumbers(2,8));
// //Relational Operators
// // //-------------------------
// //relational operator is a programming language construct or operator that tests or
// //defines some kind of relation between two entities.
// //return a "boolean"
// //Greater than (>)
// //Greater than or equal (>=)
// //Less than (<)
// //Less than or equal (<=)
// function addTwoNumbers(a,b){
//     return a < b;
// }
// console.log(addTwoNumbers(2,8));
// //Equality Operators
// //Equal (==)
// //Not equal (!=)
// //Strict equal (===)
// //Strict not equal (!==)
// function addTwoNumbers(a,b){
//     return a === b & a <= b;
// }
// console.log(addTwoNumbers(2,"2"));
// //Binary/Bitwise Logical Operators
// //Bitwise AND	a & b  //&&
// //Bitwise OR	a | b  // ||
// function addTwoNumbers(a,b){
//     return a === b && a >= b && a == b
// }
// console.log(addTwoNumbers(2,"2"));
// //Conditional Operator (Ternary)
// function addTwoNumbers(a,b){
//     return (a + b === 4) ? 'Hello World' : false;
// }
// console.log(addTwoNumbers(2,2));
//Increament and Decreament Operators
//Increment (++)
//Decrement (--)
// function addTwoNumbers(a,b){
//     let example = 5;
//     return example++;
// }
// console.log(addTwoNumbers(2,2));
//Assignment Operators
//(+=)(-=)(*=)(/=)(%=)
// function addTwoNumbers(a,b){
//     let example = 5;
//     example = 6;
//     return example
// }
// console.log(addTwoNumbers(2,2));
// ////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Boolean
// Object Intro
// let example = {"test":1,"test2":2};
// console.log(example.test) //dot.notation
// console.log(example["test2"]) //bracket notation
// //.assign()
// let example1 = {"hello":"world","Bye":"Now"};
// let example2 = example1;
// let example3 = Object.assign({},example1) //avoid mutating the older one
// example2.hello = 'today'
// example3.hello = 'Everyone'
// console.log(example1);
// console.log(example2);
// console.log(example3);//used Object.assign()
// //.entries()
// // .create key value pair an array of arrays that store a key and a value from object
// let objectSample = {
//     "firstName":"Lance",
//     "middleName":"Sarsola",
//     "lastName":"Valle",
//     "Hobbies":
//         {'test1':"computer",
//         'test2':'games'}
//     }
// console.log(Object.entries(objectSample));
// //.freeze()
// //not be able to add on to your object'
// let objectSample2 = Object.freeze(objectSample);
// objectSample2.firstName = 'janet';
// console.log(objectSample2)
// //.is();
// //boolean compare 2 if equal;
// let company = {'name':'Atlantic','AreaCovered':'CamSur','numStore':32, 'numEmployee':570};
// let company1 = company;
// let company2 = Object.assign({},company);
// console.log(
//     Object.is(company,company1)
// );
// console.log(
//     Object.is(company,company2)
// );
// console.log(
//     Object.is('Hello',"Hello")
// );
// //.isFrozen();
// //boolean//check if the object is frozen.
// console.log(
//     Object.isFrozen(objectSample2)
// )
// console.log(
//     Object.isFrozen(company)
// )
// //.keys();
// //returns the keys from your object
// console.log(
//     Object.keys(company)
// )
// //.hasOwnProperty();
// //check if the property/keys exist inside the objects.
// console.log(
//     company.hasOwnProperty('numStore')
// );
// //.values()
// //similar with keys() method except it return the values.
// console.log(
//     Object.values(company)
// );
// ////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Events
//.onclick()
//.ondblclick()
//.onmousedown().onmouseup()
//.onmouseenter().onmouseleave()
//.onmousemove().onmouseout()
//.onkeydown()
//.onkeyup()
//.onresize()
//.onscroll()
//.onpageshow().onpagehide()
//.ondrag().ondragend()
//.ondragenter()
//.ondragleave()
//.oncut().oncopy().onpaste()
// ////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//what vanilla JS and Selectors
//DOM Document Object Model
//document.getElementById('id');
//document.getElementByClassName('className');
//document.getElementByTagName('id');
//document.querySelector('p')
//-------------------------
// //innerHTML,innerText and setAttribute()
// let example = document.getElementById('sample');
// example.innerHTML = '<h2> Goodbye </h2>'//inject new element
// example.innerText = 'Goodbye'//inject just text
// example.setAttribute('disabled',"")
//-------------------------
//style properties
// let example = document.getElementById('sample');
// example.style.background = 'red';
//-------------------------
//classList.add() classList.remove() classList.contains()
// let example = document.getElementById('sample');
// example.classList.add('sampleStylefromCSS');
//-------------------------
//AJAX
//a request that you send out to go and get data from a server
//Data is retrieved.
// ////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //stringify() and parse()
// let exampleJSON = JSON.stringify({example:true,name:"lance",if:123});
// console.log(typeof exampleJSON);
// console.log(exampleJSON);

// exampleJSON = JSON.parse(exampleJSON);
// console.log(typeof exampleJSON);
// console.log(exampleJSON);
//-------------------------
//localStorage.setItem() & localStorage.getItem()
// localStorage.setItem('username','Lance');
// console.log(localStorage);
// ////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Es6
// Template Literals
// //using backteck
//  let firstName = 'lance';
//  let lastName = 'valle';
//  let fullName = `my full name is ${firstName} ${lastName}.`;
// console.log(fullName)
// //Destructuring
// let exampleObject = {
//     first:'lance',
//     middleName:'sarsola',
//     last:'valle',
//     codingStatus:'Godly'
// };
// const {first,middleName,last,codingStatus} = exampleObject;
// console.log(codingStatus);
// console.log(exampleObject.codingStatus);

// let exampleArray = [1,2,3,4,5,6,7,8,9];
// const [frst,second,third,fourth,fifth,six,seven,eight,nine] = exampleArray;
// console.log(second);
// console.log(exampleArray[2]);
// //Object Literal shortHand
// let firstName = 'Lance';
// let middleInitial = 'S';
// let lastName = 'Valle';
// let codingSkills = 'Godly';

// let exampleObject = {
//     firstName,
//     middleInitial,
//     lastName,
//     codingSkills
// };
// console.log(exampleObject);
////For ...of Loop
// let exampleArray = ["Hello","Bye","Astalabista","Yolo","Sexy"];
// for(let i of exampleArray){
//     console.log(i)
// }
// //SpreadOperator
// let exampleArray = ["Hello","Bye","Astalabista","Yolo","Sexy"];
// let exampleArray2 = [1,2,3,4,5,6,7];
// console.log(...exampleArray);
// exampleArray2.push(...exampleArray);
// console.log(exampleArray2);
// //RestOperator
// function add(...numbers){
//     for(let i of numbers){
//         console.log(i);
//     }
// }
// add(1,2,3,4,5,6,7,8,9);
// //ArrowFunction
// const exampleArray = [1,2,3,4,5,6,7,8,9].map((i) => i + 1);
// console.log(exampleArray);
//Default Params
// function noParamsEntered(x,y = 5,z = 10){
// console.log(x);
// console.log(y);
// console.log(z);
// }
// noParamsEntered('lance',100);
// ////--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Math Introduction
console.log(Math.PI);

console.log(Math.round(1.5));

console.log(Math.pow(10, 2));

console.log(Math.sqrt(100));

console.log(Math.abs(-100));

console.log(Math.ceil(10.1));

console.log(Math.floor(10.999));

console.log(Math.min(10, 0, -100, -200, 100));

console.log(Math.max(100, 200, 300, 4500, 1000));

console.log(Math.floor(Math.random() * 10) + 1);
//Date Introduction
// const exDate = new Date().toString()
// console.log(new Date(exDate))
//---------------
// console.log(new Date("01/15/2017"))
//---------------
//DAte methods
console.log(new Date().getDay())