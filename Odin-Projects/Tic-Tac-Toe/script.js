// Start Game
(function () {
  const newGame = document.querySelector(".new-game");

  newGame.addEventListener("click", () => {
    // Remove element from DOM
    newGame.remove();

    // Add hover effect on marker buttons
    const markers = document.querySelectorAll(".marker .btn");
    for (let marker of markers) {
      marker.classList.add("hover");
    }
  });
})();

const turn = function () {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCurrentPlayer: function () {
      return count % 2 === 0 ? "X" : "O";
    },
  };
};
