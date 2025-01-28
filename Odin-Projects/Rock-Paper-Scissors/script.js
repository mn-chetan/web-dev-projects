function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) return "rock";
  else if (randomChoice === 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const userChoice = prompt("Enter rock, paper, or scissors.");

  return userChoice;
}

let humanScore = 0,
  computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (humanChoice.toLowerCase() === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors.");
      humanScore++;
    } else {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
    }
  } else if (humanChoice.toLowerCase() === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore++;
    } else {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
    }
  } else if (humanChoice.toLowerCase() === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper.");
      humanScore++;
    } else {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    }
  }
}

