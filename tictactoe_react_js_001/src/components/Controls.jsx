import { useContext } from "react";
import { HARDNESS, PLAYER } from "../GameConstants";

import "./Controls.css";
import GameContext from "../GameContext";

function Controls() {

  const {
    hardness, setHardness,
    currentPlayer, setCurrentPlayer,
    computerPlayer, setComputerPlayer,
    humanPlayer, setHumanPlayer,
    board, setBoard,
    score, setScore,
    winner, setWinner
  } = useContext(GameContext);

  return (
    <div className="component-controls">
      <div className="container-controls">
        <select id="slt-hardness" value={hardness} onChange={(event) => switchHardness(event.target.value)}>
          {
            Object.entries(HARDNESS).map(function([key, value]) {
              return (
                <option key={value} value={value}>
                  {value.substring(0, 1).toUpperCase() + value.substring(1).toLocaleLowerCase()}
                </option>
              );
            })
          }
        </select>
        <button id="btn-xo" onClick={togglePlayAs}>{`Play as ${computerPlayer}`}</button>
        <button id="btn-reset" onClick={doReset}>Reset</button>
      </div>
    </div>
  );

  function togglePlayAs() {

    setComputerPlayer(computerPlayer === PLAYER.X ? PLAYER.O : PLAYER.X);
    setHumanPlayer(humanPlayer === PLAYER.X ? PLAYER.O : PLAYER.X);
    setScore({ X: score.O, O: score.X });
    doReset();
  }

  function doReset() {

    setBoard(Array(9).fill(null));
    setCurrentPlayer(PLAYER.X);
    setWinner(null);
  }

  function switchHardness(hardness) {

    setHardness(hardness);
    doReset();
  }
}

export default Controls;