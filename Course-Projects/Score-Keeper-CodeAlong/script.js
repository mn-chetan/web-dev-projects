const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let p1Score = 0,
  p2Score = 0,
  winningScore = 5;

p1Button.addEventListener("click", () => {
  if (p1Score !== winningScore) {
    p1Score++;
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (p2Score !== winningScore) {
    p2Score++;
    p2Display.textContent = p2Score;
  }
});
