const gameBoard = () => {
  const board = new Array(9).fill(null);

  return {
    createBoard: () => board,
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

  return { switchPlayer, gameStatus, updateScore };
};
