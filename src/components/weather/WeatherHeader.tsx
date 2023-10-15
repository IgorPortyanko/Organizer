import { Link } from 'react-router-dom'

const WeatherHeader = () => {

    return(
        <div className="weather-header">
            <div className="weather-header-container">
                <div className="input-city-div">
                    <input 
                        type="text"
                        className="input-city"
                        placeholder="Kyiv"
                    />
                </div>
                <div className="weather-header-nav">
                    <ul className="weather-navigation-list">
                        <li><Link to='today'>Сьогодні</Link></li>
                        <li><Link to='tomorrow'>Завтра</Link></li>
                        <li><Link to='5-day'>5 днів</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WeatherHeader