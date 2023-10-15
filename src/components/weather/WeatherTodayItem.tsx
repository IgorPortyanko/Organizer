import { weatherInfoIf } from "../models/models"
import SouthIcon from '@mui/icons-material/South';

interface Props {
    data: weatherInfoIf; 
  }

const WeatherTodayItem = (props: Props) => {

    return (
        <div className="weather-today-item">
            <div className="weather-today-item-icon">
                <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="" />
            </div>
            <div className="weather-today-item-temperature">
                {Math.round(props.data.main.temp)-273}
                <img src="../img/celsius.png" alt="" className="celsius" />
            </div>
            <div className="weather-today-item-wind">
                <div className="wind-speed">
                    { props.data.wind.speed} <span style={{fontSize: '18px'}}>м/с</span>
                </div>

                <div className="wind-arrow" style={{ transform: `rotate(${props.data.wind.deg}deg)` }}>
                    <SouthIcon sx={{ color: 'blue' }}/>
                </div>
            
            </div>
        </div>
    )
}

export default WeatherTodayItem