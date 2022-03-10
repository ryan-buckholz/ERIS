import React, { Component } from 'react';
import { Container, Col, Row, Form, Button } from "reactstrap";

export class Details extends Component {
	constructor(props) {
		super(props)

		this.state = {
			date: '',
			district: 'react',
			county: '',
			route: '',
			postmile: '',
			ea: '',
			projectid: '',
			dateincidentreport: ''
		}
	}

	handleDateChange = event => {
		this.setState({
			date: event.target.value
		})
	}

	handleDistrictChange = event => {
		this.setState({
			district: event.target.value
		})
	}

	handleCountyChange = event => {
		this.setState({
			county: event.target.value
		})
	}

	handleRouteChange = event => {
		this.setState({
			route: event.target.value
		})
	}

	handlePostMileChange = event => {
		this.setState({
			postmile: event.target.value
		})
	}

	handleEaChange = event => {
		this.setState({
			ea: event.target.value
		})
	}

	handleProjectIDChange = event => {
		this.setState({
			projectid: event.target.value
		})
	}

	handleDateIncidentChange = event => {
		this.setState({
			dateincidentreport: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.date} ${this.state.district} ${this.state.county} ${this.state.route} ${this.state.postmile} ${this.state.ea} ${this.state.projectid} ${this.state.dateincident}`)
		event.preventDefault()
	}

	render() {
		const { date, district, county, route, postmile, ea, projectid, dateincidentreport } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="card mt-3">
					<div className="card-body">
						<div>
							<div class="col-xs-4">
								<div class="form-group">
									<input
										type="text"
										value={date}
										onChange={this.handleDateChange}
									/>

									<select value={district} onChange={this.handleDistrictChange}>
										<option value=""></option>
										<option value="Sacramento">Sacramento</option>
										<option value="Placer">Placer</option>
										<option value="Sonoma">Sonoma</option>
									</select>

									<input
										type="text"
										value={county}
										onChange={this.handleCountyChange}
									/>

									<input
										type="text"
										value={route}
										onChange={this.handleRouteChange}
									/>

									<input
										type="text"
										value={postmile}
										onChange={this.handlePostMileChange}
									/>

									<input
										type="text"
										value={ea}
										onChange={this.handleEaChange}
									/>

									<input
										type="text"
										value={projectid}
										onChange={this.handleProjecrIDChange}
									/>

									<input
										type="text"
										value={dateincidentreport}
										onChange={this.handleDateIncidentChange}
									/>

									<div class="col-xs-9">
										<label>Date</label>
										<label>District</label>
										<label>County</label>
										<label>Route</label>
										<label>Post Mile</label>
										<label>EA</label>
										<label>Project ID</label>
										<label>Date Incident Report</label>
									</div>
								</div>
							</div>
						</div>

						<div class="text-center">
							<a href="/" className="btn btn-primary ">Back</a>
							<a href="/Search" className="btn btn-primary">New Search</a>
						</div>
					</div>
				</div>
			</form>
		)
	}
}