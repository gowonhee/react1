import './App.css';
import { Routes, Route, useParams } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import { useEffect, useState } from 'react';
import axios from './axios'

function App() {

  const [list, setList] = useState([])

  useEffect(()=> {
    // 본인의 고유한 주소를 가지고 있는 데이터를 가져다 쓰겠다?
    // => axios로 요청
    // => useEffect 사용 ( axios를 가져오기 위해서 사용 )
    axios.get('bestList.json')
    .then(res => {
      console.log(res.data.list)
      setList(res.data.list)
    })
  },[])

  useParams(()=>{
    // 고유한 번호를 받기 위함
  
  
  },[])


  return (
    <div className='container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/list' element={<ProductList list={list}></ProductList>}></Route>
        <Route path='/detail/:num' element={<ProductDetail list={list}></ProductDetail>}></Route>
      </Routes>
      <Footer></Footer>
    
      
    </div>
  );
}

export default App;
