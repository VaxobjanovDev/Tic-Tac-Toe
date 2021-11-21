import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../Helper";
import './Main.css'



const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
const [xIsNext, setXisNext] = useState(true);
const winner = calculateWinner(board);

const handleClick = (i) => {
	const boardCopy = [...board];
	// If user click an occupied square or if game is won, return
	if (winner || boardCopy[i]) return;
	// Put an X or an O in the clicked square
	boardCopy[i] = xIsNext ? "X" : "O";
	setBoard(boardCopy);
	setXisNext(!xIsNext);
};
  return <>
  
  <div className='header'>
    <h1>
      {winner ? "Winner: " + winner : "Player: " + (xIsNext ? "X" : "O"?"O":null)}
    </h1>	
  </div>
	<Board squares={board} onClick={handleClick} />
</>
};

export default Game;
