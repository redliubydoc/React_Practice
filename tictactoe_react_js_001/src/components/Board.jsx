import { useContext } from "react";
import Cell from "./Cell";
import GameContext from "../GameContext";

import "./Board.css";


function Board() {

  const { board } = useContext(GameContext);

  return(
    <div className="component-board">
      <div className="container-board">
        <div className="board">
          {
            board.map(function name(elem, indx) {
              return (<Cell key={indx} elem={elem} indx={indx}></Cell>);
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Board;