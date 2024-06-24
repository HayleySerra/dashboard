import React, { useEffect, useState } from 'react';
import './ClockComponent.css';

function ClockComponent()  {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [is12HourFormat, setIs12HourFormat] = useState(true);

  const toggleTimeFormat = () => {
    setIs12HourFormat(!is12HourFormat);
  };

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
       <button className="timeButton" onClick={toggleTimeFormat}>
        {is12HourFormat ? <p>{currentTime.toLocaleTimeString('en-GB')}</p> : <p>{currentTime.toLocaleTimeString()}</p>}
      </button>
  </div>

  );
};

export default ClockComponent;