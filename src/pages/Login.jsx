import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo" />
                <form action="/" className="form" ref = {form} >
                    <label htmlfor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="jsblandonmontoya@hotmail.com" className="input input-email" />
                    <label htmlfor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*******" className="input input-password" />
                    <button
                    onclick = {handleSubmit}
                    className="primary-button login-button" >
                    log in
                    </button>
                    <a href="/">Forgot my password</a>
                    <button className="nav-secondary-button signup-button">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Login;