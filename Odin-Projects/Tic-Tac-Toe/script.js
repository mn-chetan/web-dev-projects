// Game Setup
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

// Keep track of current player
const createTurnManager = function () {
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

const createGameboard = function () {
  const markerPlacement = new Array(9);
  console.log(markerPlacement[0]);

  return {
    isEmpty: function (index) {
      return markerPlacement[index] === undefined;
    },
    placeMarker: function (index, player) {
      // Update index with player marker ('X' or 'O')
      markerPlacement[index] = player;
    },
    isWon: function () {
      // Check if anybody has won
      if (
        // Horizontal Wins
        (markerPlacement[0] !== undefined &&
          markerPlacement[0] === markerPlacement[1] &&
          markerPlacement[0] === markerPlacement[2]) ||
        (markerPlacement[3] !== undefined &&
          markerPlacement[3] === markerPlacement[4] &&
          markerPlacement[3] === markerPlacement[5]) ||
        (markerPlacement[6] !== undefined &&
          markerPlacement[6] === markerPlacement[7] &&
          markerPlacement[6] === markerPlacement[8]) ||
        // Vertical Wins
        (markerPlacement[0] !== undefined &&
          markerPlacement[0] === markerPlacement[3] &&
          markerPlacement[0] === markerPlacement[6]) ||
        (markerPlacement[1] !== undefined &&
          markerPlacement[1] === markerPlacement[4] &&
          markerPlacement[1] === markerPlacement[7]) ||
        (markerPlacement[2] !== undefined &&
          markerPlacement[2] === markerPlacement[5] &&
          markerPlacement[2] === markerPlacement[8]) ||
        // Diagonal Wins
        (markerPlacement[0] !== undefined &&
          markerPlacement[0] === markerPlacement[4] &&
          markerPlacement[0] === markerPlacement[8]) ||
        (markerPlacement[2] !== undefined &&
          markerPlacement[2] === markerPlacement[4] &&
          markerPlacement[2] === markerPlacement[6])
      ) {
        return true;
      }
      return false;
    },
  };
};

const createGameController = function () {
  const turnManager = createTurnManager();
  const gameboard = createGameboard();

  const marker = document.querySelector(".marker");
  marker.addEventListener("click", (e) => {
    console.log(e);
  });
};

// Start the game
const game = createGameController();
