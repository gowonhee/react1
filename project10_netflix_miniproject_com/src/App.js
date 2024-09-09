import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header'
import Movies from './pages/Movies'

function App() {
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:id' element={<MovieDetail/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
