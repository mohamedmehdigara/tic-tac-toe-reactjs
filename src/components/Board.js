
import React, { useState } from "react";
import Cell from "./Cell";
import "../style/board.css";

function Board() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleCellClick = (index) => {
    if (cells[index] === null) {
      const newCells = [...cells];
      newCells[index] = isXTurn ? "X" : "O";
      setCells(newCells);
      setIsXTurn(!isXTurn);
    }
  };

  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleCellClick(index)} />
      ))}
    </div>
  );
}

export default Board;
