import React, { useState } from 'react';
import Button from './Button';
import MainHeader from './MainHeader';
import WelcomeHeader from './WelcomeHeader';
import './styles.css';

function SwitchHeader() {
  const [isWelcomeHeaderVisible, setWelcomeHeaderVisibility] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const [isButtonVisible, setButtonVisibility] = useState(true);

  const toggleComponent = () => {
    setIsVisible(false);
    setButtonVisibility(false);

    setTimeout(() => {
      setWelcomeHeaderVisibility(!isWelcomeHeaderVisible);
      setIsVisible(true);
    }, 500);
  };

  return (
    <div className="switch-header-container">
    <div className={`header-container ${isVisible ? '' : 'sliding-out'}`}>
      {isWelcomeHeaderVisible ? <WelcomeHeader /> : <MainHeader />}
    </div>
    {isButtonVisible && (
      <Button
        onClick={toggleComponent}
        className={`transition-button ${isButtonVisible ? '' : 'slide-out'}`}
        />
    )}
  </div>
  );
}

export default SwitchHeader;