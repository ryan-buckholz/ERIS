import React, { Component } from 'react';

export class Search extends Component {
    static displayName = Search.name;

    render () {
        return (
            <div>
                <div className="alert alert-primary text-center">Hello, Please enter the search criteria below </div>
                <div className="col-md-12">
                    <div className="card bg-light">
                        <div className="card-body">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Date
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">

                                            <div class="row">
                                                <div className="col-6">
                                                    <label>Date start:</label>
                                                    <input className="form-control" type="date" />
                                                </div>
                                                <div className="col-6">
                                                    <label>Date end:</label>
                                                    <input className="form-control" type="date" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Name
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <label>First Name:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="col-4">
                                                    <label>Last Name:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="col-4">
                                                    <label>Employee ID:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Location
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div className="row">
                                                <div className="col-xl-3">
                                                    <label>County:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="col-xl-3">
                                                    <label>District:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="col-xl-3">
                                                    <label>Latitude:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="col-xl-3">
                                                    <label>Latitude:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div className="col-xl-4">
                                                    <label>Route:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                                <div className="col-xl-4">
                                                    <label>Post Mile:</label>
                                                    <input className="form-control" type="number" />
                                                </div>
                                                <div className="col-xl-4">
                                                    <label>Highway:</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Highway Status
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div className="row">
                                                <div className="col-xl-4">
                                                </div>

                                                <div className="col-xl-2">

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Open
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Shoulder Closed
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            One-Way Closed
                                                        </label>
                                                    </div>

                                                </div>
                                                <div className="col-xl-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Two-Way closed
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Lane(s) closed
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
