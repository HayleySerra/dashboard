import React, { useState } from 'react';
import Button from './Button';
import MainPage from './MainPage'; //component to switch to when button click
import WelcomeHeader from './WelcomeHeader'; //component to unmount when button click

function SwitchPage() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleClick = () => {
    setShowMainPage(true);
  };

  return (
    <header>
    <Button onClick={handleClick} />
    {showMainPage && <MainPage />}
    </header>
  );
}

export default SwitchPage;