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
  };
};

const player = (marker, score) => {
  return { marker, score };
};

const playGame = () => {
  const board = gameBoard.createBoard();
  const player1 = player("X", 0);
  const player2 = player("O", 0);
};
