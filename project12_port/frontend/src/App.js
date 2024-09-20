import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduce from './pages/Introduce';
import Project from './pages/Project';
import Train from './pages/Train';
import OtherLink from './pages/OtherLink';
import Login from './components/Login';
import Join from './components/Join';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Introduce/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/train' element={<Train/>}></Route>
        <Route path='/link' element={<OtherLink/>}></Route>

        <Route path='/login' element={<Login/>}></Route>
        <Route path='/join' element={<Join/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
