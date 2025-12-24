// CONDITIONAL STATEMENTS
// IF - ELSE
let num = 10;

if (num > 0) {
    console.log(num + " is Positive");
} else if (num < 0) {
    console.log(num + " is Negative");
} else {
    console.log("Number is Zero");
}
// SWITCH CASE
let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good Job!");
        break;
    case "C":
        console.log("Needs Improvement");
        break;
    default:
        console.log("Invalid Grade");
}
// LOOPS
// FOR LOOP
console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
    console.log("i = " + i);
}
// WHILE LOOP
console.log("WHILE LOOP:");
let j = 1;
while (j <= 5) {
    console.log("j = " + j);
    j++;
}
// DO…WHILE LOOP
console.log("DO-WHILE LOOP:");
let k = 1;
do {
    console.log("k = " + k);
    k++;
} while (k <= 5);
