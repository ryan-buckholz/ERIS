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
							<label>TRB Special Report 24/7</label>
						
							<div>
								<label>Incident Type:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rock" />(Rock) Fall
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="topple" />Topple
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slide" />Slide
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="spread" />Spread
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="flow" />Flow
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="compound" />Compound
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="erosion" />Erosion
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surfacial" />Surfacial Sloughing
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="scoured" />Scoured Toe
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="washout" />Washout
							</div>

							<div>
								<label>Distribution:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="advancing" />Advancing
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="retrogressing" />Retrogressing
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="enlarging" />Enlarging
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="widening" />Widening
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="moving" />Moving
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="confined" />Confined
							</div>

							<div>
								<label>Highway Status:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="open" />Open
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="shoulder" />Shoulder Closed
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="lanesclosed" />Lane(s) Closed
								<input onChange={this.handleLanesChange} type="text" class="form-control" value={lanes} />Lanes
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="oneway" />One-way Closed
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="twoway" />Two-way Closed
							</div>

							<div>
								<label>Payment/Ground Status:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="paymentground" />Payment/Ground Checks
								<input onChange={this.handleFeetLengthChange} type="text" class="form-control" value={feetlength} />Feet, Length
								<input onChange={this.handleInchesHorizontalChange} type="text" class="form-control" value={incheshorizontal} />Inches, Horizontal Disp.
								<input onChange={this.handleInchesVerticalChange} type="text" class="form-control" value={inchesvertical} />Inches, Vertical Disp.
								<input onChange={this.handleInchesDepthChange} type="text" class="form-control" value={inchesdepth} />Inches, Depth of Crack
								Settlement<input onChange={this.handleSettleInchesChange} type="text" class="form-control" value={settleinches} />Inches
								Bulge<input onChange={this.handleBulgeInchesChange} type="text" class="form-control" value={bulgeinches} />Inches
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="indented" />Indented by Rocks
							</div>

							<div>
								<label>Material:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rock" />Rock
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="bedding" />Bedding
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="joints" />Joints
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fractures" />Fractures
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="soil" />Soil
							</div>

							<div>
								<label>EST. %</label>
								<input onChange={this.handleClayChange} type="text" class="form-control" value={clay} />Clay
								<input onChange={this.handleSiltChange} type="text" class="form-control" value={silt} />Silt
								<input onChange={this.handleSandChange} type="text" class="form-control" value={sand} />Sand
								<input onChange={this.handleGravelChange} type="text" class="form-control" value={gravel} />Gravel
							</div>

							<div>
								<label>Water Content:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="dry" />Dry
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="moist" />Moist
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="wet" />Wet
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="flowing" />Flowing
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="seep" />Seep
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="spring" />Spring
							</div>

							<div>
								<label>Vegetation on Slope</label>
								<label>Coverage %</label>
								Trees<input onChange={this.handleTreesChange} type="text" class="form-control" value={trees} />
								Bushes/Shrubs<input onChange={this.handleBushesShrubsChange} type="text" class="form-control" value={bushesshrubs} />
								Groundcover<input onChange={this.handleGroundCoverChange} type="text" class="form-control" value={groundcover} />
							</div>

							<div>
								<label>Water/Drainage:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="clogged" />Clogged Inlet
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="compromised" />Compromised Drains
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surface" />Surface Runoff
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="torrent" />Torrent, Surge, Flood
								<label>Impacted:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impactone" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impacttwo" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impactthree" />
								<label>May be Impacted:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="utilties" />Adjacent Utilities
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="properties" />Adjacent Properties
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="structures" />Adjacent Structures
							</div>

							<div>
								<label>Measurements:</label>
								Slope Height, ft (H)<input onChange={this.handleSlopeChange} type="text" class="form-control" value={slope} />
								Original Slope, deg (a)<input onChange={this.handleOriginalSlopeChange} type="text" class="form-control" value={originalslope} />
								Landslide Width, ft (Wd)<input onChange={this.handleLandslideWidthChange} type="text" class="form-control" value={landslidewidth} />
								Landslide Length, ft (Ld)<input onChange={this.handleLandslideLengthChange} type="text" class="form-control" value={landslidelength} />
								Main Scarp Height, ft (Hs)<input onChange={this.handleMainScarpChange} type="text" class="form-control" value={mainscarp} />
								Landslide Slope, deg (B)<input onChange={this.handleLandslideSlopeChange} type="text" class="form-control" value={landslideslope} />
								Length of Roadway Encroached, ft (Lr)<input onChange={this.handleLengthofRoadwayChange} type="text" class="form-control"  value={lengthofroadway} />
								Width of Roadway Encroached, ft (Wr)<input onChange={this.handleWidthofRoadwayChange} type="text" class="form-control" value={widthofroadway} />
							</div>

							<div>
								<label>Recommended Actions:</label>
								<label>Immediate Actions:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="one" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="two" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="three" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="four" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="five" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="six" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="seven" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="eight" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="nine" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="ten" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="eleven" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="twelve" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="thirteen" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fourteen" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fifteen" />
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="sixteen" />
								<label>Follow-Up Actions:</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="opentraffic" />Open Highway Traffic
								<input onChange={this.handleLanesPageTwoChange} type="text" class="form-control" value={lanespagetwo} />Lanes
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="openshoulder" />Open Highway Shoulder
								Close Highway<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="onee" />One <input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="bothdirections" />Both Directions
								<label>Remove Landslide Debris From Highway</label>
								<label>Place K-Rail or Fence</label>
								<label>Cover Slope with Plastic</label>
								<label>Divert Surface Water Runoff</label>
								<label>Remove Culvert Blockage</label>
								<label>Dewater with Pump, Trench, etc.</label>
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="dewater" />Dewater with Horizontal Drains
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="temporaryshoring" />Construct Temporary Shoring
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="buttress" />Buttress Taoe of Landslide
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rockprotection" /> Place Rock Slope Protection (ref. manual)
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="routinemonitor" />Routine Visual Monitor
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slopetooriginal" />Reconstruct Slope to Original Condition
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slopewithgeosyn" />Reconstruct Slope with Geosynthetics
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="repairculvert" />Repair Culvert/Drainage Pipe
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="erosioncontrol" />Install Erosion Control - By Dist. Landscape
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surveysite" />Survey the Site - By Dist Landscape
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="geologicalmapping" />Perform Geological Mapping
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="subsurfaceexploration" />Perform Subsurface Exploration
								<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="detaileddesign" />Perform Detailed Design & Produce Plans

							</div>

							<div>
								<input type="text" class="form-control" value={date} onChange={this.handleDateChange}/>
								<div class="col-2"><input type="text" class="form-control" value={district} onChange={this.handleDistrictChange} /></div>
								<input type="text" class="form-control" value={county} onChange={this.handleCountyChange} />
								<input type="text" class="form-control" value={route} onChange={this.handleRouteChange} />
								<input type="text" class="form-control" value={postmile} onChange={this.handlePostMileChange} />
								<input type="text" class="form-control" value={latitude} onChange={this.handleLatitudeChange}/>
								<input type="text" class="form-control" value={longitude} onChange={this.handleLongitudeChange} />
							</div>

							<div class="col-xs-9">
								<label>Date</label>
								<label>District</label>
								<label>County</label>
								<label>Route</label>
								<label>Post Mile</label>
								<label>Latitude</label>
								<label>Longitude</label>
								<hr></hr>
							</div>

							<div>
								<label>OBSERVATIONS AND NOTES:</label>
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
								<hr></hr>
							</div>

							<div>
								<label>SKETCH:</label>
								<div class="mb-3">
									<label for="exampleFormControlTextarea1" class="form-label">DRAW CROSS SECTION FACING UP-STATION OR PERPENDICULAR TO MOVEMENT; DRAW
										PLAN W/ UP-STATION IDENTIFIED. MAP CRACKS - LOCATIONS, LENGTH, WIDTH, DEPTH,
										& DIRECTION.</label>
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