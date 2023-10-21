import { RESULT, PLAYER } from "./GameConstants";

const GameEngine = {

  evaluate: function evaluate(board) {

    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // vertical
      [0, 4, 8], [2, 4, 6]              // diagonal
    ];

    for (let winningCombination of winningCombinations) {
      if (board[winningCombination[0]] &&
        board[winningCombination[0]] === board[winningCombination[1]] &&
        board[winningCombination[1]] === board[winningCombination[2]]) {

        return board[winningCombination[0]] === PLAYER.X ? RESULT.X : RESULT.O;
      }
    }

    if (board.includes(null) === false) return RESULT.T;
  },

  getRandomMove: function getRandomMove(board) {

    const emptyCells = [];

    for (let index in board)
      if (board[index] === null) emptyCells.push(index);

    return { cell: emptyCells[Math.floor(Math.random() * emptyCells.length)] }
  },

  getBestMove: function getBestMove(board, isMax, computerPlayer, humanPlayer) {

    const emptyCells = [];

    for (let index in board)
      if (board[index] === null) emptyCells.push(index);

    const result = this.evaluate.call(this, board);

    if (emptyCells.length === board.length) return { cell: Math.floor(Math.random() * 9) };
    if (result === RESULT.T) return { score: 0 };
    if (result === computerPlayer) return { score: emptyCells.length + 1 };
    if (result === humanPlayer) return { score: (emptyCells.length + 1) * -1 };

    if (isMax) {

      let bestMove = { score: Number.NEGATIVE_INFINITY };

      for (const emptyCell of emptyCells) {

        const newBoard = [...board];
        newBoard[emptyCell] = computerPlayer;
        const move = this.getBestMove.call(this, newBoard, !isMax, computerPlayer, humanPlayer);

        if (move.score > bestMove.score) {
          bestMove.score = move.score;
          bestMove.cell = emptyCell;
        }
      }

      return bestMove;
    }
    else {

      let bestMove = { score: Number.POSITIVE_INFINITY };

      for (const emptyCell of emptyCells) {

        const newBoard = [...board];
        newBoard[emptyCell] = humanPlayer;
        const move = this.getBestMove.call(this, newBoard, !isMax, computerPlayer, humanPlayer);

        if (move.score < bestMove.score) {
          bestMove.score = move.score;
          bestMove.cell = emptyCell;
        }
      }

      return bestMove;
    }
  }
}

export default GameEngine;
