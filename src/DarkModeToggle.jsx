import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import React,  { useState, useEffect } from 'react';



const DarkModeToggle = () => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(savedMode);
  
    const toggleDarkMode = () => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem('darkMode', newMode);
    };
  
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [darkMode]);
  
    return (
      <button onClick={toggleDarkMode} className="dark-mode-toggle-btn" aria-label="Toggle Dark Mode">
        {}
        {darkMode ? <FontAwesomeIcon icon={faSun} size="3x"/> : <FontAwesomeIcon icon={faMoon} size="3x"/>}
      </button>
    );
  };
  
  export default DarkModeToggle;