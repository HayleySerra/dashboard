import React from 'react';
import { useCookies } from 'react-cookie';
import WeatherComponent from './WeatherComponent';
import './MainHeader.css';

function MainHeader() {
  const [cookies] = useCookies(['myCookie']);
  return (
    <div>
      <h1 className="mainheader">Welcome to dashboard {cookies.myCookie}</h1>
      <WeatherComponent />
    </div>
  );
}

export default MainHeader;