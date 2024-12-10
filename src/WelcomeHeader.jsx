import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './styles.css';

function WelcomeHeader() {
  const [title, setTitle] = useState('');
  const [cookies, setCookie] = useCookies(['myCookie']);

  useEffect(() => {
    setCookie('myCookie', title);
  }, [title, setCookie]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className='welcomeDiv'>
    <header>
      <h1 className="staticwelcome">Welcome! Please enter your name: </h1>
      <input className="nameInput" type="text" value={title} onChange={handleTitleChange} />
    </header>
    </div>
  );
}

export default WelcomeHeader;