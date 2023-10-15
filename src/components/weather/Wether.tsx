import { useDispatch, useSelector } from "react-redux"
import { getWeather } from "../../store/slices/weatherSlice"
import WeatherHeader from "./WeatherHeader"
import { Outlet } from 'react-router-dom'
import './Weather.css'


const Weather = () => {

    const dispatch = useDispatch()
    dispatch(getWeather())
    

    return (

        <div>
            <WeatherHeader/>
            <main className="main-weather">
                <Outlet/>
            </main>
        </div>
    )
}

export default Weather