import React, { Component } from 'react';

export class Search extends Component {
    static displayName = Search.name;

    render () {
        return (
            <div>
                <div className="alert alert-primary text-center">Hello, Please enter the search criteria below </div>
                <div className="col-md-12 col-xl-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <label>Date:</label>
                                    <input className="form-control" type="date" />
                                </div>
                                <div className="col-6">
                                    <label>County:</label>
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Highway:</label>
                                    <input className="form-control" type="number" />
                                </div>
                                <div className="col-6">
                                    <label>Mile Marker:</label>
                                    <input className="form-control" type="number" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a className="btn btn-primary mt-3 float-end">Search</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1">
                                <label>Date</label>
                            </div>
                            <div className="col-2">
                                <label>County</label>
                            </div>
                            <div className="col-2">
                                <label>Highway</label>
                            </div>
                            <div className="col-2">
                                <label>Mile Marker</label>
                            </div>
                            <div className="col-2">
                                <label>EA</label>
                            </div>
                            <div className="col-2">
                                <label>Project ID</label>
                            </div>
                            <div className="col-1">
                                <label>Select</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
