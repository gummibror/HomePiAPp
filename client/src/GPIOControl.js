import React, { useState } from 'react';

const GPIOControl = () => {
  const [status, setStatus] = useState('');

  const togglePin = async (pin, action) => {
    try {
      const response = await fetch(`/gpio/${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin })
      });

      const data = await response.json();
      setStatus(data.message);
    } catch (err) {
      console.error('Failed to toggle pin:', err);
      setStatus('Error communicating with server');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>GPIO Control</h2>
      <button onClick={() => togglePin(17, 'on')}>Turn ON GPIO 17</button>
      <button onClick={() => togglePin(17, 'off')}>Turn OFF GPIO 17</button>
      <p>Status: {status}</p>
    </div>
  );
};

export default GPIOControl;
