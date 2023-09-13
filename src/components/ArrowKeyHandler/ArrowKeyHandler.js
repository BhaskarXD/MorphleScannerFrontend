import React, { useEffect } from 'react';

const ArrowKeyHandler = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.startsWith('Arrow')) {
        const direction = e.key.replace('Arrow', '').toLowerCase();
        sendArrowKeyPress(direction);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const sendArrowKeyPress = (direction) => {
    console.log("inside post");
    fetch('http://localhost:8080/api/arrowKeyPress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ direction }),
    })
      .then((response) => {
      })
      .catch((error) => {
        console.error('Error sending arrow key press:', error);
      });
  };

  return null; 
};

export default ArrowKeyHandler;
