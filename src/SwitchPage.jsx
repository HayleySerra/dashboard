import React, { useState } from 'react';
import Button from './Button';
import MainHeader from './MainHeader'; //component to switch to when button click

function SwitchPage() {
  const [showMainHeader, setShowMainHeader] = useState(false);

  const handleClick = () => {
    setShowMainHeader(true);
  };

  return (
    <header>
    <Button onClick={handleClick} />
    {showMainHeader && <MainHeader />}
    </header>
  );
}

export default SwitchPage;