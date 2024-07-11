import React, { useEffect, useState } from 'react';
import './ClockComponent.css';

function ClockComponent()  {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);




  return (
    <div className="clock">
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>

  );
};

export default ClockComponent;