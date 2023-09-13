import React from 'react';
import './Legend.css';

const Legend = () => {
  return (
    <div className="legend-container">
      <h3>Matrix/Grid Legend</h3>
      <ul>
        <li><span className="legend-color red"></span>Current Cell - Red Border</li>
        <li><span className="legend-color grey"></span>Unvisited - Grey</li>
        <li><span className="legend-color yellow"></span>Visited but Not Focused/Captured - Yellow</li>
        <li><span className="legend-color light-blue"></span>Focusing - Light Blue</li>
        <li><span className="legend-color dark-blue"></span>Focused - Dark Blue</li>
        <li><span className="legend-color light-green"></span>Capturing - Light Green</li>
        <li><span className="legend-color dark-green"></span>Captured - Dark Green</li>
      </ul>
    </div>
  );
};

export default Legend;
