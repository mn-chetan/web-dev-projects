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

      roundWinner(
        e.target.innerText.toLowerCase(),
        computerChoice.toLowerCase()
      );

      displayScore();
    }
  });
}

let humanScore = 0,
  computerScore = 0;

function roundWinner(playerChoice, computerChoice) {
  const winPair = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winPair[playerChoice] === computerChoice) {
    humanScore++;
  } else if (winPair[computerChoice] === playerChoice) {
    computerScore++;
  }
}

const player = document.querySelector(
  ".score div:nth-of-type(1) p:nth-of-type(2)"
);
const computer = document.querySelector(
  ".score div:nth-of-type(2) p:nth-of-type(2)"
);

function displayScore() {
  player.innerText = humanScore;
  computer.innerText = computerScore;
}

playRound();
