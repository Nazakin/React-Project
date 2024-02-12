import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
        navigate("/posts")
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleLogin}>
                <MyInput type="text" placeholder="Enter your login" />
                <MyInput type="password" placeholder="Enter your password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;