import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [randomNum, setRandomNum] = useState(null);

  async function generateRandomNumber() {
    try {
      const response = await fetch('https://api.cnot.xyz/qrng', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({length: 10})
      });
      
      const json = await response.json();
      setRandomNum(json.random_num);
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div style={{ backgroundColor: '#F4C4F3', padding: '20px' }}>
      <h1 style={{ color: '#8A2BE2', textAlign: 'center' }}>
        Generate Random Number
      </h1>
      <button
        onClick={generateRandomNumber}
        style={{
          backgroundColor: '#FF00FF',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Generate
      </button>
      <p style={{ color: '#8A2BE2', fontSize: '18px', marginTop: '20px' }}>
        Random number: {randomNum}
      </p>
    </div>




  );
}
export default RandomNumberGenerator;