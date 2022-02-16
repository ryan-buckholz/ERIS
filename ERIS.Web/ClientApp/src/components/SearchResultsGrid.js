import React, { Component } from 'react';

export class SearchResultsGrid extends Component {

    render() {
        return (
            <div>
                <div className="col-md">
                    <div className="card bg-light">
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ProjectID</th>
                                        <th scope="col">LName</th>
                                        <th scope="col">EmployeeId</th>
                                        <th scope="col">Incident Date</th>
                                        <th scope="col">County</th>
                                        <th scope="col">District</th>
                                        <th scope="col">Route</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Jones</td>
                                        <td>123654</td>
                                        <td>12/24/18</td>
                                        <td>Sacramento</td>
                                        <td>2</td>
                                        <td>66</td>


                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Daniels</td>
                                        <td>123654</td>
                                        <td>10/08/2012</td>
                                        <td>Orange</td>
                                        <td>2</td>
                                        <td>66</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Test</td>   
                                        <td>123654</td>
                                        <td>02/13/2022</td>
                                        <td>Shasta</td>
                                        <td>2</td>
                                        <td>66</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}