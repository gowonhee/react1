import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { MovieActions } from '../redux/reducers/movieSlice';
import Banner from '../components/Banner';
import api from '../api';
import MovieSlide from '../components/MovieSlide';

const Home = () => {

    const [ popularList, setpopularList ] = useState([])
    const [ postCard, setPostCard ] = useState([]) 
    const dispatch = useDispatch()
  
    // 임시 코드 시작
    useEffect(()=>{
      const fetchData = async () => {
        const popRes = await api.get('/movie/popular?language=ko-KR&page=1')
        const topRatedRes = await api.get('/movie/top_rated?language=ko-KR&page=1')
        const upcomingRes = await api.get('/movie/upcoming?language=ko-KR&page=1')
  
        
        // console.log("popRes", popRes);
        // console.log("topRatedRes", topRatedRes);
        // console.log("upcomingRes", upcomingRes);
        dispatch(MovieActions.initData({ popRes : popRes.data, topRatedRes : }))
        console.log(popRes.data.results)
        setpopularList(popRes.data.results[0])
        setPostCard(popRes.data.results)
      }
      fetchData();
  
    //   api.get('/movie/popular?language=ko-KR&page=1')
    //   .then(res=> {
        
    //   })
  
      // api.get('/movie/top_rated?language=en-US&page=1')
      // .then(res=> {
      //   dispatch(MovieActions.initData(res))
      //   console.log(res)})
  
      // api.get('/movie/upcoming?language=en-US&page=1')
      // .then(res=> {
      //   dispatch(MovieActions.initData(res))
      //   console.log(res)})

    },[])
    // 임시 코드 끝
   
    return (
        <div>
            <Banner popularList={popularList}/>
            <MovieSlide setPostCard={postCard}/>
        </div>
    );
}

export default Home