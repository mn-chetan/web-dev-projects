function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) return "rock";
  else if (randomChoice === 1) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  const userChoice = prompt(
    "Choose rock, paper, or scissors. Please type it out exactly as typed out here."
  );

  return userChoice;
}
