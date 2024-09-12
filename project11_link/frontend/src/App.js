import './App.css';
import Test from './components/Test'
import TestLogin from './components/TestLogin';
import instance from './axios';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState()

  const [sInfo, setSInfo] = useState()

  /* 
    react, node 연동 시,
    React를 run build 해서 서버에 연결
      >> react의 내용이 바뀔 때마다 run build 작업을 해야함. 불편!!
    그래서, 일단 npm start로 react 임시 서버를 열어 편하게 react 작업 후, 마지막 최종 작업이 끝난 뒤 run build를 해서 개발.
  */
  /** 현재 session 값을 확인할 수 있는 함수 */
  const getSession = async () => {
    // console.log('세션 호출!')
    const res = await instance.get('/getSession')
    // console.log('res', res.data)
  }

  useEffect(() => {
    getSession()
    // sessionStorage 안에 있는 값 출력
    // console.log(sessionStorage.getItem('auth'))
    console.log(JSON.parse(sessionStorage.getItem('info')))
    setSInfo(JSON.parse(sessionStorage.getItem('info')))
  }, [user])

  const logout = async () => {
    // console.log('로그아웃 함수')
    const res = await instance.get('/logoutData')
    // console.log('res', res.data)

    // sessionStorage값 지우기 
    sessionStorage.removeItem('info')
    setUser("")
    alert('다음에 또 방문해주세요!')
  }

  return (
    <div className="App">
      <h1>React Node 연동하기! {sInfo && sInfo.user_id}</h1>
      <Test />
      <TestLogin setUser={setUser} />
      <hr />
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default App;
