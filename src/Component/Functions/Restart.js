import React from "react";

const Restart = ({ setBoard, setXisNext }) => {
  function Restart({ onClick }) {
    return (
      <button className="restart" onClick={onClick}>
        Play again
      </button>
    );
  }

  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          setBoard(Array(9).fill(null));
          setXisNext(true);
        }}
      />
    );
  }

  return (
    <>
      <h2>{renderRestartButton()}</h2>
    </>
  );
};

export default Restart;
