import axios from 'axios'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const server = import.meta.env.VITE_BASE_URL;
    
    const handleLogin = async() => {
        window.open(`${server}/users/google`, '_self');
    }

    return <section className="login">
        <button onClick={handleLogin}><FcGoogle /> Login With Google</button>
    </section>
}

export default Login