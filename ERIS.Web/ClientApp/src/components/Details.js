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
			dateincidentreport: '',
			latitude: '',
			longitude: '',
			dclastname: '',
			dcfirstname: '',
			dcsnumber: '',
			lastname: '',
			firstname: '',
			snumber: '',
			phone: '',
			cellphone:''
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

	handleLatitudeChange = event => {
		this.setState({
			latitude: event.target.value
		})
	}

	handleLongitudeChange = event => {
		this.setState({
			longitude: event.target.value
		})
	}

	handleDcLastnameChange = event => {
		this.setState({
			dclastname: event.target.value
		})
	}

	handleDcFirstnameChange = event => {
		this.setState({
			dcfirstname: event.target.value
		})
	}

	handleDcSnumbertChange = event => {
		this.setState({
			dcsnumber: event.target.value
		})
	}

	handleLastnameChange = event => {
		this.setState({
			lastname: event.target.value
		})
	}

	handleFirstname = event => {
		this.setState({
			firstname: event.target.value
		})
	}

	handleSNumberChange = event => {
		this.setState({
			snumber: event.target.value
		})
	}

	handlePhoneChange = event => {
		this.setState({
			phone: event.target.value
		})
	}

	handleCellphoneChange = event => {
		this.setState({
			cellphone: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.date} ${this.state.district} ${this.state.county} ${this.state.route} 
			   ${this.state.postmile} ${this.state.ea} ${this.state.projectid} ${this.state.dateincident}
			   ${this.state.latitude} ${this.state.longitude} ${this.state.dclastname} ${this.state.dcfirstname} 
			   ${this.state.dcsnumber} ${this.state.lastname} ${this.state.firstname} ${this.state.snumber} 
			   ${this.state.phone} ${this.state.cellphone}`)
		event.preventDefault()
	}

	render() {
		const { date, district, county, route, postmile, ea, projectid, dateincidentreport,
				latitude, longitude, dclastname, dcfirstname, dcsnumber, lastname, firstname,
				snumber, phone, cellphone } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="card mt-3">
					<div className="card-body">
						<div>
							<label>GEOTECHNICAL INITIAL SITE ASSESSMENT</label>
							<div class="col-md-6 text-right">GISA-001 (NEW 1/2022)</div>
							<hr></hr>

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

						<div>
							<div class="col-xs-4">
								<div class="form-group">
									<input
										type="text"
										value={latitude}
										onChange={this.handleLatitudeChange}
									/>

									<input
										type="text"
										value={longitude}
										onChange={this.handleLongitudeChange}
									/>

									<label>District Contact</label>

									<input
										type="text"
										value={dclastname}
										onChange={this.handleDcLastnameChange}
									/>

									<input
										type="text"
										value={dcfirstname}
										onChange={this.handleDcFirstnameChange}
									/>

									<input
										type="text"
										value={dcsnumber}
										onChange={this.handleDcSnumberChange}
									/>

									<div class="col-xs-9">
										<label>Latitude</label>
										<label>Longitude</label>
										<label>Last Name</label>
										<label>First Name</label>
										<label>S Number</label>
									</div>

								</div>
							</div>
						</div>

						<div>
							<div class="col-xs-4">
								<div class="form-group">
									<input
										type="text"
										value={lastname}
										onChange={this.handleLastnameChange}
									/>

									<input
										type="text"
										value={firstname}
										onChange={this.handleFirstnameChange}
									/>

									<input
										type="text"
										value={snumber}
										onChange={this.handleSNumberChange}
									/>

									<input
										type="text"
										value={phone}
										onChange={this.handlePhoneChange}
									/>

									<input
										type="text"
										value={cellphone}
										onChange={this.handleCellphoneChange}
									/>
									<div class="col-xs-9">
										<label>Last Name</label>
										<label>First Name</label>
										<label>S Number</label>
										<label>Phone</label>
										<label>Cell Phone</label>
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