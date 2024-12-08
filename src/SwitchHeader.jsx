import React, { useState } from 'react';
import Button from './Button';
import MainHeader from './MainHeader';
import WelcomeHeader from './WelcomeHeader';

function SwitchHeader() {
  const [isWelcomeHeaderVisible, setWelcomeHeaderVisibility] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const toggleComponent = () => {
    setWelcomeHeaderVisibility(!isWelcomeHeaderVisible);
    setIsVisible(false);
  };

  return (
    <div> 
      {isWelcomeHeaderVisible ? <WelcomeHeader /> : <MainHeader />}
      {isVisible && ( <Button onClick={toggleComponent}></Button>     )}
    </div>
  );
}

export default SwitchHeader;