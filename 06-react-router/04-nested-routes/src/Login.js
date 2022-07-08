import React from 'react';
import {useNavigate} from "react-router-dom";

function Login(props) {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/sobre')
    }

    return (
        <div>Login

            <button onClick={handleClick}>Login</button>

        </div>
    );
}

export default Login;
