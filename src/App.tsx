/* eslint-disable no-unsafe-optional-chaining */
import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (
    searchData: string | { label: string; value: string }
  ) => {
    let lat, lon;
    if (typeof searchData === 'string') {
      [lat, lon] = searchData.split(' ');
    } else {
      [lat, lon] = searchData.value.split(' ');
    }

    const CurrentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&exclude=hourly&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([CurrentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({
          city: typeof searchData === 'string' ? '' : searchData.label,
          ...weatherResponse,
        });
        setForecast({
          city: typeof searchData === 'string' ? '' : searchData.label,
          ...forecastResponse,
        });
      })

      .catch((err) => console.log(err));
  };

  console.log('The Responses:', currentWeather, forecast);

  return (
    <>
      <div className="container">
        <div className="title">
          <p>
            Solar Power Forecasting and Monitoring System
            <br /> <span>(SPFM SYSTEM)</span>
          </p>
        </div>{' '}
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
    </>
  );
}

export default App;
