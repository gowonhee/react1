import { useEffect, useState } from 'react';
import './App.css';
import api from './api'
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import { Routes, Route, useParams } from 'react-router-dom'
import Header from './components/Header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MovieActions } from './redux/reducers/movieSlice';

function App() {

  // const [movieList, setMovieList ] = useState([]) 
  // const dispatch = useDispatch()

  // // 임시 코드 시작
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const popRes = await api.get('/movie/popular?language=en-US&page=1')
  //     const topRatedRes = await api.get('/movie/top_rated?language=en-US&page=1')
  //     const upcomingRes = await api.get('/movie/upcoming?language=en-US&page=1')

  //     console.log("popRes", popRes);
  //     console.log("topRatedRes", topRatedRes);
  //     console.log("upcomingRes", upcomingRes);
  //   }
  //   fetchData();

  //   api.get('/movie/popular?language=en-US&page=1')
  //   .then(res=> {
  //     dispatch(MovieActions.initData(res.data))
  //     console.log(res.data.results[0])
      
  //   })

    // api.get('/movie/top_rated?language=en-US&page=1')
    // .then(res=> {
    //   dispatch(MovieActions.initData(res))
    //   console.log(res)})

    // api.get('/movie/upcoming?language=en-US&page=1')
    // .then(res=> {
    //   dispatch(MovieActions.initData(res))
    //   console.log(res)})
  // },[])
  // 임시 코드 끝


  return (
    <div className='nav-itme'>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' eleme t={<Movies/>}></Route>
        <Route path='/movies/:num' element={<MovieDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
