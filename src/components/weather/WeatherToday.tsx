import { createDate } from "../../hooks/createDate"
import WeatherTodayItem from "./WeatherTodayItem"
import { WeatherDataSort } from "./WeatherDataSort"

const WeatherToday = () => {

    const date = createDate(Date.now())
    const weatherData = WeatherDataSort().today
    const city =  WeatherDataSort().city

    return (
        <div>
            <div className="wether-location-info">
                <div className="weather-location-city">
                    {city}
                </div>
                <div className="weather-location-date">
                    <span className="date-span">{date.Day }</span>
                    <span>{date.D}  {date.FullMonce}  {date.Y}</span>   
                </div>
            </div>
            <div className="time-map">
                <ul className="time-map-list">
                    <li>00-00</li>
                    <li>03-00</li>
                    <li>06-00</li>
                    <li>09-00</li>
                    <li>12-00</li>
                    <li>15-00</li>
                    <li>18-00</li>
                    <li>21-00</li>
                </ul>
            </div>
            <div className="weather-container">
                <ul className="weather-time-list">
                {weatherData?.map((elem) => 
                    <li  key = {elem.dt} > <WeatherTodayItem data = {elem} /> </li>
                )}
                </ul>
            </div>
        </div>
    )
}

export default WeatherToday