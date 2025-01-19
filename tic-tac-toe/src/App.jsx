import { useState } from "react"
import confetti from "canvas-confetti"
import { TURN, COMBOS } from "./const.js"

import { Square } from "./components/Square"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(null)

  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
  }

  const checkEndGame = (board) => {
    return board.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    // renderizar el board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar de turno
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
    // checkear ganador
    const newWinner =  checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)) setWinner(false)
  }

  const checkWinner = (boardToCheck) => {
    for (const combo of COMBOS) {
      const [a,b,c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) return boardToCheck[a]
    }
    return null
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={restartGame}>Restart</button>

      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
              key={index}
              updateBoard={updateBoard}
              index={index}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
        <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
      </section>      

      <WinnerModal winner={winner} restartGame={restartGame} />
    </main>
  )
}

export default App
