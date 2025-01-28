function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors.").toLowerCase();
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }

    if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
      } else {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
      } else {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
      } else {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Your choice: ${humanSelection}`);
    console.log(`Computer choose: ${computerSelection}`);

    playRound(humanSelection, computerSelection);
  }

  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);

  if (humanScore === computerScore)
    console.log("Well played! The game is drawn.");
  else if (humanScore > computerScore)
    console.log("You win! Refresh to play again.");
  else console.log("You lose! Refresh to play again.");
}

playGame();
