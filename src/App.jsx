/* eslint-disable no-useless-assignment */
import Board from "./components/Board";
import CurrentPlayer from "./components/CurrentPlayer";
import { useState } from "react";
import GameStatus from "./components/GameStatus";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isDraw, setIsDraw] = useState(false);

  function checkLines(board) {
    for(let i = 0; i < 3; i++) {
      let equal = true;
      let first = board[i*3];
      if(first === null) {
        equal = false;
        continue;
      }
      for(let j = i*3; j < i*3 + 3; j++) {
         if (board[j] !== first)
          equal = false;
      }
      if (equal) return true;
    }
    return false;
  }

  function checkColumns(board) {
    for(let i = 0; i < 3; i++) {
      let equal = true;
      let first = board[i];
      if(first === null) {
        equal = false;
        continue;
      }
      for(let j = i; j < 9; j += 3) {
        if(board[j] !== first)
          equal = false
      }
      if(equal) return true;
    }
    return false;
  }

  function checkMain(board) {
    let first = board[0];
    if (first === null)
      return false;
    for(let i = 0; i < 9; i += 4) {
      if(board[i] !== first)
        return false;
    }
    return true;
  }
  function checkSecond(board) {
    let first = board[2];
    if (first === null)
      return false;
    for(let i = 2; i < 7; i += 2) {
      if (board[i] !== first)
        return false;
    }
    return true;
  }
  function checkDiagonal(board) {
    return checkMain(board) || checkSecond(board);
  }

  function checkWinner(board) {
    if(checkLines(board) || checkColumns(board) || checkDiagonal(board))
      return currentPlayer;
    return false;
  }

  function handleSquareClick(index) {
    if (winner)
      return;
    if (board[index] !== null)
      return;

    const newBoard = board.map((value, i) => {
      if (i === index)
        return currentPlayer;
      return value;
    })

    setBoard(newBoard);
    const result = checkWinner(newBoard);
    if (result){
      setWinner(result);
      return;
    }
    if(newBoard.every(e => e === "X" || e === "O")) {
      setIsDraw(true);
      return;
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }

  
  return (
    <main className={`min-h-screen bg-[#100B1A] flex flex-col gap-8 items-center justify-center transition-colors duration-700
      ${currentPlayer === "X"
        ? "bg-[#211333]"
        : "bg-[#151D3B]"}
    `}>
      {winner || isDraw ? (
        <GameStatus winner={winner} isDraw={isDraw} />
      ) : (
        <CurrentPlayer player={currentPlayer} />
      )}
      
      <Board board={board} onSquareClick={handleSquareClick} />
    </main>
  );
}

export default App;
