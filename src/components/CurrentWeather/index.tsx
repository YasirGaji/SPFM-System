import { SunDim } from 'lucide-react';
import './style.css';

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Lagos</p>
          <p className="weather_description">Cloudy</p>
        </div>

        <div className="weather_icon">
          <SunDim size={70} color='yellow' />
        </div>
      </div>

      <div className='bottom'>
        <p className='temperature'>21°C</p>

        <div className='details'>
          <div className='parameter_row'>
            <span className='parameter_label top'>Details</span>
          </div>

          <div className='parameter_row'>
            <span className='parameter_label'>Feels like</span>
            <span className='parameter_values'>22°C</span>
          </div>

          <div className='parameter_row'>
            <span className='parameter_label'>Wind</span>
            <span className='parameter_values'>2 m/s</span>
          </div>

          <div className='parameter_row'>
            <span className='parameter_label'>Humidity</span>
            <span className='parameter_values'>18%</span>
          </div>

          <div className='parameter_row'>
            <span className='parameter_label'>Pressure</span>
            <span className='parameter_values'>12 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
