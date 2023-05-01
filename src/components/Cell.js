import React, { useContext } from "react";
import { AppContext } from "../App";
import "../style/cell.css" // this will be created in the next section

function Cell({row, column}) {
  const { cells, cellClick, gameOver, winnerCells } = useContext(AppContext)
  const currentVal = cells[row][column]

   // active and winner are used for style purposes
  return (
      <div className={"cell"
        + (!currentVal && !gameOver ? " active" : "")
        + (winnerCells[row][column] ? " winner" : "")
        + (gameOver ? " disabled" : "")}
        onClick={() => cellClick(row, column)}>
          <div>{currentVal}</div>
      </div>
  )
}

export default Cell