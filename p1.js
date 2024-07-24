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
