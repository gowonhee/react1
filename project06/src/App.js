import './App.css';
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Main from './page/Main';
import GoodsDetail from './page/GoodsDetail';
import GoodsList from './page/GoodsList';
import Login from './page/Login';
import Footer from './components/Footer';
import { useState } from 'react';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const [auth, setAuth] = useState(false)
  const [goods, setGoods] = useState([])

  return (
    <div>
      <Header auth={auth} setAuth={setAuth}></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login auth={auth} setAuth={setAuth}/>}></Route>
        <Route path='/menu/list' element={<GoodsList goods={goods} setGoods={setGoods}/>}></Route>

        {/* 로그인 상태에 따라 다른 페이지로 이동되도록 구현 */}
        <Route path='/menu/:num' element={<PrivateRoute auth={auth}/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
