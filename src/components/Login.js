import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const handleLogin = async () => {
        console.warn("email,password", email, password)
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        result = await result.json();
        console.warn(result);

        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result))
            if (result) {
                navigate('/')
            }
        } else {
            alert(result.result);
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input className="inputBox" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={handleLogin} type="button" className="appButton">Login</button>
        </div>
    )
}

export default Login