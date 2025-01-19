import { Square } from "./Square"

export function WinnerModal ({ winner, restartGame }) {
    if (winner === null) return null

    const winnerTxt = winner === false? 'DRAW' : 'WINNER: '

    return (
        <section className="winner">
          <div className="text">
            <h2>{winnerTxt}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={restartGame}>Restart</button>
            </footer>
          </div>
        </section>
    )
}