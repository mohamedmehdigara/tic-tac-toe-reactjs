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
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((column) => (
          <Cell
            key={`${row}-${column}`}
            row={row}
            column={column}
            value={cells[row * 3 + column]}
            onClick={handleCellClick}
          />
        ))
      )}
    </div>
  );
}

export default Board;

