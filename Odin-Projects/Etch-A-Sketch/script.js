const container = document.querySelector(".container");

// Create 16 by 16 grid
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
}

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = randomColor();
  });
});

const randomColor = () => {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
};

// Generate random number between 0 to 255
const randomNumber = () => {
  return Math.floor(Math.random() * 256);
};
