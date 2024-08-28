import { useDispatch } from 'react-redux';
import './App.css';
import SearchBox from './components/SearchBox';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import { useState } from 'react';


function App() {

  const [search, setSearch] = useState()

  const handleSearch = (e) => {
    setSearch(e);
  };

  return (
    <div style={{ padding : '7%' }}>
      <h1 style={{ textAlign : 'center',
                   paddingBottom : '3%'
      }}>☕안수현 팬카페༼ つ ◕_◕ ༽つ☕</h1>
      <div>
        <SearchBox onSearch={handleSearch}/>
        <hr/>
        <CommentForm/>
        <hr/>
        <CommentList search={search}/>
      </div>
    </div>
  );
}

export default App;
