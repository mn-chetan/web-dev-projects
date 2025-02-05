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

const display = document.querySelector(".display");

const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
  digit.addEventListener("click", (e) => {
    if (display.textContent === "0") {
      display.textContent = "";
    }

    if (display.textContent.length < 9) {
      display.textContent += e.target.textContent;
    }
  });
}

const operators = document.querySelectorAll(".operator");
for (let opr of operators) {
  opr.addEventListener("click", (e) => {
    if (e.target.textContent !== "=") {
      number1 = parseInt(display.textContent);
      operator = e.target.textContent;
      display.textContent = 0;
    }

    if (e.target.textContent === "=") {
      number2 = parseInt(display.textContent);
      display.textContent = operate(number1, operator, number2);
    }
  });
}
