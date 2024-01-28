// 31 t0 40 - chapter

var currentDate = new Date();
console.log(currentDate);

var dStr = new Date();
console.log(dStr);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(now);

var date = currentDate.getDate();
console.log(currentDate.getDate());
var year = currentDate.getFullYear();
console.log(currentDate.getFullYear());
var day = currentDate.getDay();
console.log(currentDate.getDay());
var month = currentDate.getMonth();
console.log(currentDate.getMonth());
var hours = currentDate.getHours();
console.log(currentDate.getHours());
var minutes = currentDate.getMinutes();
console.log(currentDate.getMinutes());
var seconds = currentDate.getSeconds();
console.log(currentDate.getSeconds());
var milliseconds = currentDate.getMilliseconds();
console.log(currentDate.getMilliseconds());

var currentDate = new Date("January 1, 1980");
console.log(currentDate.getTime());

var currentDate = new Date("2024-11-02");
console.log(currentDate.getDate());

var currentDate = new Date();

currentDate.setDate(15);
console.log(currentDate.getDate());

currentDate.setFullYear(2024);
console.log(currentDate.getFullYear());

currentDate.setMonth(2);
console.log(currentDate.getMonth());

currentDate.setHours(4);
console.log(currentDate.getHours());

currentDate.setMinutes(30);
console.log(currentDate.getMinutes());

currentDate.setSeconds(30);
console.log(currentDate.getSeconds());

currentDate.setMilliseconds(500);
console.log(currentDate.getMilliseconds());

function calculateAge(userAge) {
  var currentDate = new Date();
  var changeDate = new Date(userAge);
  var inMilli = currentDate - changeDate;
  var inYear = inMilli / (1000 * 60 * 60 * 24 * 365.25);
  var age = Math.floor(inYear);
  console.log(age);
}
calculateAge("01-01-2001");
calculateAge("02-14-2008");
calculateAge("06-15-1990");

//chapter 35-37
function abc() {
  console.log(abc);
}
abc();

function askName() {
  var userName = prompt("Enter name");
  if (userName !== null) {
    console.log("Entered name: " + userName);
  } else {
    console.log("User canceled the input.");
  }
  return userName;
}
var enteredName = askName();

function callTwoFunctions() {
  var result1 = firstFunction();
  var result2 = secondFunction();
  console.log("Result from first function:", result1);
  console.log("Result from second function:", result2);
}
function firstFunction() {
  return "Result from the first function";
}
function secondFunction() {
  return "Result from the second function";
}
callTwoFunctions();

function enterAndDisplayName() {
  var userName = prompt("Enter name");
  if (userName !== null) {
    alert("Entered name: " + userName);
  } else {
    console.log("User canceled the input.");
  }
}

function concat(a, b, c) {
  return "result";
}
variable_value = 42;
string_value = "Hello, ";
number_value = 7;
result = concat(variable_value, string_value, number_value);
console.log(concat);

function concatenateAndAssign(param1, param2) {
  let concatenatedResult = param1 + param2;
  console.log(concatenatedResult);
  return concatenatedResult;
}
concatenateAndAssign("Hello", " World!");

function isWordInArray(word, array) {
  array = array.map(function (element) {
    return element.toLowerCase();
  });
  return array.includes(word.toLowerCase());
}

var namesArray = [
  "zaid",
  "haris",
  "raza",
  "abubakar",
  "hassan",
  "hussain",
  "fatima",
];
var result1 = isWordInArray("haris", namesArray);
var result2 = isWordInArray("ali", namesArray);

console.log(result1);
console.log(result2);
function numReverce(x) {
  return x.toString().split("").reverse().join("");
}
var a = numReverce(32243);
console.log(a);

//     function name (z){
//     return z.split("").reverse().join("");
//  }
//  var check = word ("madam");
//  if (check === "wow"){
//     console.log ("it is palindrom")
//  }else{
//      console.log("it not palindrom ")
//  }

//  function abc(text){
//     var a = text.split("");
//     console.log(a);
//   for(var i = 0; i < a.length; i++) {
// a[i]= a[i].slice(0,1).toUpperCase()+a[i].slice(1).toLowerCase();
//  console.log(b[x])
//  }
//  a= a.join("");
// return a;
//  }

//  var b = abc("the quick brown fox");
//  console.log(b);

function findMinMax(numbers) {
  if (numbers.length === 0) {
    return "Array is empty";
  }
  numbers.sort(function (a, b) {
    return a - b;
  });
  var lowest = numbers[0];
  var greatest = numbers[numbers.length - 1];
  return lowest + "," + greatest;
}
var sampleArray = [1, 2, 3, 4, 5];
var result = findMinMax(sampleArray);
console.log(result);

// chapter 38

function demonstrateLocalVariable() {
  var localVar = "I am a local variable";
  console.log(localVar);
}
demonstrateLocalVariable();

var globalVar = "I am a global variable";
function accessGlobalVariable() {
  console.log(globalVar);
}
accessGlobalVariable();

//chapter 39-40
var dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Tuesday":
  case "Wednesday":
    console.log("It's a weekday, not quite the weekend yet.");
    break;
  case "Thursday":
    console.log("One more day until Friday!");
    break;
  case "Friday":
    console.log("TGIF! It's Friday!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend, time to relax.");
    break;
  default:
    console.log("Invalid day of the week.");
}
var cityName = prompt("Enter a city name:");

switch (cityName.toLowerCase()) {
  case "paris":
    alert("You entered Paris! The city of love.");
    break;
  case "new york":
    alert("You entered New York! The city that never sleeps.");
    break;
  case "tokyo":
    alert("You entered Tokyo! The bustling metropolis.");
    break;
  default:
    alert("City not recognized. Please enter a valid city name.");
}

//Q1

