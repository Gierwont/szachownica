import React, { useState } from 'react';
import styles from './styles.module.css';

const Chessboard = () => {
  const [board, setBoard] = useState([
    [false, true, false, true],
    [true, false, true, false],
    [false, true, false, true],
    [true, false, true, false],
  ]);

  const handleCellClick = (row, col) => {
    const newBoard = [...board];
    newBoard[row][col] = !newBoard[row][col];
    setBoard(newBoard);
  };

  return (
    <div className={styles.chessboard}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`${styles.cell} ${cell ? styles.white : styles.black}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Chessboard;
