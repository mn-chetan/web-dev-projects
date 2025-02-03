const score_1 = document.querySelector("#score-1");
const score_2 = document.querySelector("#score-2");

const buttons = document.querySelectorAll(".players button");
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    if (e.target.id === "player-1") {
      score_1.innerText = parseInt(score_1.innerText) + 1;
    } else if (e.target.id === "player-2") {
      score_2.innerText = parseInt(score_2.innerText) + 1;
    } else {
      score_1.innerText = 0;
      score_2.innerText = 0;
    }
  });
}
