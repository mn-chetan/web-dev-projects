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

const display = document.querySelector(".display");
const span = document.querySelector(".display span");

const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
  digit.addEventListener("click", (e) => {
    console.log(span.clientWidth);
    if (span.clientWidth <= display.clientWidth) {
      span.textContent += e.target.textContent;
    }
  });
}
