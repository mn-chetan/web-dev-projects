const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operatorMapping = {
  "+": add,
  "-": subtract,
  "×": multiply,
  "÷": divide,
};

const operate = (num1, num2, operator) => operatorMapping[operator](num1, num2);

const operations = {
  num1: null,
  num2: null,
  operator: null,
};

const display = document.querySelector(".display");
const span = document.querySelector(".display span");

const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
  digit.addEventListener("click", (e) => {
    if (span.clientWidth + e.target.clientWidth < display.clientWidth) {
      span.textContent += e.target.textContent;
    }
  });
}

const operators = document.querySelectorAll(".operator");
for (let operator of operators) {
  operator.addEventListener("click", (e) => {
    operations.num1 = parseFloat(span.textContent);
    operations.operator = e.target.textContent;
    span.textContent = "";
  });
}

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  operations.num2 = parseFloat(span.textContent);
  span.textContent = operate(
    operations.num1,
    operations.num2,
    operations.operator
  );
});
