const number = parseInt(prompt("Welcome! Enter your max number:"));

const target = Math.floor(Math.random() * number) + 1;

let guess = parseInt(prompt("Enter your first guess:"));
let nofOfGuesses = 1;
while (true) {
  if (guess === number) {
    console.log(`It took you ${nofOfGuesses}.`);
    break;
  } else if (guess < number) {
    guess = prompt("Too Low. Guess Again:");
  } else if (guess > number) {
    guess = prompt("Too High. Guess Again:");
  }

  nofOfGuesses++;
}
