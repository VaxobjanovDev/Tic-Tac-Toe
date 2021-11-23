import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./Functions/Helper";
import Restart from "./Functions/Restart";
import Winner from "./Functions/Winner";
import "./Main.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  return (
    <>
      <div className="header">
        <Winner winner={winner} board={board} xIsNext={xIsNext} />
        <Restart setBoard={setBoard} setXisNext={setXisNext} />
      </div>
      <Board squares={board} onClick={handleClick} />
    </>
  );
};

export default Game;
