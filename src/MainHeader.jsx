import React from 'react';
import { useCookies } from 'react-cookie';
import WeatherComponent from './WeatherComponent';
import './styles.css';
import NASAComponent from './NASAComponent';
import CreateNewTask from './CreateNewTask';
import ClockComponent from './ClockComponent';
import HabitComponent from './HabitComponent';
import DarkModeToggle from './DarkModeToggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function MainHeader() {
  const [cookies] = useCookies(['myCookie']);

  return (
    <div class="container">

      <div class="navbar">
        <DarkModeToggle/>
      </div>

      <div class="topbar">
        <h1 className="mainheader">Welcome to dashboard, {cookies.myCookie}.</h1>
        <ClockComponent />
      </div>


      <div className="columns">
        <div className="column is-half">
          <div className="box"><CreateNewTask /></div>
        </div>


        <div className="column is-half">
          <div className="box"><HabitComponent /></div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-half">
          <div className="box has-text-centered"
          ><NASAComponent /></div>
        </div>


        <div className="column is-half">
          <div className="box is-flex is-justify-content-center is-align-items-center"
          ><WeatherComponent /></div>
        </div>
      </div>
      







    </div>
  );
}

export default MainHeader;