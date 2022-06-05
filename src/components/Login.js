import React,{ useState } from "react";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const handleLogin=()=>{
        console.warn(email,password)
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