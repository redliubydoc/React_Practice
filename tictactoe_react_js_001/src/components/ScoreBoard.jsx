import { useContext } from "react";
import GameContext from "../GameContext";

import "./ScoreBoard.css";


function ScoreBoard() {

  const { score } = useContext(GameContext);

  return (
    <div className="component-score-board">
      <div className="container-score-board">
        <div className="container-score-x">{score.X}</div>
        <div className="container-score-o">{score.O}</div>
      </div>
    </div>
  );
}

export default ScoreBoard;