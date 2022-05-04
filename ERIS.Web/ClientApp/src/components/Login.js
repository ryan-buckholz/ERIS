import { Button } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

function Login() {
    const navigate = useNavigate();


  return (
    <div className = "row justify-content-md-center">
        <div className="col-md-6">
            <div className="card mt-3">
                <div className="card-body">
                      <div>
                        <div className="row">
                            <div className="col">
                                  <div className="errors alert alert-danger">
                                      Error: Username and Password do not match records
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="alert alert-primary text-center">Log in </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-auto">
                                <label>Username:</label>
                                <input className="username form-control" type="text" />
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-auto">
                                <label>Password:</label>
                                <input className="password form-control" type="password" />
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-auto'>
                                  <Button variant='outlined' style={{ marginTop: 20 }} onClick={checkCredentials} className='col-auto justify-content-center'>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

$(document).ready(function () {
    $(".errors").hide();
})

function checkCredentials() {
    var username = $(".username").val();
    var password = $(".password").val();
    var approved = false;

    $.ajax({
        url: "http://localhost:50188/api/Login/",
        async: true
    }).done(function (data) {
        data.forEach(item => {
            if (item.userName === username && item.password === password) {
                window.location.href = "/Search";
                approved = true;
            }
        })
        if (!approved) {
            $(".errors").show();
        }
    })

}


export default Login