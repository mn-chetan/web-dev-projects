const operatorMapping = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "×": (a, b) => a * b,
  "÷": (a, b) => a / b,
};

const operate = (num1, num2, operator) => operatorMapping[operator](num1, num2);

const operations = {
  num1: null,
  num2: null,
  operator: null,
};

let isClear = true;

const display = document.querySelector(".display");
const span = document.querySelector(".display span");

const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
  digit.addEventListener("click", (e) => {
    if (isClear && operations.operator) {
      span.textContent = "";
      isClear = false;
    }

    if (span.clientWidth + e.target.clientWidth < display.clientWidth) {
      span.textContent += e.target.textContent;
    }
  });
}

const operators = document.querySelectorAll(".operator");
for (let operator of operators) {
  operator.addEventListener("click", (e) => {
    if (operations.operator) {
      operations.num2 = parseFloat(span.textContent);
      span.textContent = operate(
        operations.num1,
        operations.num2,
        operations.operator
      );
      operations.num1 = parseFloat(span.textContent);
      operations.operator = e.target.textContent;
      isClear = true;
    } else {
      if (!operations.num1) {
        operations.num1 = parseFloat(span.textContent);
      }
      operations.operator = e.target.textContent;
    }
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
  operations.num1 = parseFloat(span.textContent);
  operations.operator = null;
  isClear = true;
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  span.textContent = "";
  for (let key in operations) {
    operations[key] = null;
  }
});
