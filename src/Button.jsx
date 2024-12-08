import React from 'react';
/*import './Button.css';*/
import './styles.css';

const Button = ({ onClick }) => {
  return <div className="welcomeDiv"><button className="welcomeButton" onClick={onClick}>Lets go!</button></div>;
};

export default Button;