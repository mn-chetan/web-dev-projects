const score_1 = document.querySelector("#score-1");
const score_2 = document.querySelector("#score-2");

const points = document.querySelector("select");

const buttons = document.querySelectorAll(".players button");
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    let intPoints = parseInt(points.value);
    // Increment after every click
    // Make scores 0 if reset button is clicked
    if (e.target.id === "player-1") {
      if (parseInt(score_1.innerText) === intPoints - 1) {
        e.target.setAttribute("disabled", "true");
        e.target.nextElementSibling.setAttribute("disabled", "true");
      }
      score_1.innerText = parseInt(score_1.innerText) + 1;
    } else if (e.target.id === "player-2") {
      if (parseInt(score_2.innerText) === intPoints - 1) {
        e.target.setAttribute("disabled", "true");
        e.target.previousElementSibling.setAttribute("disabled", "true");
      }
      score_2.innerText = parseInt(score_2.innerText) + 1;
    } else {
      score_1.innerText = 0;
      score_2.innerText = 0;
      e.target.previousElementSibling.removeAttribute("disabled");
      e.target.previousElementSibling.previousElementSibling.removeAttribute(
        "disabled"
      );
    }
  });
}
