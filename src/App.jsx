import './App.css';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import MainPage from './MainPage';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [cookies, setCookie] = useCookies(['myCookie']);
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
  }

  useEffect(() => {
    setCookie('myCookie', inputValue);
  }, [inputValue, setCookie]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Welcome! Please enter your name: </h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <h1>{inputValue}</h1>
      {showComponent ? <MainPage /> : null}
      <button onClick={handleButtonClick}>Get Started</button>
    </div>
  )
}

export default App;
