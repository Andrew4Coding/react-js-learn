import { useState } from 'react'
import './App.css'

function Square({value, onSquareClicked}) {
  return <>
    <div className='Square' onClick={onSquareClicked}>
      {value}
    </div>
  </>
}

function Board() {
  const [square, setsquare] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)
  const [win, setWin] = useState(false)
  const winList = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  function HandleClick(i){
    const nextSquare = square.slice()
    if (!nextSquare[i]){
      if (player){
        nextSquare[i] = '❌'
      }
      else{
        nextSquare[i] = '⭕'
      }
    }
    // Set Current Player
    setPlayer(!player)
    setsquare(nextSquare)
    console.log(nextSquare)

    for (const [a, b, c] of winList){
      if (nextSquare[a] && nextSquare[a] === nextSquare[b] && nextSquare[b] === nextSquare[c]){
        console.log(a, b, c)
        setWin(true)
      }
    }
  }
  return <>
      <h2>{player ? 'Player X' : 'Player O'}</h2>
      <h2>{win ? 'WIN' : ''}</h2>
      <div className='wrapper'>
        <div className='board-row'>
          <Square value={square[0]} onSquareClicked={() => HandleClick(0)}/>
          <Square value={square[1]} onSquareClicked={() => HandleClick(1)}/>
          <Square value={square[2]} onSquareClicked={() => HandleClick(2)}/>
        </div>
        <div className='board-row'>
          <Square value={square[3]} onSquareClicked={() => HandleClick(3)}/>
          <Square value={square[4]} onSquareClicked={() => HandleClick(4)}/>
          <Square value={square[5]} onSquareClicked={() => HandleClick(5)}/>
        </div>
        <div className='board-row'>
          <Square value={square[6]} onSquareClicked={() => HandleClick(6)}/>
          <Square value={square[7]} onSquareClicked={() => HandleClick(7)}/>
          <Square value={square[8]} onSquareClicked={() => HandleClick(8)}/>
        </div>
      </div>
  </>
}

function App() {
  const [kotak, setKotak] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  const [win, setWin] = useState('')
  const winList = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  function handleClick(i){
    const nextSquares = kotak.slice()
    if (kotak[i] == null){
      if (isX) {
        nextSquares[i] = 'X'
      }
      else{
        nextSquares[i] = 'O'
      }
      setIsX(!isX)
    }
    for (const [a, b, c] of winList){
      if ((nextSquares[a] == nextSquares[b]) && (nextSquares[b] == nextSquares[c]) &&
          nextSquares[a] != null && nextSquares[b] != null && nextSquares[c] != null){
        setWin(`Player ${nextSquares[i]} Win!`)
      }
    }
    setKotak(nextSquares)
    console.log(nextSquares, win)
  }

  
  return (
    <>
      <div className='wrapper'>
        <div className='grid-container'>
          <Square value={kotak[0]} onSquareClicked={() => handleClick(0)}/>
          <Square value={kotak[1]} onSquareClicked={() => handleClick(1)}/>
          <Square value={kotak[2]} onSquareClicked={() => handleClick(2)}/>
          <Square value={kotak[3]} onSquareClicked={() => handleClick(3)}/>
          <Square value={kotak[4]} onSquareClicked={() => handleClick(4)}/>
          <Square value={kotak[5]} onSquareClicked={() => handleClick(5)}/>
          <Square value={kotak[6]} onSquareClicked={() => handleClick(6)}/>
          <Square value={kotak[7]} onSquareClicked={() => handleClick(7)}/>
          <Square value={kotak[8]} onSquareClicked={() => handleClick(8)}/>
        </div>
      </div>
    </>
  )
}

export default Board
