import { useContext } from "react";
import { RESULT, PLAYER } from "../GameConstants";
import GameContext from "../GameContext";

import "./Overlay.css";


function Overlay() {

  const { winner, setBoard, setCurrentPlayer, setWinner } = useContext(GameContext);
  let message = "";

  switch (winner) {
    case RESULT.X:
      message = `${winner} has won 🎉🎉🎉`;
      break;

    case RESULT.O:
      message = `${winner} has won 🎉🎉🎉`;
      break;

    case RESULT.T:
      message = "It's a tie :)";
      break;
  }

  return (
    <div className="component-overlay">
      <div className={"overlay" + (winner === null ? " hide" : "")}
        onClick={hideOverlay}>
        <span>{message}</span>
      </div>
    </div>
  );

  function hideOverlay() {

    setBoard(Array(9).fill(null));
    setCurrentPlayer(PLAYER.X);
    setWinner(null);
  }
}

export default Overlay;