import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from '../API'
// Components
import Button from "./Button/Button";
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { userContext } from "../context";


const Login = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(false)
    // Use the user context
    const [user, setUser] = useContext(userContext)
    const navigate = useNavigate()
    
    const handleInput = e => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        
        name === 'username' ? setUsername(value) : setPassword(value)
    }
    
    const handleLogin = async () => {
        setError(false)
        try {
            
            // Create a new request token
            const requestToken = await API.getRequestToken();
            
            // Get user to authorize request token
            // Create a new sessionId with authorized request token
            const sessionId = await API.authenticate(
                requestToken,
                username,
                password
            )
            console.log(sessionId)
            setUser({
                sessionId: sessionId.session_id,
                username
            })
            navigate('/')
            
        } catch (error) {
            setError(true)
        }
    }
    
    return (
        <Wrapper>
            { error && <div className='error'>Error: Username or password not correct.</div> }
            
            <label>Username</label>
            <input 
                type="text" 
                name="username" 
                value={username}
                onChange={handleInput}
            />
            <label>Password</label>
            <input 
                type="password" 
                name="password" 
                value={password}
                onChange={handleInput}
            />
            <Button text='Login' callback={handleLogin} />
        </Wrapper>
    )
}

export default Login
