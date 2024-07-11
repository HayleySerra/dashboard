import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import './WelcomeHeader.css';

function WelcomeHeader() {
  const [title, setTitle] = useState(''); //this shows in the input field so make it static another way
  const [cookies, setCookie] = useCookies(['myCookie']);

  useEffect(() => {
    setCookie('myCookie', title);
  }, [title, setCookie]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <header>
      <h2 className="welcomeheader">{title}</h2>
      <h1 className="staticwelcome">Welcome! Please enter your name: </h1>
      <input className="nameInput" type="text" value={title} onChange={handleTitleChange} />
    </header>
  );
}

export default WelcomeHeader;