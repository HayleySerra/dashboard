import React from 'react';
import { useCookies } from 'react-cookie';
import WeatherComponent from './WeatherComponent';
import './MainHeader.css';
import NASAComponent from './NASAComponent';
import CreateNewTask from './CreateNewTask';
import ClockComponent from './ClockComponent';
import HabitComponent from './HabitComponent';

function MainHeader() {
  const [cookies] = useCookies(['myCookie']);
  return (
    <div class="container">
      <div class="topbar">
        <h1 className="mainheader">Welcome to dashboard, {cookies.myCookie}.</h1>
        <ClockComponent />
        <WeatherComponent />
      </div>
      <div class="mainbar">
        <NASAComponent />
        <CreateNewTask />
        <HabitComponent />
      </div>
    </div>
  );
}

export default MainHeader;