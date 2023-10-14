import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return <button className="welcomeButton" onClick={onClick}>Lets go!</button>;
};

export default Button;