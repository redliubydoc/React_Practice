import { useContext } from "react";
import GameContext from "../GameContext";
import GameEngine from "../GameEngine";
import { PLAYER, RESULT } from "../GameConstants";

import "./Cell.css"


function Cell({ elem, indx }) {

  const { board, setBoard, currentPlayer, setCurrentPlayer, computerPlayer, humanPlayer, score, setScore, winner, setWinner } = useContext(GameContext);

  return (
    <div className="component-cell">
      <div className="container-cell">
        <div className={"cell" + (elem === null ? " empty" : elem === PLAYER.X ? " bg-primary-x tx-light" : " bg-primary-o tx-light")}
          data-cell-index={indx}
          onClick={event => play(parseInt(event.target.getAttribute("data-cell-index")))}>{elem}</div>
      </div>
    </div>
  );

  function play(move) {

    if (board[move] !== null) return;
    if (winner !== null) return;

    if (currentPlayer === humanPlayer) {

      const newBoard = [...board];
      newBoard[move] = humanPlayer;
      const _winner = GameEngine.evaluate(newBoard);

      if (_winner) {

        const _score = {...score};

        switch (_winner) {
          case RESULT.X:
            _score.X += 1;
            break;
      
          case RESULT.O:
            _score.O += 1;
            break;
        }

        setScore(_score);
        setWinner(_winner);
      }
      
      setBoard(newBoard);
      setCurrentPlayer(computerPlayer);
    }
  }
}

export default Cell;
