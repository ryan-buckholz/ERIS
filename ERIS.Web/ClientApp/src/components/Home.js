import React, { Component } from 'react';
import './Details.css';

export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
            <div>
                <div className="alert alert-info alert-dismissible alert-banner">Hello, Please log in below </div>
                <div class="row justify-content-md-center">
                    <div className="col-auto">
                        <label>Username:</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div className="col-auto">
                        <label>Password:</label>
                        <input className="form-control" type="text" />
                        <a href="/Search" className="btn btn-outline-secondary mt-3">Login</a>
                    </div>
                </div>
            </div>
        );
    }
}
