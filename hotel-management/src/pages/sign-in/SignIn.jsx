import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {

    const navigate = useNavigate();

    return (
        <div className="container">
                <form className="signin-form">
                    <input type="text" className="credentials" placeholder="USERNAME" required />
                    <input type="password" className="credentials" placeholder="PASSWORD" required />
                    <button type="submit" onClick={() => navigate('/')}>Log In</button>
                </form>
        </div>
    )
}

export default SignIn