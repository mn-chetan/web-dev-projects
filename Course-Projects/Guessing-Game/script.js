let number = parseInt(prompt("Welcome! Enter your max number:"));
while (!number) {
  number = parseInt(prompt("Please enter a valid number:"));
}

const target = Math.floor(Math.random() * number) + 1;

let guess = parseInt(prompt("Enter your first guess:"));
let nofOfGuesses = 1;
while (true) {
  if (parseInt(guess) === target) {
    console.log(`It took you ${nofOfGuesses} guesses.`);
    break;
  } else if (guess < target) {
    guess = prompt("Too Low. Guess Again:");
  } else if (guess > target) {
    guess = prompt("Too High. Guess Again:");
  } else if (guess === "q") {
    console.log(`You quit the game after ${nofOfGuesses} guesses.`);
    break;
  }

  nofOfGuesses++;
}
