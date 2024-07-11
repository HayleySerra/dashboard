import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherComponent.css';

function WeatherComponent()  {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => { //async means the function will rtn promise and lets you use await to wait for async operations like API
      try {
        const response = await axios.get(
          'https://api.weatherapi.com/v1/current.json',
          {
            params: {
              key: '66496ca071c94a30aec203637231007',
              q: 'Toronto', // make it unique to the user?
            },
          }
        );

        setWeatherData(response.data);

      } catch (error) {
        console.error(error);
      }

    };

    fetchData(); //write fetch and then use it still in the useEffect
  }, []);




  return (
    <div className="we">
      {weatherData ? ( //if weather data then show it, if not wait for it 
        <div className="weather">
            <h2>{weatherData.location.name}, {weatherData.location.region}</h2>
          <img src={weatherData.current.condition.icon}></img>
          <p>{weatherData.current.temp_c}°C and {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherComponent;