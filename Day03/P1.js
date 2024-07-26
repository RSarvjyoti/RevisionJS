// Write a JavaScript function named multiplyByTwo that takes in a number as a parameter and returns the number multiplied by 2.
// You need to use arrow function with implicit returns;

const multiplyByTwo = (num) => num * 2;

console.log(`Multiple 2 : ${multiplyByTwo(9)}`);

// Create a JavaScript arrow function called sumArray that takes in an array of numbers as a parameter and returns the sum of all the numbers in the array.


// const sumArray = (arr) => {
//     let sum =0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// } 

// ******** Use reduce  ********** 

const sumArray = (arr) =>{
    return arr.reduce(
        (accumlater, currentValue) => accumlater + currentValue, 
        0
    );
}

let arr  = [1,2,3,4];
console.log(`All sum : ${sumArray(arr)}`);



// Write a JavaScript function named findEvenNumbers that takes in an array of numbers as a parameter and returns a 
// new array containing only the even numbers from the original array.

// const findEvenNumbers = (arr) => {
//     let newArray = [];
//     for(let i =0; i<arr.length; i++){
//         if(arr[i] % 2 === 0){
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// } 

// console.log(`Find even : ${findEvenNumbers(arr)}`);


// *********** Use Filter ****************

const findEvenNumbers = (arr) =>{
    return arr.filter((num) => num % 2 === 0);
}

console.log(`Find even : ${findEvenNumbers(arr)}`);

// ************* Oject shorthand **************

const users = (name, age) => ({name, age});

let name  = "Abc";
let age = 21;

console.log(users(name, age));

// Challenge 1: Write a function that takes an object with the properties "name" and "email" and returns a formatted string with their values.
// Example:
// Input: { name: 'John', email: 'john@example.com' }
// Output: "Name: John, Email: john@example.com"

function formatUserData({name, email}) {
    // Write your code here
    return `name : ${name}, email : ${email}`;
  }
  
  let userdata =  { name: 'John', email: 'john@example.com' };

  console.log(formatUserData(userdata));


// 2: Write a function that takes an array of user data objects and returns an array of formatted strings for each user.
// Each formatted string should follow the format: "Name: [name], Email: [email]"
// Example:
// Input: [{ name: 'John', email: 'john@example.com' }, { name: 'Jane', email: 'jane@example.com' }]
// Output: ["Name: John, Email: john@example.com", "Name: Jane, Email: jane@example.com"]

function formatUserArray(userArray) {
    // Write your code here
    return userArray.map((user => `name : ${user.name}, email : ${user.email}`));
  }
  
let user = [{ name: 'John', email: 'john@example.com' }, { name: 'Jane', email: 'jane@example.com' }]

console.log(formatUserArray(user));


// ************ Default Parameter in function *****************

const employee = (name, age, salary = 1000) =>{
    let obj = {
        name : name,
        age : age,
        salary : salary
    }

    return obj;
}

console.log(employee("Abc", 21)); // { name: 'Abc', age: 21, salary: 1000 }


// Write a function called totalAmountPayble; it take in two values, one the grossAmt and discountAmt; 
// It returns grossAmt - discountAmt; If discountAmt is not provided it assumes a discount of 0;

const totalAmountPayble = (grossAmt, discount = 0) =>{
    return grossAmt - discount;
}

console.log(totalAmountPayble(1000, 20)); // 980
console.log(totalAmountPayble(100)) // 100
