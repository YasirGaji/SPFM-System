/* eslint-disable @typescript-eslint/no-explicit-any */
// import { SunDim } from 'lucide-react';
import './style.css';

const CurrentWeather = ({ data }: any) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather_description">{data.weather[0].description}</p>
        </div>

        <img className="weather_icon" alt="weather" src={`icons/${data.weather[0].icon}.png`} />

        <div >
          {/* <SunDim size={70} color='yellow' /> */}
        </div>
      </div>

      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>

        <div className="details">
          <div className="parameter_row">
            <span className="parameter_label top">Details</span>
          </div>

          <div className="parameter_row">
            <span className="parameter_label">Feels like</span>
            <span className="parameter_values">{Math.round(data.main.feels_like)}°C</span>
          </div>

          <div className="parameter_row">
            <span className="parameter_label">Wind</span>
            <span className="parameter_values">{data.wind.speed} m/s</span>
          </div>

          <div className="parameter_row">
            <span className="parameter_label">Humidity</span>
            <span className="parameter_values">{data.main.humidity}%</span>
          </div>

          <div className="parameter_row">
            <span className="parameter_label">Pressure</span>
            <span className="parameter_values">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
