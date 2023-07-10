import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import SwitchPage from './SwitchPage';

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
      <h1>{title}</h1>
      <input type="text" value={title} onChange={handleTitleChange} />
      <SwitchPage />
    </header>
  );
}

export default WelcomeHeader;