const button = document.querySelector("button");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
});

const randomColor = () => {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
};

// Generate a random number from 0 to 255
const randomNumber = () => Math.floor(Math.random() * 256);
