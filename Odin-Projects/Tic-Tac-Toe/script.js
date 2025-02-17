const gameBoard = () => {
  const board = new Array(9).fill(null);

  return {
    displayBoard: () => board,
    addMarker: (marker, index) => {
      if (board[index] === null) board[index] = marker;
    },
    isWon: () => {
      const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      return winningCombos.some((combo) => {
        const [a, b, c] = combo;
        return (
          board[a] !== null && board[a] === board[b] && board[a] === board[c]
        );
      });
    },
    isDraw: () => {
      return !board.includes(null);
    },
    reset: () => {
      board.fill(null);
    },
  };
};

const player = (marker, score) => {
  return { marker, score };
};

const playGame = () => {
  const board = gameBoard();
  const player1 = player("X", 0);
  const player2 = player("O", 0);
  let currentPlayer = "X";

  const getBoard = () => board;

  const getCurrentPlayer = () => currentPlayer;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  };

  const gameStatus = () => {
    if (board.isWon()) {
      board.reset();
      return currentPlayer;
    }

    if (board.isDraw()) {
      board.reset();
      return 0;
    }
  };

  const updateScore = () => {
    currentPlayer === "X" ? player1.score++ : player2.score++;
  };

  return { getBoard, getCurrentPlayer, switchPlayer, gameStatus, updateScore };
};

const newGame = (() => {
  const start = document.querySelector(".new-game");
  start.addEventListener("click", () => {
    start.remove();

    const game = playGame();

    const markers = document.querySelector(".marker");
    markers.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const currentPlayer = game.getCurrentPlayer();
        if (e.target.textContent === "") {
          currentPlayer === "X"
            ? e.target.classList.add("x")
            : e.target.classList.add("o");
          e.target.textContent = currentPlayer;
        }

        game
          .getBoard()
          .addMarker(currentPlayer, parseInt(e.target.dataset.index));

        const status = game.gameStatus();
        if (status === 0) {
          const draw = document.querySelector(".draw .zero");
          draw.textContent = parseInt(draw.textContent) + 1;
          const newGameButton = document.createElement("button");
          newGameButton.classList.add("new-game");
          newGameButton.textContent = "New Game";
          const gameboard = document.querySelector(".gameboard");
          gameboard.append(newGameButton);

          newGameButton.addEventListener("click", () => {
            newGameButton.remove();
            const cells = document.querySelectorAll(".marker .btn");
            cells.forEach((cell) => {
              cell.textContent = "";
              cell.classList.remove("x", "o");
            });
            game.switchPlayer();
          });
        } else if (status === "X") {
          const playerX = document.querySelector(".player-x .zero");
          playerX.textContent = parseInt(playerX.textContent) + 1;
          game.updateScore();
        } else if (status === "O") {
          const playerO = document.querySelector(".player-o .zero");
          playerO.textContent = parseInt(playerO.textContent) + 1;
          game.updateScore();
        }

        game.switchPlayer();
      }
    });
  });
})();
