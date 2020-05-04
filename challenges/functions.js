// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
  return cb(a, b)
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2){
  return num1 + num2;
};

console.log(consume(2, 2, add)); // 4


function multiply(num1, num2){
  return num1 * num2;
};

console.log(consume(10, 16, multiply)); // 160

function greeting(fname, lname){
  return `Hello ${fname} ${lname}, nice to meet you!`;
};

console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!



/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nested function can access the variable internal.

// Explanation:  the variable internal was created outside of nestFunction()


const external = "I'm outside the function";   // Global scope - ACCESSIBLE EVERYWHERE

function myFunction() {
  console.log(external);  // pulls from line 55 global scope
  const internal = "Hello! I'm inside myFunction!";   // Declare it inside the function  - enclosures/scope


  function nestedFunction() {
    console.log(internal); // pulls from line 59 function scope
  };
  nestedFunction();  // function scope -inside and nested within
}
myFunction();  // pulls from both Global and Function Scope 
