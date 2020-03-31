import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner } from '../helpers';

const Board = () => {
  const [boardSquare, setBoardSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = index => {
    const squares = [...boardSquare];

    if (calculateWinner(boardSquare) || squares[index]) return;

    squares[index] = xIsNext ? 'X' : 'O';

    setBoardSquare(squares);
    setXisNext(!xIsNext);
  };
  const renderSquare = index => {
    return <Square value={boardSquare[index]} onClick={() => handleClick(index)} />;
  };
  let status;
  const winner = calculateWinner(boardSquare);
  status = winner ? `Winner is: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
  return (
    <div className="board">
      <h1>Tic Tac Toe</h1>
      <div className="status"> {status}</div>
      <div>
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
