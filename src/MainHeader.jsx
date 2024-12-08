import React from 'react';
import { useCookies } from 'react-cookie';
import WeatherComponent from './WeatherComponent';
/*import './MainHeader.css';*/
import './styles.css';
import NASAComponent from './NASAComponent';
import CreateNewTask from './CreateNewTask';
import ClockComponent from './ClockComponent';
import HabitComponent from './HabitComponent';

function MainHeader() {
  const [cookies] = useCookies(['myCookie']);
  return (
    <div class="container">

      <div class="navbar"></div>

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
                style={{
                  width: `300px`,
                  height: `200px`,
                }}
          ><NASAComponent /></div>
        </div>
        <div className="column is-half">
          <div className="box is-flex is-justify-content-center is-align-items-center"
               style={{
                width: `180px`,
                height: `200px`,
                }}
          ><WeatherComponent /></div>
        </div>
      </div>
      







    </div>
  );
}

export default MainHeader;