import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    
    const navigate = useNavigate();
  return (
    <div className = "row justify-content-md-center">
        <div className="col-md-6">
            <div className="card mt-3">
                <div className="card-body">
                    <div>
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="alert alert-primary text-center">Log in </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-auto">
                                <label>Username:</label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-auto">
                                <label>Password:</label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-auto'>
                                <Button variant='outlined' style={{marginTop:20}} onClick={data=>navigate('/Search')} className='col-auto justify-content-center'>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Login