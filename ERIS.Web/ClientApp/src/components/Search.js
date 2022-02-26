import React, { Component } from 'react';

export class Search extends Component {
    static displayName = Search.name;

    render () {
        return (
            <div>
                <div className="alert alert-success text-center">Hello, Please enter the search criteria below </div>
                {/*<div className="row">*/}
                {/*    <div className="col-md-6 col-xl-4">*/}
                {/*        <label>Username:</label>*/}
                {/*        <input className="form-control" type="text" />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    <div className="col-md-6 col-xl-4">*/}
                {/*        <label>Password:</label>*/}
                {/*        <input className="form-control" type="text" />*/}
                {/*        <a href="./Search" className="btn btn-primary mt-3 float-end">Login</a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
