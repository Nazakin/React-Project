import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';

const WrongPage = () => {

    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            goHome()
        }, 5000)
    })

    const goHome = () => {
        navigate("/posts")
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            
        <h1> Where did you got that link from? </h1>
        <h2>
            You can click link below or wait 5 seconds to access the posts{'🙃'}
        </h2>

           <MyButton onClick={goHome} style={{marginTop: '10px'}}>Return to posts</MyButton> 
        </div>
    );
};

export default WrongPage;