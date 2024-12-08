import React from 'react';
/*import './TimeButton.css';*/
import './styles.css';

const TimeButton = ({ onClick }) => {
  return <button className="timeButton" onClick={onClick}>toggle time</button>;
};

export default TimeButton;