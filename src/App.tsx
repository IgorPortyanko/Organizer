
import { Routes, Route } from 'react-router-dom'
import Main from "./pages/Main";
import Home from './components/home/Home';
import Todo from './components/todo/Todo';
import Weather from './components/weather/Wether';
import WeatherToday from './components/weather/WeatherToday';
import WeatherTomorrow from './components/weather/WeatherTomorrow';
import WeatherFiveDay from './components/weather/WeatherFiveDay';

function App() {

  
  return (
    <div className='app-wraper'>
      
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={ <Home /> } />
          <Route path="todo" element={ <Todo /> } />
          <Route path="weather" element={ <Weather /> }> 
            <Route index element={ <WeatherToday /> } />
            <Route path="today" element={ <WeatherToday /> }/>
            <Route path="tomorrow" element={ <WeatherTomorrow /> }/>
            <Route path="5-day" element={ <WeatherFiveDay /> }/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
