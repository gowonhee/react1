import React, { useState } from 'react'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'

const TestLogin = ({ setUser }) => {

    const [id, setId] = useState()
    const [pw, setPw] = useState()
    const nav = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault()

        const res = await instance.post('/getLoginData', {id:id, pw:pw})
        // console.log(id,pw)
        console.log('res', res)
        if(res.data.result === "success"){
            setUser(res.data.id)
            // 브라우저 세션에 저장
            // sessionStorage.setItem('auth', 'user') // 단순 text
            let obj = { auth : 'user',
                        user_id : res.data.id }
            sessionStorage.setItem('info', JSON.stringify(obj))

            alert('환영합니다!')
            nav('/')
        }else {
            alert('다시 입력해주세요...')
        }
    }


  return (
    <div>
        <hr/>
        <h3>로그인</h3>
        <form onSubmit={handleLogin}>
            ID : <input type='text' onChange={e=> setId(e.target.value)}/>
            <br/>
            PW : <input type='password' onChange={e=> setPw(e.target.value)} />
            <input type="submit" value="로그인"/>
        </form>
    </div>

  )
}

export default TestLogin