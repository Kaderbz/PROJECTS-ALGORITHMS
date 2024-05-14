/*import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate()

    const [ObjErrors, setObjErrors] = useState({});


    const [user, setUser] = useState({
        email: "",
        password: ""
    })



    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/login', user, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                //setIsLoggedIn(true)
                navigate('/dashboard')
            })
            .catch((err => {
                console.log(err)
            }))
            
    }


    return (
        <div>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid justify-content-center">
                    <h3 >Login </h3>
                </div>
            </nav>
            <div className="d-flex justify-content-center align-items-center" >
                <div className="container w-25 mt-5">
                    <form onSubmit={submitHandler}>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input
                                type="text" className="form-control"
                                name='email'
                                value={user.email}
                                onChange={handleChange}
                            />

                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input
                                type="password" className="form-control"
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                            />

                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                        <Link to={"/register"} >You don't have an account , create now </Link>
                    </form>
                </div>
            </div>




        </div>
    )
}

export default Login
*/





import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"

const LoginForm = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const onChangeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
            
        })
    }

    const formValidator = () => {
        let isValid = true
        if (userInfo.email.length < 2) {
            return false
        }
        if (userInfo.password.length < 2) {
            return false
        }
        return isValid
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/login', userInfo, {withCredentials: true})
                .then(res => console.log(res),
                navigate("/dashboard"))
                
                .catch(err => console.log(err))
            }
            else{
                setErrors({
                    email: "Invalid Credentials",
                    password: "Invalid Credentials",
                })
            }
    
    }               
    return(
        <div className='className="col-md-3 mx-auto'>
                        <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid justify-content-center">
                    <h3 >Login </h3>
                </div>
            </nav>
            <form action="" className="col-md-3 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" name="email" id="email" value={userInfo.email}  onChange={onChangeHandler}/> 
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" name="password" id="password" value={userInfo.password}  onChange={onChangeHandler}/>
                        {errors.password? <p className="text-danger">{errors.password}</p> : ""}
                </div>
                <div className="form-group">
                    <button className="btn btn-info mt-3">Login</button>
                </div>
            <span className="global-nav-text">
                <Link to="/register">Create New Account</Link>
            </span>
                </form>
        </div>
    )
}
export default LoginForm