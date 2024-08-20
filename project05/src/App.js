import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import axios from 'axios'

function App() {

  axios.get(url)
  .then(res => {
      console.log('axios res', res)
      setList()

  })
  .catch(err => console.err(err))

  return (
    <div className='container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/' element={<ProductDetail/>}></Route>
      </Routes>
      <Footer></Footer>
    
      
    </div>
  );
}

export default App;
