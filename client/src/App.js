import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Player from './components/Player.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/player' element={<Player/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
