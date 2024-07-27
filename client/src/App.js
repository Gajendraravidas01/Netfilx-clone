import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Player from './components/Player.js';
// import MoviePage from './pages/Movie.js';
import Movie from './pages/Movie.js'
import TVShow from './pages/TvShow.js';
import UserListedMovies from './pages/UserLikedMovie.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/player' element={<Player/>}/>
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/tv' element={<TVShow/>}/>
        <Route path='/mylist' element={<UserListedMovies/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
