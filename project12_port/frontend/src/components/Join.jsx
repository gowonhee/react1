import React, { useState } from 'react'
import instance from '../axios'

const Join = () => {

  const [id, setId] = useState()
  const [pw, setPw] = useState()
  const [email, setEmail] = useState()

  const handleJoin = async(e) =>{
    e.preventDefault();
    console.log(id, pw, email)

    const res = await instance.post('/handleJoin', {id : id, pw : pw, email : email})
    console.log('res', res)

    if(res.data.result === 'success'){
      alert('환영합니다!')
      window.location.href="/"
      /* Header는 Routes에 포함되어있지 않기 때문에
          Routes를 이용한 nav를 사용할 때 header는 렌더링이 되지 않음
          => window.location.href <- 전체 새로고침
      */
    }
    setId("")
    setPw("")
    setEmail("")
  }

    // 값을 비워주거나, 값에 포커싱을 하는 것은 useRef 사용 추천
  return (
    <>
      <div className="joinContainer" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleJoin}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <input type="password" placeholder="Password" value={pw} onChange={(e)=>{setPw(e.target.value)}}/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Join