const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let number = null;
let operator = null;
let newNumber = true;

const operatorMapping = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "÷": divide,
};

const operate = (number, operator, number2) =>
  operatorMapping[operator](number, number2);

const display = document.querySelector(".display");

const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
  digit.addEventListener("click", (e) => {
    if (newNumber) {
      display.textContent = "";
      newNumber = false;
    }

    if (display.textContent.length < 9) {
      display.textContent += e.target.textContent;
    }
  });
}

const operators = document.querySelectorAll(".operator");
for (let opr of operators) {
  opr.addEventListener("click", (e) => {
    const clickedOperator = e.target.textContent;
    const currentValue = parseFloat(display.textContent);

    if (clickedOperator !== "=") {
      if (number === null) {
        number = currentValue;
      } else {
        number = operate(number, operator, currentValue);
        display.textContent = number;
      }
      operator = clickedOperator;
      newNumber = true;
    } else {
      display.textContent = operate(number, operator, currentValue);
      number = null;
      operator = null;
    }
  });
}

const specials = document.querySelectorAll(".special");
for (let special of specials) {
  special.addEventListener("click", (e) => {
    const clicked = e.target.textContent;
    const num = parseFloat(display.textContent);

    if (clicked === "AC") {
      number = null;
      operator = null;
      display.textContent = "0";
      newNumber = true;
    } else if (clicked === "+/-") {
      display.textContent = (-num).toString();
    }
  });
}
