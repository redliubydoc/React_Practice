import GameContext from "./GameContext";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import { useEffect, useState } from "react";
import { HARDNESS, PLAYER, RESULT } from "./GameConstants";
import GameEngine from "./GameEngine";
import Overlay from "./components/Overlay";

import "./App.css";


function App() {

  const [hardness, setHardness] = useState(HARDNESS.HARD);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.X);
  const [computerPlayer, setComputerPlayer] = useState(PLAYER.X);
  const [humanPlayer, setHumanPlayer] = useState(PLAYER.O);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState(null);

  useEffect(function () {
    
    if (winner !== null) return;

    if (currentPlayer === computerPlayer) {

      const newBoard = [...board];
      const nextMove = hardness === HARDNESS.EASY ? 
        GameEngine.getRandomMove(newBoard).cell : 
        GameEngine.getBestMove(newBoard, true, computerPlayer, humanPlayer).cell;
  
      newBoard[nextMove] = computerPlayer;
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
      setCurrentPlayer(humanPlayer);
    }

  }, [board]);
  
  return (
    <div className="component-app">
      <div className="container-main">
        <GameContext.Provider value={{
          currentPlayer, setCurrentPlayer,
          hardness, setHardness,
          computerPlayer, setComputerPlayer,
          humanPlayer, setHumanPlayer,
          board, setBoard,
          score, setScore,
          winner, setWinner
        }}>
          <Overlay></Overlay>
          <ScoreBoard></ScoreBoard>
          <Board></Board>
          <Controls></Controls>
        </GameContext.Provider>
      </div>
    </div>
  );
}

export default App;
