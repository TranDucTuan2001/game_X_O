import React from "react";

function Square({ value, onSquareClick }) {
//   gán biến màu cho X và O
    const style = {
    color: value === "X" ? "blue" : value === "O" ? "red" : "black",
  };

  return (
    <button className="square" onClick={onSquareClick} style={style}>
      {value}
    </button>
  );
}

export default Square;