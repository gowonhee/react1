import { useDispatch } from 'react-redux';
import './App.css';
import SearchBox from './components/SearchBox';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';


function App() {

  return (
    <div style={{ padding : '7%' }}>
      <h1 style={{ textAlign : 'center',
                   paddingBottom : '3%'
      }}>☕안수현 안티팬카페༼ つ ◕_◕ ༽つ☕</h1>
      <div>
        <SearchBox/>
        <hr/>
        <CommentForm/>
        <hr/>
        <CommentList/>
      </div>
    </div>
  );
}

export default App;
