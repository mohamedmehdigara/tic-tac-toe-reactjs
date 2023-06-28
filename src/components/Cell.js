import React, { useContext } from "react";
import { AppContext } from "../App";
import "../style/cell.css";

function Cell({ row, column }) {
  const { cells, cellClick, gameOver, winnerCells } = useContext(AppContext);
  const currentVal = cells[row * 3 + column];

  return (
    <div
      className={`cell ${
        !currentVal && !gameOver ? "active" : ""
      } ${winnerCells[row * 3 + column] ? "winner" : ""} ${
        gameOver ? "disabled" : ""
      }`}
      onClick={() => cellClick(row, column)}
    >
      <div>{currentVal}</div>
    </div>
  );
}

export default Cell;
