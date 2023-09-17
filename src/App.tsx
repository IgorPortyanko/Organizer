
import { Routes, Route } from 'react-router-dom'
import Main from "./pages/Main";
import Home from './components/home/Home';
import Todo from './components/todo/Todo';

function App() {

  
  return (
    <div className='app-wraper'>
      
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={ <Home /> } />
          <Route path="todo" element={ <Todo /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