// function displayArt(){

// }

// //Q2

// function askName(){
//     user= prompt("enter your name")
//     console.log(user);
//     return user;
// }

// var userName = askName();

//Q3

// function callTwoFunctions() {
//     functionA();
//     functionB();
//   }
//   function functionA() {
//     console.log("This is functionA");
//   }

//   function functionB() {
//     console.log("This is functionB");
//   }

//   callTwoFunctions();

//Q4

// function askName(){
//     user= prompt("enter your name")
//     alert(user);
//       return user;
// }

// var userName = askName();

//Q5

// function concat(letterT, letterI, letterE) {
//   //our function
//   console.log(letterT, letterI, letterE);
// }
// var variable = 42;
// var string = "Welcome";
// var number = 7;

// concat(variable, string, number);

//Q6

// function mix(one ,two){
//     together = one + two;
//     console.log(together);
//     return together;
// }

// var answerConcat = mix(20 , 2);
// console.log(answerConcat);

//Q7

// function value(para1 , para2 , para3){
//     multiply = para1 * para2 * para3;
//     console.log(multiply);
//     return multiply;
// }

// var answerOfMultiply = value(2 , 2 , 2);
// console.log("Answer is :" answerOfMultiply);

//Q8

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }

//     var sum = 0;

//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }

//     var average = sum / numbers.length;
//     return average;
// }

// var numbersArray = [10, 20, 30, 40, 50];
// var result = calculateAverage(numbersArray);
// console.log("Average:", result);

//Q9

// function addNumbers(a, b) {
//     var sum = a + b;
//     return sum;
//   }

// var numA = 5;
// var numB = 5;
// var result = addNumbers(numA, numB);
// console.log("Sum:", result);

//Q10

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }

//     var sum = 0;

//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }

//     var average = sum / numbers.length;
//     return average;
// }

// var numbersArray = [10, 20, 30, 40, 50];
// var result = calculateAverage(numbersArray);
// console.log("Average:", result);

//Q11

// function addNumbers(a, b) {
//     var sum = a + b;
//     return sum;
//   }

// var numA = 5;
// var numB = 5;
//here we capture the value and store them in variables
// var result = addNumbers(numA, numB);
// console.log("Sum:", result);

//Q12

// function letterCounts(word) {
//     var counts = {};

//     for (var i = 0; i < word.length; i++) {
//       var letter = word[i].toLowerCase();
//       if (counts[letter] === undefined) {
//         counts[letter] = 1;
//       } else {
//         counts[letter]++;
//       }
//     }

//     return counts;
// }
// var word = "Words";
// var result = letterCounts(word);
// console.log(result);

//Q13

// function setYear(myDate, year) {
//     myDate.setFullYear(year);
//     console.log(myDate);
// }

// var myDate = new Date();
// var newYear = 2023;

// setYear(myDate, newYear);

//Q14

function calculateAge(userBirthdate) {
  var currentDate = new Date();
  var ageInMilliseconds = currentDate - userBirthdate;
  var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  var age = Math.floor(ageInYears);

  return age;
}

var userBirthdate = new Date("1990-05-15");
var personAge = calculateAge(userBirthdate);
console.log("Your age is: " + personAge + " years");

//Q15

function toFindWord(word, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === word.toLowerCase()) {
      return true;
    }
  }
  return false;
}

var wordCheck = "bushra";
var namesArray = [
  "anum",
  "fatima",
  "aliza",
  "sana",
  "mehwish",
  "bushra",
  "madiha",
];

var isWordPresent = toFindWord(wordCheck, namesArray);
console.log(isWordPresent);

//Q16

function repeatLetter(letter, times) {
  return letter.repeat(times);
}

var repeatingLetters = repeatLetter("a", 10);
console.log(repeatingLetters);

//Q17

function reverseArray(arr) {
  return arr.reverse();
}

var array = ["a", "b", "c", "d", "e"];
var reversedArray = reverseArray(array);
console.log(reversedArray);

//Q18

function number(x) {
  var reversedString = x.toString().split("").reverse().join("");
  return reversedString;
}

var reversedNumber = number(32243);
console.log(reversedNumber);

//Q19

function palindromeWord(x) {
  // removal of non-alphanumeric characters using this (/[^a-zA-Z0-9]/g, '')
  var cleanStr = x
    .toString()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");

  // Reverse the string
  var reverseStr = cleanStr.split("").reverse().join("");

  return cleanStr === reverseStr;
}

var givenWord = "Wow";
var result = palindromeWord(givenWord);

if (result) {
  console.log(givenWord + " is a palindrome.");
} else {
  console.log(givenWord + " is not a palindrome.");
}

//Q20

function capitalWord(str) {
  var line = str.split(" ");

  for (var i = 0; i < line.length; i++) {
    var words = line[i];
    line[i] = words.charAt(0).toUpperCase() + words.slice(1);
  }
  return line.join(" ");
}

var lineStr = "the quick brown fox";
var result = capitalWord(lineStr);
console.log(result);

//Q21

function findNum(numbers) {
  var max = numbers[0];
  var min = numbers[0];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < max) {
      max = numbers[i];
    } else if (numbers[i] > min) {
      min = numbers[i];
    }
  }

  return max + "," + min;
}

var numArr = [1, 2, 3, 4, 5];
var result = findNum(numArr);
console.log(result);

//Chapter 38 (Local vs. Global Variables)

//Q1

// function exp(a , b){
//   //local varaible that are made in function are only be accessible in function
//   // or outside the function we can't call 'abc' varaible because it is local varaible
//   var abc= a + b;
//   console.log(abc);
// }
// exp(12 , 5);

//Q2

var globVariable = 30;
function exp(a) {
  var amount = a * globVariable;
  console.log(amount);
}

exp(4, globVariable);
