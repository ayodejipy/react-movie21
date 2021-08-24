import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'

import API from '../API'
// Styles
import { Wrapper } from "./Login.styles";
// Context
import { userContext } from "../context";


const Login = () => {
    const [ error, setError ] = useState(false)
    
    // Use the user context
    const [, setUser] = useContext(userContext)
    const navigate = useNavigate()
    
    
    return (
        <Wrapper>
            { error && <div className='error'>Error: Username or password not correct.</div> }
            
            <Formik
                initialValues={{ username: "", password:"" }}
                validationSchema={
                    Yup.object({
                        username: Yup.string().email('Invalid email address').required('Field is required'),
                        password: Yup.string().required('Password is required.')
                    })
                }
                onSubmit={ async values => {
                    setError(false)
                    try {
                        // Create a new request token
                        const requestToken = await API.getRequestToken();
                        
                        // Get user to authorize request token
                        // Create a new sessionId with authorized request token
                        const sessionId = await API.authenticate(
                            requestToken,
                            values.username,
                            values.password
                        )
                        console.log(sessionId)
                        setUser({
                            sessionId: sessionId.session_id,
                            username: values.username
                        })
                        navigate('/')
                        
                    } catch (error) {
                        setError(true)
                    }
                }}
            >
                <Form>
                    <label htmlFor="emailAddress">Email address</label>
                    <Field name="username" type="username" />
                    <ErrorMessage name="username" />
                    
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                    
                    <button type="submit">Login</button>
                </Form>
                
            </Formik>
        </Wrapper>
    )
}

export default Login
