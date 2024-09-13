import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import styles from '../css/Login.module.css'; 


const Login = () => {

    return (
        <>
        <div className='wrapper'>
            <div className="loginContainer" id="container">
                {/* <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div> */}
                <div className="sign-in-container">
                    <form action="#" className='loginForm'>
                        <h1>Sign in</h1>
                        <input type="email" placeholder="ID or Email" />
                        <input type="password" placeholder="Password" />
                        <button className='form_btn'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login