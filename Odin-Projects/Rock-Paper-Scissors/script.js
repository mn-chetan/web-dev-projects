function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  const playerChoices = document.querySelector(".player");
  const playerImg = document.querySelector(
    ".middle section:nth-of-type(1) img"
  );
  const computerImg = document.querySelector(
    ".middle section:nth-of-type(2) img"
  );
  const player = document.querySelector(
    ".score div:nth-of-type(1) p:nth-of-type(2)"
  );
  const computer = document.querySelector(
    ".score div:nth-of-type(2) p:nth-of-type(2)"
  );

  function playRound(playerChoice) {
    playerImg.src = `images/${playerChoice}.jpg`;
    playerImg.alt = `Picture of a ${playerChoice}`;

    const computerChoice = getComputerChoice();
    computerImg.src = `images/${computerChoice}.jpg`;
    computerImg.alt = `Picture of a ${computerChoice}`;

    roundWinner(playerChoice.toLowerCase(), computerChoice.toLowerCase());
    displayScore();

    if (humanScore === 5 || computerScore === 5) {
      alert("Game over! Refresh the screen to play again.");
      playerChoices.removeEventListener("click", handleClick);
    }
  }

  function displayScore() {
    player.innerText = humanScore;
    computer.innerText = computerScore;
  }

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

  function handleClick(e) {
    if (e.target.nodeName === "BUTTON") {
      playRound(e.target.innerText);
    }
  }

  playerChoices.addEventListener("click", handleClick);
}

playGame();
