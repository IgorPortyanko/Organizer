import { useSelector } from "react-redux"
import { RootState } from "../../store/slices/weatherSlice"
import { weatherInfoIf } from "../models/models"

export const WeatherDataSort = () => {
    
    const weatherToFiveDay = useSelector((state: RootState) => state.weather.weather)
    const date1 = new Date(Date.now())

    const weatherToday = () => {
        const weatherTodaySort: weatherInfoIf[] = []
        weatherToFiveDay.weatherInfo?.forEach((elem => {
            const date2 = new Date((elem.dt*1000-10800000))
            if (date2.getDate() === (date1.getDate())) {
                weatherTodaySort.push(elem)
            }
        }))

        return weatherTodaySort
    }

    const weatherTomorrow = () => {
        const weatherTomorrowSort: weatherInfoIf[] = []

        weatherToFiveDay.weatherInfo?.forEach((elem => {
            const date2 = new Date((elem.dt*1000-10800000))

            if (date2.getDate() === (date1.getDate()+1)) {
            weatherTomorrowSort.push(elem)
            }
        }))

        return weatherTomorrowSort
    }

    const sortData = {
        today: weatherToday(),
        tomorrow: weatherTomorrow(),
        all: weatherToFiveDay,
        city: weatherToFiveDay.city
    }


    return sortData

}