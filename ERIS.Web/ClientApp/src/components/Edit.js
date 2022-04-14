import React, { Component } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export class Edit extends Component {
	
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

	

	handleSubmit = event => {
	
	}

	render() {
		const { date, district, county, route, postmile, ea, projectid, dateincidentreport,
			latitude, longitude, dclastname, dcfirstname, dcsnumber, lastname, firstname,
			snumber, phone, cellphone, lanes, feetlength, incheshorizontal, inchesvertical,
			inchesdepth, settleinches, bulgeinches, clay, silt, sand, gravel, trees, bushesshrubs,
			groundcover, slope, originalslope, landslidewidth, landslidelength, mainscarp, landslideslope,
			lengthofroadway, widthofroadway, lanespagetwo, status } = this.state

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="card mt-3">
					<div className="card-body">
						<div>
							<div class="row">
								<div class="col-md">GEOTECHNICAL INITIAL SITE ASSESSMENT</div>
								<div class="col-md-3 d-flex justify-content-end">GISA-001 (NEW 1/2022)</div>
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
								<div class="col-md d-flex justify-content-center"><label>Date</label></div>
								<div class="col-md d-flex justify-content-center"><label>District</label></div>
								<div class="col-md d-flex justify-content-center"><label>County</label></div>
								<div class="col-md d-flex justify-content-center"><label>Route</label></div>
								<div class="col-md d-flex justify-content-center"><label>Post Mile</label></div>
								<div class="col-md d-flex justify-content-center"><label>EA</label></div>
								<div class="col-md d-flex justify-content-center"><label>Project ID</label></div>
								<div class="col-md d-flex justify-content-center"><label>Date Incident</label></div>
							</div>
							<br></br>

							<div class="row">
								<div class="col-2"><input type="text" class="form-control" value={latitude} onChange={this.handleLatitudeChange}/></div>
								<div class="col-2"><input type="text" class="form-control" value={longitude} onChange={this.handleLongitudeChange} /></div>
								<div class="col-2 d-flex justify-content-end"><label>District Contact:</label></div>
								<div class="col-2"><input type="text" class="form-control" value={dclastname} onChange={this.handleDcLastnameChange}/></div>
								<div class="col-2"><input type="text" class="form-control" value={dcfirstname} onChange={this.handleDcFirstnameChange}/></div>
								<div class="col-2"><input type="text" class="form-control" value={dcsnumber} onChange={this.handleDcSnumberChange}/></div>
							</div>

							<div class="row">
								<div class="col-2 d-flex justify-content-center"><label>Latitude</label></div>
								<div class="col-2 d-flex justify-content-center"><label>Longitude</label></div>
								<div class="col-2 d-flex justify-content-center"><label></label></div>
								<div class="col-2 d-flex justify-content-center"><label>Last Name</label></div>
								<div class="col-2 d-flex justify-content-center"><label>First Name</label></div>
								<div class="col-2 d-flex justify-content-center"><label>S Number</label></div>
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
								<div class="col-md d-flex justify-content-center"><label>Last Name</label></div>
								<div class="col-md d-flex justify-content-center"><label>First Name</label></div>
								<div class="col-md d-flex justify-content-center"><label>S Number</label></div>
								<div class="col-md d-flex justify-content-center"><label>Phone</label></div>
								<div class="col-md d-flex justify-content-center"><label>Cell Phone</label></div>
							</div>

							<hr></hr>
							<div class="row">
								<div class="col"><label>(TRB Special Report 24/7)</label></div>
							</div>
							<br></br>

							<div class="row">
								<div class="col-md"><p class="text-decoration-underline">Incident Type:</p></div>
								<div class="col-md"><p class="text-decoration-underline">Distribution:</p></div>
								<div class="col-md"><p class="text-decoration-underline">Highway Staus:</p></div>
								<div class="col-md"><p class="text-decoration-underline">Payment/Ground Status:</p></div>
							</div>

							<div class="row">
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rock" /> (Rock) Fall</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="advancing" /> Advancing</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="open" /> Open</div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="paymentground" /> Payment/Ground Checks </div>
							</div>

							<div class="row">
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="topple" /> Topple</div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="retrogressing" /> Retrogressing</div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="shoulder" /> Shoulder Closed</div>
								<div class="col"><input onChange={this.handleFeetLengthChange} type="text" class="form-control form-control-sm" value={feetlength} /></div>
								<div class="col"><label>Feet, Length</label></div>
							</div>

							<div class="row">
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slide" /> Slide</div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="enlarging" /> Enlarging</div>
								<div class="col-md"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="lanesclosed" /> Lane(s) Closed</div>
								<div class="col-md"><input type="text" class="form-control form-control-sm" placeholder="Lanes" value={lanes} onChange={this.handleLanesChange} /></div>
								<div class="col-md"><input onChange={this.handleInchesHorizontalChange} type="text" class="form-control form-control-sm" value={incheshorizontal} /></div>
								<div class="col-md"><label>IN. Horizontal</label></div>
							</div>

							<div class="row">
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="spread" /> Spread</div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="widening" /> Widening</div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="oneway" /> One-way Closed</div>
								<div class="col"><input onChange={this.handleInchesVerticalChange} type="text" class="form-control form-control-sm" value={inchesvertical} /></div>
								<div class="col"><label>IN. Vertical</label></div>
							</div>

							<div class="row">
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="flow" /> Flow</div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="moving" /> Moving</div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="twoway" /> Two-way Closed</div>
								<div class="col"><input onChange={this.handleInchesDepthChange} type="text" class="form-control form-control-sm" value={inchesdepth} /></div>
								<div class="col"><label>IN. Dep. of Crack</label></div>
							</div>

							<div class="row">
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="compound" /> Compound</div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="confined" /> Confined</div>
								<div class="col-3"><label></label></div>
								<div class="col"><label>Settlement</label></div>
								<div class="col"><input onChange={this.handleSettleInchesChange} type="text" class="form-control form-control-sm" value={settleinches} /></div>
								<div class="col"><label>Inches</label></div>
							</div>

							<div class="row">
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="erosion" /> Erosion</div>
								<div class="col-3"><label></label></div>
								<div class="col-3"><label></label></div>
								<div class="col"><label>Bulge</label></div>
								<div class="col"><input onChange={this.handleBulgeInchesChange} type="text" class="form-control form-control-sm" value={bulgeinches} /></div>
								<div class="col"><label>Inches</label></div>

							</div>

							<div class="row">
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surfacial" /> Surfacial Sloughing</div>
								<div class="col-3"><label></label></div>
								<div class="col-3"><label></label></div>
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="indented" /> Indented by Rocks</div>
							</div>

							<div class="row">
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="scoured" /> Scoured </div>
							</div>

							<div class="row">
								<div class="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="washout" /> Washout</div>
							</div>
							<hr></hr>

							<div class="row">
								<div class="col-2"><p class="text-decoration-underline">Material:</p></div>
								<div class="col-2"><label></label></div>
								<div class="col-3"><p class="text-decoration-underline">Water Content:</p></div>
								<div class="col"><p class="text-decoration-underline">Recommended Actions:</p></div>
							</div>

							<div class="row">
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rock" /> Rock</div>
								<div class="col-3 d-flex justify-content-center"><label>EST. %</label></div>
								<div class="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="dry" /> Dry</div>
								<div class="col-2 d-flex justify-content-end"><label>Immediate Actions:</label></div>
								<div class="col-2"><label>Follow Up Actions:</label></div>
							</div>

							<div class="row">
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="bedding" /> Bedding</div>
								<div class="col-md d-flex justify-content-end"><label>Clay</label></div>
								<div class="col-md"><input onChange={this.handleClayChange} type="text" class="form-control form-control-sm" value={clay} /></div>
								<div class="col-1"><label></label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="moist" /> Moist</div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="one" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="opentraffic" /></div>
								<div class="col-2"><label>Open Highway Traffic</label></div>
								<div class="col-md "><input onChange={this.handleLanesPageTwoChange} type="text" class="form-control form-control-sm" placeholder="Lanes" value={lanespagetwo} /></div>
							</div>

							<div class="row">
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="joints" /> Joints</div>
								<div class="col-md d-flex justify-content-end"><label>Silt</label></div>
								<div class="col-md"><input onChange={this.handleSiltChange} type="text" class="form-control form-control-sm" value={silt} /></div>
								<div class="col-1"><label></label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="wet" /> Wet</div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="two" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="openshoulder" /></div>
								<div class="col-3"><label>Open Highway Shoulder</label></div>
							</div>

							<div class="row">
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fractures" /> Fracture</div>
								<div class="col-md d-flex justify-content-end"><label>Sand</label></div>
								<div class="col-md"><input onChange={this.handleSandChange} type="text" class="form-control form-control-sm" value={sand} /></div>
								<div class="col-1"><label></label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="flowing" /> Flowing</div>
								<div class="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="three" /></div>
								<div class="col-3">Close Highway <input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="onee" /> One <input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="bothdirections" /> Both Directions</div>
							</div>

							<div class="row">
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="soil" /> Soil</div>
								<div class="col-md d-flex justify-content-end"><label>Gravel</label></div>
								<div class="col-md"><input onChange={this.handleGravelChange} type="text" class="form-control form-control-sm" value={gravel} /></div>
								<div class="col-1"><label></label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="seep" /> Seep</div>
								<div class="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="four" /></div>
								<div class="col-3"><label> Remove Landslide Debris From Highway</label></div>
							</div>

							<div class="row">
								<div class="col-1"><label></label></div>
								<div class="col-1"><label></label></div>
								<div class="col-2"><label></label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="spring" /> Spring</div>
								<div class="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="five" /></div>
								<div class="col"><label> Place K-Rail or Fence</label></div>
							</div>

							<div class="row">
								<div class="col-4"><label></label></div>
								<div class="col-3"><label></label></div>
								<div class="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="six" /></div>
								<div class="col"><label> Cover Slope with Plastic</label></div>
							</div>

							<div class="row">
								<div class="col-4"><p class="text-decoration-underline">Vegetation on Slope:</p></div>
								<div class="col-3"><p class="text-decoration-underline">Water/Drainage:</p></div>
								<div class="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="seven" /></div>
								<div class="col"><label> Divert Surface Water Runoff</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label></label></div>
								<div class="col-2"><label>Coverage %</label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="clogged" /> Clogged Inlet</div>
								<div class="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="eight" /></div>
								<div class="col"><label> Remove Culvert Blockage</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Trees</label></div>
								<div class="col-1"><input onChange={this.handleTreesChange} type="text" class="form-control form-control-sm" value={trees} /></div>
								<div class="col-1"><label></label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="compromised" /> Compromised Drains</div>
								<div class="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="nine" /></div>
								<div class="col"><label> Dewater with Pump, Trench, etc.</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Bushes/Shrubs</label></div>
								<div class="col-1"><input onChange={this.handleBushesShrubsChange} type="text" class="form-control form-control-sm" value={bushesshrubs} /></div>
								<div class="col-1"><label></label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surface" /> Surface Runoff</div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="ten" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="dewater" /></div>
								<div class="col"><label>Dewater with Horizontal Drains</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Groundcover</label></div>
								<div class="col-1"><input onChange={this.handleGroundCoverChange} type="text" class="form-control form-control-sm" value={groundcover} /></div>
								<div class="col-1"><label></label></div>
								<div class="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="torrent" /> Torrent, Surge, Flood</div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="eleven" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="temporaryshoring" /></div>
								<div class="col"><label>Construct Temporary Shoring</label></div>
							</div>

							<div class="row">
								<div class="col-1"><label></label></div>
								<div class="col-1"><label></label></div>
								<div class="col-2"><label></label></div>
								<div class="col-1"><label>Impacted:</label></div>
								<div class="col-2"><label>May be Impacted:</label></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="twelve" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="buttress" /></div>
								<div class="col"><label>Buttress Taoe of Landslide</label></div>
							</div>

							<div class="row">
								<div class="col-3"><p class="text-decoration-underline">Measurements:</p></div>
								<div class="col-1"><label></label></div>
								<div class="col-1 d-flex justify-content-center align-items-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impactone" /></div>
								<div class="col-2 d-flex justify-content-around align-items-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="utilties" /> Adj. Utilities</div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="thirteen" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rockprotection" /></div>
								<div class="col"><label>Place Rock Slope Protection</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Slope Height, ft</label></div>
								<div class="col-1"><input onChange={this.handleSlopeChange} type="text" class="form-control form-control-sm" value={slope} /></div>
								<div class="col-1 "><label></label></div>
								<div class="col-1 d-flex justify-content-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impacttwo" /></div>
								<div class="col-2 d-flex justify-content-evenly"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="properties" /> Adj. Properties</div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fourteen" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="routinemonitor" /></div>
								<div class="col"><label>Routine Visual Monitor</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Original Slope, deg</label></div>
								<div class="col-1"><input onChange={this.handleOriginalSlopeChange} type="text" class="form-control form-control-sm" value={originalslope} /></div>
								<div class="col-1"><label></label></div>
								<div class="col-1 d-flex justify-content-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impactthree" /></div>
								<div class="col-2 d-flex justify-content-evenly"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="structures" /> Adj. Structures</div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fifteen" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slopetooriginal" /></div>
								<div class="col"><label>Reconstruct Slope to Original Condition</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Landslide Width, ft</label></div>
								<div class="col-1"><input onChange={this.handleLandslideWidthChange} type="text" class="form-control form-control-sm" value={landslidewidth} /></div>
								<div class="col-4"><label></label></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="sixteen" /></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slopewithgeosyn" /></div>
								<div class="col"><label>Reconstruct Slope with Geosynthetics</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Landslide Length, ft</label></div>
								<div class="col-1"><input onChange={this.handleLandslideLengthChange} type="text" class="form-control form-control-sm" value={landslidelength} /></div>
								<div class="col-5"><label></label></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="repairculvert" /></div>
								<div class="col"><label>Repair Culvert/Drainage Pipe</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Main Scarp Height, ft</label></div>
								<div class="col-1"><input onChange={this.handleMainScarpChange} type="text" class="form-control form-control-sm" value={mainscarp} /> </div>
								<div class="col-5"><label></label></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="erosioncontrol" /></div>
								<div class="col"><label>Install Erosion Ctrl - By Dist. Landscape</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Landslide Slope, deg</label></div>
								<div class="col-1"><input onChange={this.handleLandslideSlopeChange} type="text" class="form-control form-control-sm" value={landslideslope} /></div>
								<div class="col-5"><label></label></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surveysite" /></div>
								<div class="col"><label>Survey the Site - By Dist Landscape</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Length of Roadway, ft</label></div>
								<div class="col-1"><input onChange={this.handleLengthofRoadwayChange} type="text" class="form-control form-control-sm" value={lengthofroadway} /></div>
								<div class="col-5"><label></label></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="geologicalmapping" /></div>
								<div class="col"><label>Perform Geological Mapping</label></div>
							</div>

							<div class="row">
								<div class="col-2"><label>Width of Roadway, ft</label></div>
								<div class="col-1"><input onChange={this.handleWidthofRoadwayChange} type="text" class="form-control form-control-sm" value={widthofroadway} /></div>
								<div class="col-5"><label></label></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="subsurfaceexploration" /></div>
								<div class="col"><label>Perform Subsurface Exploration</label></div>
							</div>

							<div class="row">
								<div class="col-8"><label></label></div>
								<div class="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="detaileddesign" /></div>
								<div class="col"><label>Perform Detailed Design & Produce Plans</label></div>
							</div>
							<hr></hr>

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
								<div class="col-md d-flex justify-content-center"><label>Date</label></div>
								<div class="col-md d-flex justify-content-center"><label>District</label></div>
								<div class="col-md d-flex justify-content-center"><label>County</label></div>
								<div class="col-md d-flex justify-content-center"><label>Route</label></div>
								<div class="col-md d-flex justify-content-center"><label>Post Mile</label></div>
								<div class="col-md d-flex justify-content-center"><label>Latitude</label></div>
								<div class="col-md d-flex justify-content-center"><label>Longitude</label></div>
							</div>
							<br></br>

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
								<Box >
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">Status</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={status}
											label="Age"
										>
											<MenuItem value={10}>Acitve</MenuItem>
											<MenuItem value={20}>Closed</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</div>
							<br></br>
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