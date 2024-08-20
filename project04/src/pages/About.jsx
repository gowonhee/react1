import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    /* useNavigate 
        - 페이지 이동을 도와줌
    1. import { useNavigate } from 'react-router-dom'
    2. const 변수 = useNavigate()
    3. 페이지 이동이 필요할 경우 변수('이동할 경로')
    워니 sql 화이팅!!❤🧡💛💚💙💜
    */

    const nav = useNavigate();
    let auth = true; // 로그인 권한

  return (
    <div>About
        <hr />
        <button onClick={()=>{
            auth ? nav("/mypage") : nav("/")
        }}>마이페이지로 이동</button>
    </div>
  )
}

export default About