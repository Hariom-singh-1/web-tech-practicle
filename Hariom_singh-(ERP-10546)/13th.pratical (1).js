// ---------------------------------------
// USER-DEFINED FUNCTIONS
// ---------------------------------------

// Function: Add two numbers
function add(a, b) {
  return a + b;
}

// Function: Subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function: Multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function: Divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

// Function: Greet someone
function greet(deo) {
  return `Hello, ${deo}!`;
}


// ---------------------------------------
// INVOKING THE FUNCTIONS
// ---------------------------------------
console.log("Add:", add(10, 5));              // 15
console.log("Subtract:", subtract(10, 5));    // 5
console.log("Multiply:", multiply(10, 5));    // 50
console.log("Divide:", divide(10, 5));        // 2
console.log(greet("Jatin"));                  // Hello, Jatin!


// ---------------------------------------
// var, let, const SCOPE DEMONSTRATION
// ---------------------------------------
function scopeDemo() {
  if (true) {
    var x = 10;   // function scoped
    let y = 20;   // block scoped
    const z = 30; // block scoped + constant

    console.log("Inside block:");
    console.log("x:", x); // 10
    console.log("y:", y); // 20
    console.log("z:", z); // 30
  }

  console.log("Outside block:");
  console.log("x:", x); // 10 (accessible because var is function-scoped)

  // console.log(y); // ❌ Error: y is not defined
  // console.log(z); // ❌ Error: z is not defined
}

scopeDemo();



