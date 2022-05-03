import React, { useState, useEffect } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import $ from 'jquery';



function Login(props) {

    const [loginData, setLoginData] = useState([]);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.LOGIN).fetchAll()
            .then(res => {
                let loginList = res.data.map(item => ({
                    id: item['loginID'], username: item['userName'], password: item['password']
                }));

                setLoginData(loginList)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className = "row justify-content-md-center">
            <div className="col-md-6">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="errorMessage alert alert-danger" style={{ display: "none"}}>
                            Error:
                            <ul className="mb-0">
                                <li>
                                    Username or Password do not match records
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="row justify-content-center">
                                <div className="col">
                                    <div className="alert alert-primary text-center">Log in
                                    </div>
                                </div>
                            </div>
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <label>Username:</label>
                                        <input className="username form-control" type="text" />
                                    </div>
                                </div>
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <label>Password:</label>
                                    <input className="password form-control" type="password" />
                                    <button onSubmit={loginData.forEach(item => {
                                        if (item.userName === $(".username").val() && item.password === $(".password").val()) { window.location.href = "./Search"; } $(".errorMessage").show();
                                    })} type="submit" className="btn btn-outline-secondary mt-3">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

$(window).ready(function () {
    $(".errorMessage").hide();
})

export default Login