import React, { useState, createContext, useEffect } from 'react';
import Board from './components/Board';
import Header from './components/Header';
import './App.css';

export const AppContext = createContext();

function App() {
  const emptyGame = [["", "", ""], ["", "", ""], ["", "", ""]];
  const [cells, setCells] = useState(emptyGame);
  const [winnerCells, setWinnerCells] = useState([[], [], []]);

  const X = "X";
  const O = "O";
  const [currentChar, setCurrentChar] = useState(X);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    isGameOver();
  }, [cells]);

  function cellClick(row, column) {
    if (gameOver || winner || cells[row][column] !== "") {
      return;
    }
  
    const newCells = cells.map((rowArr) => [...rowArr]);
    newCells[row][column] = currentChar;
  
    setCells(newCells);
    console.log("Updated cells:", newCells); // Add this line to check the updated cells array
    changeChar();
  }
    
    
  
  

  function changeChar() {
    setCurrentChar((prevChar) => (prevChar === X ? O : X));
  }

  function reset() {
    setCells(emptyGame);
    setWinner("");
    setGameOver(false);
    setWinnerCells([[], [], []]);
  }

  function isGameOver() {
    for (let i = 0; i < 3; i++) {
      if (areTheSameInRow(i) || areTheSameInColumn(i)) {
        return;
      }
    }

    if (!cells.flat().includes("")) {
      endGame("");
    }

    areTheSameInDiagonal();
  }

  function endGame(winner) {
    if (winner !== "") {
      setWinner(winner);
    }
    setGameOver(true);
  }

  function areTheSameInRow(row) {
    if (
      cells[row][0] !== "" &&
      cells[row][0] === cells[row][1] &&
      cells[row][0] === cells[row][2]
    ) {
      endGame(cells[row][0]);

      const newWinner = [[], [], []];
      newWinner[row][0] = true;
      newWinner[row][1] = true;
      newWinner[row][2] = true;
      setWinnerCells(newWinner);
      return true;
    }
    return false;
  }

  function areTheSameInColumn(column) {
    if (
      cells[0][column] !== "" &&
      cells[0][column] === cells[1][column] &&
      cells[0][column] === cells[2][column]
    ) {
      endGame(cells[0][column]);

      const newWinner = [[], [], []];
      newWinner[0][column] = true;
      newWinner[1][column] = true;
      newWinner[2][column] = true;
      setWinnerCells(newWinner);
      return true;
    }
    return false;
  }

  function areTheSameInDiagonal() {
    if (
      cells[1][1] !== "" &&
      ((cells[0][0] === cells[1][1] && cells[0][0] === cells[2][2]) ||
        (cells[2][0] === cells[1][1] && cells[2][0] === cells[0][2]))
    ) {
      endGame(cells[1][1]);

      const newWinner = [[], [], []];
      if (cells[0][0] === cells[1][1] && cells[0][0] === cells[2][2]) {
        newWinner[0][0] = true;
        newWinner[1][1] = true;
        newWinner[2][2] = true;
      } else {
        newWinner[0][2] = true;
        newWinner[1][1] = true;
        newWinner[2][0] = true;
      }
      setWinnerCells(newWinner);
      return true;
    }
    return false;
  }

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider
          value={{
            cells,
            setCells,
            cellClick,
            currentChar,
            winner,
            gameOver,
            winnerCells,
          }}
        >
          <Header />
          <Board />
        </AppContext.Provider>

        <button className="btn-reset" onClick={reset}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
