import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render () {
        return (
            <div className = "row justify-content-md-center">
                <div className="col-md-6">
                    <div className="card mt-3">
                        <div className="card-body">
                            <div>
                                <div className="row justify-content-md-center">
                                    <div className="col">
                                        <div className="alert alert-primary text-center">Log in </div></div></div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                 );

    }
}
