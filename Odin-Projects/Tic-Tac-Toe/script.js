const gameBoard = (function () {
  const board = new Array(9).fill(null);

  return {
    getBoard: () => [...board],
    isWon: function () {
      const b = board;

      return (
        // Horizontal Wins
        (b[0] !== null && b[0] === b[1] && b[0] === b[2]) ||
        (b[3] !== null && b[3] === b[4] && b[3] === b[5]) ||
        (b[6] !== null && b[6] === b[7] && b[6] === b[8]) ||
        // Vertical Wins
        (b[0] !== null && b[0] === b[3] && b[0] === b[6]) ||
        (b[1] !== null && b[1] === b[4] && b[1] === b[7]) ||
        (b[2] !== null && b[2] === b[5] && b[2] === b[8]) ||
        // Diagonal Wins
        (b[0] !== null && b[0] === b[4] && b[0] === b[8]) ||
        (b[2] !== null && b[2] === b[4] && b[2] === b[6])
      );
    },
    isDraw: () => board.every((value) => value !== null),
    reset: () => board.fill(null),
  };
})();

const player = function (marker) {
  return { marker };
};
