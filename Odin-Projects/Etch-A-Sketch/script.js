const container = document.querySelector(".container");

// Create a grid of user choice
// Initial grid will be 16 * 16
const createGrid = (gridSize = 16) => {
  container.innerHTML = ""; // Clear existing grid

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("square");

    // Adjust square size dynamically based on grid size
    div.style.width = `calc(100% / ${gridSize})`;
    div.style.height = ``;

    container.appendChild(div);

    div.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = randomColor();
    });
  }
};

const randomColor = () => {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
};

// Generate random number between 0 to 255
const randomNumber = () => {
  return Math.floor(Math.random() * 256);
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let userInput = prompt("Enter new grid size (1-100):");
  userInput = parseInt(userInput);

  if (userInput > 0 && userInput <= 100) {
    createGrid(userInput);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

createGrid();
