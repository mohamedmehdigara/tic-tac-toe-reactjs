import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import '../style/header.css'
import Playing from "./Playing";
import End from "./End";
import Winner from "./Winner";

function Header() {
 
  const { currentChar, winner, gameOver } = useContext(AppContext)


   // This is equivalent of a ternary if to conditionally show something

   // { !winner && !gameOver && <Playing /> }

   // it will show the Playing component if has no winner and the have not ended
  return (
      <div className="header">
          { !winner && !gameOver && <Playing /> }
          { gameOver && !winner && <End /> }
          { winner && <Winner /> }
      </div>
  )
}

export default Header