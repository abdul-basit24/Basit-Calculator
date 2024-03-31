#! /usr/bin/env node
// Printing a Welcome Message to User
console.log("\n\tWelcome to \"Abdul Basit's\" - Simple Calculator\n");
// Here begins the code
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    { message: "Select one of any Operator to Perform the Task",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION", "EXPONENTIATION", "MODULUS"],
    },
]);
// CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "EXPONENTIATION") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else if (answer.operator === "MODULUS") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    "Please select correct operator as mentioned above";
}
