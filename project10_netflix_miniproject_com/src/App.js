import './App.css';
import { useEffect } from 'react'
import api from './api'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header'

function App() {
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:id' element={<MovieDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
