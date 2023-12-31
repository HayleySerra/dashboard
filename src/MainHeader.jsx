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
    <div>
      <h1 className="mainheader">Welcome to dashboard, {cookies.myCookie}.</h1>
      <WeatherComponent />
      <NASAComponent />
      <CreateNewTask />
      <ClockComponent />
      <HabitComponent />
    </div>
  );
}

export default MainHeader;