import React, { useState, useEffect } from 'react';
import './Grid.css';
import ArrowKeyHandler from '../ArrowKeyHandler/ArrowKeyHandler';
const Grid = () => {
  const [matrix, setMatrix] = useState([]);
  const [currentCell, setCurrentCell] = useState({ row: null, col: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/getMatrix');
        const data = await response.json();
        setMatrix(data.matrix);
        setCurrentCell(data.currentCell);
      } catch (error) {
        console.error('Error fetching matrix:', error);
      }
    };

    const interval = setInterval(fetchData, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid-container">
        <ArrowKeyHandler/>
      {matrix.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div className={`cell ${cell} ${
              rowIndex === currentCell[0] && colIndex === currentCell[1] ? 'current-cell' : ''
              }`} 
              key={colIndex}>
              <div className="border"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
