function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

const playerChoices = document.querySelector(".player");
const playerImg = document.querySelector(".middle section:nth-of-type(1) img");
const computerImg = document.querySelector(
  ".middle section:nth-of-type(2) img"
);

function playRound() {
  playerChoices.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      playerImg.src = `images/${e.target.innerText}.jpg`;
      playerImg.alt = `Picture of a ${e.target.innerText}`;

      const computerChoice = getComputerChoice();
      computerImg.src = `images/${computerChoice}.jpg`;
      computerImg.alt = `Picture of a ${computerChoice}`;
    }
  });
}

playRound();
