import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    const formValidator = () => {
        let isValid = true
        if (userInfo.username.length < 2) {
            return false
        }
        if (userInfo.email.length < 2) {
            return false
        }
        if (userInfo.password.length < 2) {
            return false
        }
        if (userInfo.confirmPassword.length < 2) {
            return false
        }
        return isValid
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/register', userInfo, {withCredentials: true})
                .then(res => console.log(res),
                navigate("/dashboard"))
                
                .catch(err => console.log(err))
            }
            else{
                setErrors({
                    username: "First name must be at least 2 characters",
                    email: "Email must be at least 2 characters",
                    password: "Password must be at least 8 characters",
                    confirmPassword: "confirm must be at least 8 characters",
                })
            }
    }  
    return(
    <div>
        <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid justify-content-center">
                    <h3 >Register </h3>
                </div>
            </nav>
        <form action="" className="col-md-3 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" className="form-control" onChange={handleChange}/>
                {errors.username? <p className="text-danger">{errors.username}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" onChange={handleChange}/>
                {errors.email? <p className="text-danger">{errors.email}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" onChange={handleChange}/>
                {errors.password? <p className="text-danger">{errors.password}</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" className="form-control" onChange={handleChange}/>
                {errors.confirmPassword? <p className="text-danger">{errors.confirmPassword}</p> : ""}
            </div>
            <div className="form-group">
                <button type='submit' className="btn btn-success mt-3">Register</button>
            </div>
        </form>
    </div>
)
}

export default RegisterForm




/*import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [ObjErrors, setObjErrors] = useState({});


    const navigate = useNavigate()



    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })



    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/register', user, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                //setIsLoggedIn(true)
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors
                const ObjE = {}
                for (const key of Object.keys(errorResponse)) {
                    ObjE[key] = errorResponse[key].message
                }
                setObjErrors(ObjE)
            })
    }


    return (
        <div>
            <nav className="navbar bg-body-tertiary ">
                <div className="container-fluid justify-content-center">
                    <h3 >Register </h3>
                </div>
            </nav>
            <div className="d-flex justify-content-center align-items-center" >
                <div className="container w-25 mt-5">
                    <form onSubmit={submitHandler}>
                        <div class="mb-3">
                            <label class="form-label" >User Name </label>
                            <input
                                className="form-control"
                                type='text'
                                name='username'
                                value={user.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="mb-3" >
                            <label  class="form-label" >Email </label>
                            <input
                            className="form-control"
                                type='text'
                                name='email'
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="mb-3" >
                            <label  class="form-label" >Password </label>
                            <input
                            className="form-control"
                                type='password'
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="mb-3">
                            <label  class="form-label" >Confirm Password </label>
                            <input
                            className="form-control"
                                type='password'
                                name='confirmPassword'
                                value={user.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <button type='submit' class="btn btn-success">Register</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register*/