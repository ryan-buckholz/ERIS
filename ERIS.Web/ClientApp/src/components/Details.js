import React, { Component } from 'react';
import { Button, Container, Col, Row, Form } from "reactstrap";
import './Details.css';

export class Details extends Component {
	constructor(props) {
		super(props)

		this.state = {
			date: '',
			district: '',
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
			cellphone: '',
			lanes: '',
			feetlength: '',
			incheshorizontal: '',
			inchesvertical: '',
			inchesdepth: '',
			settleinches: '',
			bulgeinches: '',
			clay: '',
			silt: '',
			sand: '',
			gravel: '',
			trees: '',
			bushesshrubs: '',
			groundcover: '',
			slope: '',
			originalslope: '',
			landslidewidth: '',
			landslidelength: '',
			mainscarp: '',
			landslideslope: '',
			lengthofroadway: '',
			widthofroadway: '',
			lanespagetwo: ''
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

	handleCheckbox = event => {
		console.log(event.target.value);
	}

	handleLanesChange = event => {
		this.setState({
			lanes: event.target.value
		})
	}

	handleFeetLengthChange = event => {
		this.setState({
			feetlength: event.target.value
		})
	}

	handleInchesHorizontalChange = event => {
		this.setState({
			incheshorizontal: event.target.value
		})
	}

	handleInchesVerticalChange = event => {
		this.setState({
			inchesvertical: event.target.value
		})
	}

	handleInchesDepthChange = event => {
		this.setState({
			inchesdepth: event.target.value
		})
	}

	handleSettleInchesChange = event => {
		this.setState({
			settleinches: event.target.value
		})
	}

	handleBulgeInchesChange = event => {
		this.setState({
			bulgeinches: event.target.value
		})
	}

	handleClayChange = event => {
		this.setState({
			clay: event.target.value
		})
	}

	handleSiltChange = event => {
		this.setState({
			silt: event.target.value
		})
	}

	handleSandChange = event => {
		this.setState({
			sand: event.target.value
		})
	}

	handleGravelChange = event => {
		this.setState({
			gravel: event.target.value
		})
	}

	handleTreesChange = event => {
		this.setState({
			trees: event.target.value
		})
	}

	handleBushesShrubsChange = event => {
		this.setState({
			bushesshrubs: event.target.value
		})
	}

	handleGroundCoverChange = event => {
		this.setState({
			groundcover: event.target.value
		})
	}

	handleSlopeChange = event => {
		this.setState({
			slope: event.target.value
		})
	}

	handleOriginalSlopeChange = event => {
		this.setState({
			originalslope: event.target.value
		})
	}

	handleLandslideWidthChange = event => {
		this.setState({
			landslidewidth: event.target.value
		})
	}

	handleLandslideLengthChange = event => {
		this.setState({
			landslidelength: event.target.value
		})
	}

	handleMainScarpChange = event => {
		this.setState({
			mainscarp: event.target.value
		})
	}

	handleLandslideSlopeChange = event => {
		this.setState({
			landslideslope: event.target.value
		})
	}

	handleLengthofRoadwayChange = event => {
		this.setState({
			lengthofroadway: event.target.value
		})
	}

	handleWidthofRoadwayChange = event => {
		this.setState({
			widthofroadway: event.target.value
		})
	}

	handleLanesPageTwoChange = event => {
		this.setState({
			lanespagetwo: event.target.value
		})
	}

	handleSubmit = event => {
		alert(`${this.state.date} ${this.state.district} ${this.state.county} ${this.state.route} 
			   ${this.state.postmile} ${this.state.ea} ${this.state.projectid} ${this.state.dateincident}
			   ${this.state.latitude} ${this.state.longitude} ${this.state.dclastname} ${this.state.dcfirstname} 
			   ${this.state.dcsnumber} ${this.state.lastname} ${this.state.firstname} ${this.state.snumber} 
			   ${this.state.phone} ${this.state.cellphone} ${this.state.lanes} ${this.state.feetlength} 
			   ${this.state.incheshorizontal} ${this.state.inchesvertical} ${this.state.inchesdepth}
			   ${this.state.settleinches} ${this.state.bulgeinches} ${this.state.clay}
			   ${this.state.silt} ${this.state.sand} ${this.state.gravel} ${this.state.trees}
			   ${this.state.brushesshrubs} ${this.state.groundcover} ${this.state.slope} ${this.state.originalslope}
			   ${this.state.landslidewidth} ${this.state.landslidelength} ${this.state.mainscarp}
			   ${this.state.landslideslope} ${this.state.lengthofroadway} ${this.state.widthofroadway}
			   ${this.state.lanespagetwo}`)
			   event.preventDefault()
	}

	render() {
		const { date, district, county, route, postmile, ea, projectid, dateincidentreport,
			latitude, longitude, dclastname, dcfirstname, dcsnumber, lastname, firstname,
			snumber, phone, cellphone, lanes, feetlength, incheshorizontal, inchesvertical,
			inchesdepth, settleinches, bulgeinches, clay, silt, sand, gravel, trees, bushesshrubs,
			groundcover, slope, originalslope, landslidewidth, landslidelength, mainscarp, landslideslope,
			lengthofroadway, widthofroadway, lanespagetwo} = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="card mt-3">
					<div className="card-body">
						<div>
							<div class="row">
								<div class="col-md">GEOTECHNICAL INITIAL SITE ASSESSMENT</div>
								<div class="col-md-3">GISA-001 (NEW 1/2022)</div>
							</div>
							<hr></hr>

							<div class="row">
								<div class="col-md"><input type="text" class="form-control" value={date} onChange={this.handleDateChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={district} onChange={this.handleDistrictChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={county} onChange={this.handleCountyChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={route} onChange={this.handleRouteChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={postmile} onChange={this.handlePostMileChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={ea} onChange={this.handleEaChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={projectid} onChange={this.handleProjecrIDChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={dateincidentreport} onChange={this.handleDateIncidentChange} /></div>
							</div>

							<div class="row">
								<div class="col-md"><label>Date</label></div>
								<div class="col-md"><label>District</label></div>
								<div class="col-md"><label>County</label></div>
								<div class="col-md"><label>Route</label></div>
								<div class="col-md"><label>Post Mile</label></div>
								<div class="col-md"><label>EA</label></div>
								<div class="col-md"><label>Project ID</label></div>
								<div class="col-md"><label>Date Incident Report</label></div>
							</div>
							<br></br>

							<div class="row">
								<div class="col-md"><input type="text" class="form-control" value={latitude} onChange={this.handleLatitudeChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={longitude} onChange={this.handleLongitudeChange} /></div>
								<div class="col-md-auto"><label>District Contact:</label></div>
								<div class="col-md"><input type="text" class="form-control" value={dclastname} onChange={this.handleDcLastnameChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={dcfirstname} onChange={this.handleDcFirstnameChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={dcsnumber} onChange={this.handleDcSnumberChange}/></div>
							</div>

							<div class="row">
								<div class="col-md"><label>Latitude</label></div>
								<div class="col-md"><label>Longitude</label></div>
								<div class="col-md"><label></label></div>
								<div class="col-md"><label>Last Name</label></div>
								<div class="col-md"><label>First Name</label></div>
								<div class="col-md"><label>S Number</label></div>
							</div>
							<br></br>

							<div class="row">
								<div class="col-md"><input type="text" class="form-control" value={lastname} onChange={this.handleLastnameChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={firstname} onChange={this.handleFirstnameChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={snumber} onChange={this.handleSNumberChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={phone} onChange={this.handlePhoneChange} /></div>
								<div class="col-md"><input type="text" class="form-control" value={cellphone} onChange={this.handleCellphoneChange} /></div>
							</div>

							<div class="row">
								<div class="col-md"><label>Last Name</label></div>
								<div class="col-md"><label>First Name</label></div>
								<div class="col-md"><label>S Number</label></div>
								<div class="col-md"><label>Phone</label></div>
								<div class="col-md"><label>Cell Phone</label></div>
							</div>

							<hr></hr>
							<div class="row">
								<div class="col"><label>(TRB Special Report 24/7)</label></div>
							</div>
							<br></br>
						
							<div class="justify-content-start">
								<div class="col"><p class="text-decoration-underline">Incident Type:</p></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rock" /> (Rock) Fall</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="topple" /> Topple</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slide" /> Slide</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="spread" /> Spread</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="flow" /> Flow</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="compound" /> Compound</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="erosion" /> Erosion</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surfacial" /> Surfacial Sloughing</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="scoured" /> Scoured </div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="washout" /> Washout</div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Distribution:</p></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="advancing" /> Advancing</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="retrogressing" /> Retrogressing</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="enlarging" /> Enlarging</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="widening" /> Widening</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="moving" /> Moving</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="confined" /> Confined</div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Highway Staus:</p></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="open" /> Open</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="shoulder" /> Shoulder Closed</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="lanesclosed" /> Lane(s) Closed</div>
								<div class="col"><input type="text" class="form-control" value={lanes} onChange={this.handleLanesChange} />Lanes</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="oneway" /> One-way Closed</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="twoway" /> Two-way Closed</div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Payment/Ground Status:</p></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="paymentground" /> Payment/Ground Checks </div>
								<div class="col"><input onChange={this.handleFeetLengthChange} type="text" class="form-control" value={feetlength} />Feet, Length</div>
								<div class="col"><input onChange={this.handleInchesHorizontalChange} type="text" class="form-control" value={incheshorizontal} />Inches, Horizontal Disp.</div>
								<div class="col"><input onChange={this.handleInchesVerticalChange} type="text" class="form-control" value={inchesvertical} />Inches, Vertical Disp.</div>
								<div class="col"><input onChange={this.handleInchesDepthChange} type="text" class="form-control" value={inchesdepth} />Inches, Depth of Crack</div>
								<div class="col">Settlement<input onChange={this.handleSettleInchesChange} type="text" class="form-control" value={settleinches} />Inches</div>
								<div class="col">Bulge<input onChange={this.handleBulgeInchesChange} type="text" class="form-control" value={bulgeinches} />Inches</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="indented" />Indented by Rocks</div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Material:</p></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rock" /> Rock</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="bedding" /> Bedding</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="joints" /> Joints</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fractures" /> Fractures</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="soil" /> Soil</div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">EST. %</p></div>
								<div class="col"><input onChange={this.handleClayChange} type="text" class="form-control" value={clay} />Clay</div>
								<div class="col"><input onChange={this.handleSiltChange} type="text" class="form-control" value={silt} />Silt</div>
								<div class="col"><input onChange={this.handleSandChange} type="text" class="form-control" value={sand} />Sand</div>
								<div class="col"><input onChange={this.handleGravelChange} type="text" class="form-control" value={gravel} />Gravel</div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Water Content:</p></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="dry" /> Dry</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="moist" /> Moist</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="wet" /> Wet</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="flowing" /> Flowing</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="seep" /> Seep</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="spring" /> Spring</div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Vegetation on Slope:</p></div>
								<div class="col"><label>Coverage %</label></div>
								<div class="col">Trees<input onChange={this.handleTreesChange} type="text" class="form-control" value={trees} /></div>
								<div class="col">Bushes/Shrubs<input onChange={this.handleBushesShrubsChange} type="text" class="form-control" value={bushesshrubs} /></div>
								<div class="col">Groundcover<input onChange={this.handleGroundCoverChange} type="text" class="form-control" value={groundcover} /></div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Water/Drainage:</p></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="clogged" /> Clogged Inlet</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="compromised" /> Compromised Drains</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surface" /> Surface Runoff</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="torrent" /> Torrent, Surge, Flood</div>
								<div class="col"><label>Impacted:</label></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impactone" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impacttwo" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impactthree" /></div>
								<div class="col"><label>May be Impacted:</label></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="utilties" /> Adjacent Utilities</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="properties" /> Adjacent Properties</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="structures" /> Adjacent Structures</div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Measurements:</p></div>
								<div class="col">Slope Height, ft (H)<input onChange={this.handleSlopeChange} type="text" class="form-control" value={slope} /></div>
								<div class="col">Original Slope, deg (a)<input onChange={this.handleOriginalSlopeChange} type="text" class="form-control" value={originalslope} /></div>
								<div class="col">Landslide Width, ft (Wd)<input onChange={this.handleLandslideWidthChange} type="text" class="form-control" value={landslidewidth} /></div>
								<div class="col">Landslide Length, ft (Ld)<input onChange={this.handleLandslideLengthChange} type="text" class="form-control" value={landslidelength} /></div>
								<div class="col">Main Scarp Height, ft (Hs)<input onChange={this.handleMainScarpChange} type="text" class="form-control" value={mainscarp} /> </div>
								<div class="col">Landslide Slope, deg (B)<input onChange={this.handleLandslideSlopeChange} type="text" class="form-control" value={landslideslope} /></div>
								<div class="col">Length of Roadway Encroached, ft (Lr)<input onChange={this.handleLengthofRoadwayChange} type="text" class="form-control" value={lengthofroadway} /></div>
								<div class="col"> of Roadway Encroached, ft (Wr)<input onChange={this.handleWidthofRoadwayChange} type="text" class="form-control" value={widthofroadway} /></div>
							</div>

							<div class="justify-content-center">
								<div class="col"><p class="text-decoration-underline">Recommended Actions:</p></div>
								<div class="col"><label>Immediate Actions:</label></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="one" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="two" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="three" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="four" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="five" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="six" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="seven" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="eight" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="nine" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="ten" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="eleven" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="twelve" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="thirteen" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fourteen" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fifteen" /></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="sixteen" /></div>
								<div class="col"><label>Follow-Up Actions:</label></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="opentraffic" /> Open Highway Traffic</div>
								<div class="col"><input onChange={this.handleLanesPageTwoChange} type="text" class="form-control" value={lanespagetwo} /> Lanes</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="openshoulder" /> Open Highway Shoulder</div>
								<div class="col">Close Highway<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="onee" /> One <input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="bothdirections" /> Both Directions</div>
								<div class="col"><label> Remove Landslide Debris From Highway</label></div>
								<div class="col"><label> Place K-Rail or Fence</label></div>
								<div class="col"><label> Cover Slope with Plastic</label></div>
								<div class="col"><label> Divert Surface Water Runoff</label></div>
								<div class="col"><label> Remove Culvert Blockage</label></div>
								<div class="col"><label> Dewater with Pump, Trench, etc.</label></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="dewater" /> Dewater with Horizontal Drains</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="temporaryshoring" /> Construct Temporary Shoring</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="buttress" /> Buttress Taoe of Landslide</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rockprotection" /> Place Rock Slope Protection (ref. manual)</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="routinemonitor" /> Routine Visual Monitor</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slopetooriginal" /> Reconstruct Slope to Original Condition</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slopewithgeosyn" /> Reconstruct Slope with Geosynthetics</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="repairculvert" /> Repair Culvert/Drainage Pipe</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="erosioncontrol" /> Install Erosion Control - By Dist. Landscape</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surveysite" /> Survey the Site - By Dist Landscape</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="geologicalmapping" /> Perform Geological Mapping</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="subsurfaceexploration" /> Perform Subsurface Exploration</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="detaileddesign" /> Perform Detailed Design & Produce Plans</div>
							</div>

							<div class="row">
								<div class="col-md"><input type="text" class="form-control" value={date} onChange={this.handleDateChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={district} onChange={this.handleDistrictChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={county} onChange={this.handleCountyChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={route} onChange={this.handleRouteChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={postmile} onChange={this.handlePostMileChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={latitude} onChange={this.handleLatitudeChange}/></div>
								<div class="col-md"><input type="text" class="form-control" value={longitude} onChange={this.handleLongitudeChange}/></div>
							</div>

							<div class="row">
								<div class="col-md"><label>Date</label></div>
								<div class="col-md"><label>District</label></div>
								<div class="col-md"><label>County</label></div>
								<div class="col-md"><label>Route</label></div>
								<div class="col-md"><label>Post Mile</label></div>
								<div class="col-md"><label>Latitude</label></div>
								<div class="col-md"><label>Longitude</label></div>
							</div>
							<hr></hr>

							<div class="row">
								<p class="fw-bold">OBSERVATIONS AND NOTES:</p>
								<div class="mb-3">
									<label for="exampleFormControlTextarea1" class="form-label">LANDSLIDE MOVING/DEVELOPING RATE, PAVEMENT/GROUND CRACKS W/ MEASUREMENTS;
										SLOPE AND BEDDING ORIENTATIONS IN RELATION TO ROADWAY ALIGNMENT, JOINTS,
										FRACTURES; SITE ACCESS FOR FURTHER INVESTIGATION AND CONSTRUCTION; DRAINAGE;
										EROSION; POTENTIAL CAUSES OF INCIDENT; CONSTRAINTS; ADDITIONAL NOTES ON
										CHECKED BOXES; SITE HISTORY (INTERVIEW MAINTENANCE); MAP CRACKS - LOCATION,
										LENGTH, HORIZONTAL & VERTICAL DISPLACEMENTS, DEPTH, & DIRECTION. TAKE PLENTY
										OF PHOTOS AND MEASUREMENTS.</label>
									<textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
								</div>
							</div>
							<hr></hr>

							<div class="row">
								<p class="fw-bold">SKETCH:</p>
								<div class="mb-3">
									<label for="exampleFormControlTextarea1" class="form-label">DRAW CROSS SECTION FACING UP-STATION OR PERPENDICULAR TO MOVEMENT; DRAW PLAN W/ UP-STATION IDENTIFIED. <p class="fst-italic">MAP CRACKS - LOCATIONS, LENGTH, WIDTH, DEPTH, & DIRECTION.</p></label>
									<textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
								</div>
							</div>

							<div class="row justify-content-md-center">
								<div class="col-auto"><a href="/" className="btn btn-outline-secondary">Back</a></div>
								<div class="col-auto"><a href="/Search" className="btn btn-outline-secondary">New Search</a></div>
							</div>
							<div>
							</div>
						</div>
					</div>
				</div>
			</form>
		)
	}
}