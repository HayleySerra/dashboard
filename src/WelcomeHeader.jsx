import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './WelcomeHeader.css';

function WelcomeHeader() {
  const [title, setTitle] = useState('Welcome! Please enter your name: ');
  const [cookies, setCookie] = useCookies(['myCookie']);

  useEffect(() => {
    setCookie('myCookie', title);
  }, [title, setCookie]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <header>
      <h1 className="welcomeheader">{title}</h1>
      <input type="text" value={title} onChange={handleTitleChange} />
    </header>
  );
}

export default WelcomeHeader;