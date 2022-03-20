import React, { Component } from 'react';
import './Details.css';

export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
            <div>
                <div className="alert alert-info alert-dismissible alert-banner">Hello, Please log in below </div>
                <div className="row">
                    <div className="col-md-6 col-xl-4">
                        <label>Username:</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xl-4">
                        <label>Password:</label>
                        <input className="form-control" type="text" />
                        <a href="/Search" className="btn btn-outline-secondary mt-3 float-end">Login</a>
                    </div>
                </div>
            </div>
        );
    }
}
