// Coding Challenge 1: Write a JavaScript function to calculate the area of a rectangle. 
// The function should take two parameters, width and height, and return the calculated area.

function area(width, height){
    return width * height;
}
console.log("Challenge 1")

console.log(area(2,3));

// Coding Challenge 2: Write a JavaScript function to check if a given number is even or odd. 
// The function should take one parameter, num, and return "Even" if the number is even, and "Odd" if the number is odd.

function checkEvenOrOdd(num){
    if(num % 2 == 0){
        return 'even'
    }
    return 'odd';
}
console.log("Challenge 2")
console.log(checkEvenOrOdd(9));

// Coding Challenge 3: Write a JavaScript function that takes an array of numbers and returns the sum of all the 
// numbers in the array. The function should take one parameter, numbers, which is an array of numbers, 
// and return the calculated sum.

function arraySum(numbers){
    let sum = 0;

    for(let i =0; i<numbers.length; i++){
        sum += numbers[i]
    }

    return sum;

}
console.log("Challenge 3")
let numbers = [2,3,4,5,7];
console.log(arraySum(numbers))


// Dynamic Typing:

// Write a JavaScript function that takes a variable x as an argument and returns its type. Do not use any built-in 
// functions or methods to determine the type.

function checkType(x){
    return typeof x;
}

console.log("Challenge 4")
let arr = [1,2,3];
console.log(checkType(21));
console.log(checkType("Hello"));
console.log(checkType(arr))

// Write a JavaScript function that takes an array as an argument and returns a new array with the same elements,
//  but with each element's type converted to a string. For example, if the input array is [1, "hello", true], 
//  the output should be ["number", "string", "boolean"].

function arrayType(arr){
    return arr.map( function(element) {
        return typeof element
    })
}

console.log("Challenge 5");
let array = [1,"Hello", true];
console.log(arrayType(array));

// Write a JavaScript function that takes a variable x as an argument and checks if its type is "object". 
// The function should return true if the type is "object", and false otherwise.

function checkObject(x){
    if(typeof x === 'object'){
        return true;
    }
    return false;
}

console.log("Challenge 6");

console.log(checkObject(array));


// Find maximum value between two number

function getMaximum(num1, num2){
    if(num1 > num2){
        return `${num1} is greter then ${num2}`;
    }
    return `${num2} is greter then ${num1}`
}
console.log("Challenge 7");
console.log(getMaximum(7,3));


// declare an array called students
// students should contain 3 objects
// each object should contain two properties - name & age
// console log it


// in other words, store data of 3 students and finally console.log it!
console.log("Challenge 8");
let students = [{name : "Sarvjyoti", age : 21}, {name : "Abc", age: 22}, {name : "XYZ", age : 23}]

console.log(students);

// Write a JavaScript program to create an array named colors that contains three strings: "red", "green", and "blue".
// Example Output: ["red", "green", "blue"]

// Access the second item in the colors array and log it to the console.
// Example Input: ["red", "green", "blue"]
// Example Output: green

// Replace "blue" with "orange" in the colors array and print the updated array to the console.

console.log("Challenge 9");
let colors = ["red", "green", "blue"];

console.log(colors);
// access the index base value
console.log(colors[1]);

// Update the value
colors[2] = "orange";
console.log(colors);



// Write a function named reverseString that takes a string as an argument and returns the reverse of that string.
//  Do not use any built-in reverse methods.

function reverseString(str){
    let newStr = "";
    for(let i = 0; i <str.length; i++){
        newStr = str.charAt(i) + newStr;
    }

    return newStr;
}
console.log("Challenge 10");
console.log(reverseString('Sarvjyoti'));


// Data type challenges

// Challenge 1: Write a JavaScript function that checks if a variable is undefined.
// The function should return true if the variable is undefined, and false otherwise.

function checkUndefined(val){
   return val === undefined;
}
let val ;
console.log(`Variable is undefined or not  ==> ${checkUndefined(val)}`);

// Challenge 2: Write a JavaScript function that checks if a variable is null.
// The function should return true if the variable is null, and false otherwise.


function checkNull(val){
    return val === null;
}

let nuller = null;
console.log(`Variable is null or not  ==> ${checkNull(nuller)}`);


// Challenge 3: Write a JavaScript function that checks if a variable is either undefined or null. 
// The function should return true if the variable is undefined or null, and false otherwise.

function checkUndefinedAndNull(val){
    return val === null || val === undefined;
}

let value = 10;
console.log(`Value is undefind or null ==> ${checkUndefinedAndNull(value)}`)


// Write a function that takes a value as an argument and returns true if the value is truthy and false if the value is falsy.

function checkTruthyAndFalsy(val){
    return Boolean(val);
}
let num = 0;
console.log(`Value is truthy ==> ${checkTruthyAndFalsy(num)}`);

var item = "apple";
var quantity = 5;
console.log(`You have ${quantity} ${item}s.
    Please come again!`);