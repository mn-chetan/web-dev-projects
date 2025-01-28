function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) return "rock";
  else if (randomChoice === 1) return "paper";
  else return "scissors";
}
