import Animation from "../Animation/Animation";

import React from "react";

const Winner = ({ winner, board, xIsNext }) => {
  function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }

  function getStatus() {
    if (winner) {
      return (
        <div>
          <h1>{`Winner: ${winner}`}</h1>
          <Animation />
        </div>
      );
    } else if (isBoardFull(board)) {
      return "Draw!";
    } else {
      return "Next player: " + (xIsNext ? "X" : "O");
    }
  }

  return (
    <>
      <h1>{getStatus()}</h1>
    </>
  );
};

export default Winner;
