import React, { useState } from 'react'
import styles from '../css/Login.module.css';
import { Link } from 'react-router-dom';
import instance from '../axios'

const Login = () => {

    const [id, setId] = useState()
    const [pw, setPw] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await instance.post('/handleLogin', { id: id, pw: pw })
        console.log('res', res)

        if (res.data.result === 'success') {
            // 세션 저장
            let obj = { auth: 'user', id: res.data.id }
            sessionStorage.setItem('info', JSON.stringify(obj))

            window.location.href="/"
        } else {
            alert('다시 입력해주세요!')
            setId("")
            setPw("")
        }
    }

    return (
        <>
            <div className='wrapper'>
                <div className="loginContainer" id="container">
                    <div className="sign-in-container">
                        <form action="#" className='loginForm' onSubmit={handleLogin}>
                            <h1>Sign in</h1>
                            <input type="text" placeholder="ID or Email" value={id} onChange={(e) => { setId(e.target.value) }} />
                            <input type="password" placeholder="Password" value={pw} onChange={(e) => { setPw(e.target.value) }} />
                            <Link to='/join'>Goto Join!</Link>
                            <button className='form_btn'>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login