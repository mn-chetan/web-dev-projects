// Basic Math Operations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let number1, operator, number2;

const operatorMapping = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

const operate = (number1, operator, number2) =>
  operatorMapping[operator](number1, number2);
