import React, { Component } from 'react';
import { Button } from '@mui/material';

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
							<div className="row">
								<div className="col-md">GEOTECHNICAL INITIAL SITE ASSESSMENT</div>
								<div className="col-md-3 d-flex justify-content-end">GISA-001 (NEW 1/2022)</div>
							</div>
							<hr></hr>

							<div className="row">
								<div className="col-md"><input type="text" className="form-control" value={date} onChange={this.handleDateChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={district} onChange={this.handleDistrictChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={county} onChange={this.handleCountyChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={route} onChange={this.handleRouteChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={postmile} onChange={this.handlePostMileChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={ea} onChange={this.handleEaChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={projectid} onChange={this.handleProjecrIDChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={dateincidentreport} onChange={this.handleDateIncidentChange} /></div>
							</div>

							<div className="row">
								<div className="col-md d-flex justify-content-center"><label>Date</label></div>
								<div className="col-md d-flex justify-content-center"><label>District</label></div>
								<div className="col-md d-flex justify-content-center"><label>County</label></div>
								<div className="col-md d-flex justify-content-center"><label>Route</label></div>
								<div className="col-md d-flex justify-content-center"><label>Post Mile</label></div>
								<div className="col-md d-flex justify-content-center"><label>EA</label></div>
								<div className="col-md d-flex justify-content-center"><label>Project ID</label></div>
								<div className="col-md d-flex justify-content-center"><label>Date Incident</label></div>
							</div>
							<br></br>

							<div className="row">
								<div className="col-2"><input type="text" className="form-control" value={latitude} onChange={this.handleLatitudeChange}/></div>
								<div className="col-2"><input type="text" className="form-control" value={longitude} onChange={this.handleLongitudeChange} /></div>
								<div className="col-2 d-flex justify-content-end"><label>District Contact:</label></div>
								<div className="col-2"><input type="text" className="form-control" value={dclastname} onChange={this.handleDcLastnameChange}/></div>
								<div className="col-2"><input type="text" className="form-control" value={dcfirstname} onChange={this.handleDcFirstnameChange}/></div>
								<div className="col-2"><input type="text" className="form-control" value={dcsnumber} onChange={this.handleDcSnumberChange}/></div>
							</div>

							<div className="row">
								<div className="col-2 d-flex justify-content-center"><label>Latitude</label></div>
								<div className="col-2 d-flex justify-content-center"><label>Longitude</label></div>
								<div className="col-2 d-flex justify-content-center"><label></label></div>
								<div className="col-2 d-flex justify-content-center"><label>Last Name</label></div>
								<div className="col-2 d-flex justify-content-center"><label>First Name</label></div>
								<div className="col-2 d-flex justify-content-center"><label>S Number</label></div>
							</div>
							<br></br>

							<div className="row">
								<div className="col-md"><input type="text" className="form-control" value={lastname} onChange={this.handleLastnameChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={firstname} onChange={this.handleFirstnameChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={snumber} onChange={this.handleSNumberChange}/></div>
								<div className="col-md"><input type="text" className="form-control" value={phone} onChange={this.handlePhoneChange} /></div>
								<div className="col-md"><input type="text" className="form-control" value={cellphone} onChange={this.handleCellphoneChange} /></div>
							</div>

							<div className="row">
								<div className="col-md d-flex justify-content-center"><label>Last Name</label></div>
								<div className="col-md d-flex justify-content-center"><label>First Name</label></div>
								<div className="col-md d-flex justify-content-center"><label>S Number</label></div>
								<div className="col-md d-flex justify-content-center"><label>Phone</label></div>
								<div className="col-md d-flex justify-content-center"><label>Cell Phone</label></div>
							</div>

							<hr></hr>
							<div className="row">
								<div className="col"><label>(TRB Special Report 24/7)</label></div>
							</div>
							<br></br>

							<div className="row">
								<div className="col-md"><p className="text-decoration-underline">Incident Type:</p></div>
								<div className="col-md"><p className="text-decoration-underline">Distribution:</p></div>
								<div className="col-md"><p className="text-decoration-underline">Highway Staus:</p></div>
								<div className="col-md"><p className="text-decoration-underline">Payment/Ground Status:</p></div>
							</div>

							<div className="row">
								<div className="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rock" /> (Rock) Fall</div>
								<div className="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="advancing" /> Advancing</div>
								<div className="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="open" /> Open</div>
								<div className="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="paymentground" /> Payment/Ground Checks </div>
							</div>

							<div className="row">
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="topple" /> Topple</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="retrogressing" /> Retrogressing</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="shoulder" /> Shoulder Closed</div>
								<div className="col"><input onChange={this.handleFeetLengthChange} type="text" className="form-control form-control-sm" value={feetlength} /></div>
								<div className="col"><label>Feet, Length</label></div>
							</div>

							<div className="row">
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slide" /> Slide</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="enlarging" /> Enlarging</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="lanesclosed" /> Lane(s) Closed
									<div className="col-2"><input type="text" className="form-control form-control-sm" value={lanes} onChange={this.handleLanesChange} />Lanes</div></div>
								<div className="col-md"><input onChange={this.handleInchesHorizontalChange} type="text" className="form-control form-control-sm" value={incheshorizontal} /></div>
								<div className="col-md"><label>IN. Horizontal</label></div>

							</div>

							<div className="row">
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="spread" /> Spread</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="widening" /> Widening</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="oneway" /> One-way Closed</div>
								<div className="col"><input onChange={this.handleInchesVerticalChange} type="text" className="form-control form-control-sm" value={inchesvertical} /></div>
								<div className="col"><label>IN. Vertical</label></div>
							</div>


							<div className="row">
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="flow" /> Flow</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="moving" /> Moving</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="twoway" /> Two-way Closed</div>
								<div className="col"><input onChange={this.handleInchesDepthChange} type="text" className="form-control form-control-sm" value={inchesdepth} /></div>
								<div className="col"><label>IN, Dep. of Crack</label></div>
							</div>

							<div className="row">
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="compound" /> Compound</div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="confined" /> Confined</div>
								<div className="col-3"><label></label></div>
								<div className="col"><label>Settlement</label></div>
								<div className="col"><input onChange={this.handleSettleInchesChange} type="text" className="form-control form-control-sm" value={settleinches} /></div>
								<div className="col"><label>Inches</label></div>
							</div>

							<div className="row">
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="erosion" /> Erosion</div>
								<div className="col-3"><label></label></div>
								<div className="col-3"><label></label></div>
								<div className="col"><label>Bulge</label></div>
								<div className="col"><input onChange={this.handleBulgeInchesChange} type="text" className="form-control form-control-sm" value={bulgeinches} /></div>
								<div className="col"><label>Inches</label></div>

							</div>

							<div className="row">
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surfacial" /> Surfacial Sloughing</div>
								<div className="col-3"><label></label></div>
								<div className="col-3"><label></label></div>
								<div className="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="indented" /> Indented by Rocks</div>
							</div>

							<div className="row">
								<div className="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="scoured" /> Scoured </div>
							</div>

							<div className="row">
								<div className="col"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="washout" /> Washout</div>
							</div>
							<hr></hr>

							<div className="row">
								<div className="col-2"><p className="text-decoration-underline">Material:</p></div>
								<div className="col-2"><label></label></div>
								<div className="col-3"><p className="text-decoration-underline">Water Content:</p></div>
								<div className="col"><p className="text-decoration-underline">Recommended Actions:</p></div>
							</div>

							<div className="row">
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rock" /> Rock</div>
								<div className="col-3"><label>EST. %</label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="dry" /> Dry</div>
								<div className="col-1"><label>Immediate Actions:</label></div>
								<div className="col-1"><label>Follow Up Actions:</label></div>
							</div>

							<div className="row">
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="bedding" /> Bedding</div>
								<div className="col-1"><input onChange={this.handleClayChange} type="text" className="form-control form-control-sm" value={clay} />Clay</div>
								<div className="col-2"><label></label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="moist" /> Moist</div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="one" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="opentraffic" /></div>
								<div className="col"><label>Open Highway Traffic</label></div>
								<div className="col-1"><input onChange={this.handleLanesPageTwoChange} type="text" className="form-control form-control-sm" value={lanespagetwo} /></div>
								<div className="col-1"><label>Lanes</label></div>
							</div>

							<div className="row">
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="joints" /> Joints</div>
								<div className="col-1"><input onChange={this.handleSiltChange} type="text" className="form-control" value={silt} />Silt</div>
								<div className="col-2"><label></label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="wet" /> Wet</div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="two" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="openshoulder" /></div>
								<div className="col"><label>Open Highway Shoulder</label></div>
							</div>

							<div className="row">
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fractures" /> Fractures</div>
								<div className="col-1"><input onChange={this.handleSandChange} type="text" className="form-control" value={sand} />Sand</div>
								<div className="col-2"><label></label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="flowing" /> Flowing</div>
								<div className="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="three" /></div>
								<div className="col">Close Highway<input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="onee" /> One <input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="bothdirections" /> Both Directions</div>
							</div>

							<div className="row">
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="soil" /> Soil</div>
								<div className="col-1"><input onChange={this.handleGravelChange} type="text" className="form-control" value={gravel} />Gravel</div>
								<div className="col-2"><label></label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="seep" /> Seep</div>
								<div className="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="four" /></div>
								<div className="col"><label> Remove Landslide Debris From Highway</label></div>
							</div>

							<div className="row">
								<div className="col-1"><label></label></div>
								<div className="col-1"><label></label></div>
								<div className="col-2"><label></label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="spring" /> Spring</div>
								<div className="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="five" /></div>
								<div className="col"><label> Place K-Rail or Fence</label></div>
							</div>

							<div className="row">
								<div className="col-4"><label></label></div>
								<div className="col-3"><label></label></div>
								<div className="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="six" /></div>
								<div className="col"><label> Cover Slope with Plastic</label></div>
							</div>

							<div className="row">
								<div className="col-4"><p className="text-decoration-underline">Vegetation on Slope:</p></div>
								<div className="col-3"><p className="text-decoration-underline">Water/Drainage:</p></div>
								<div className="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="seven" /></div>
								<div className="col"><label> Divert Surface Water Runoff</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label></label></div>
								<div className="col-2"><label>Coverage %</label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="clogged" /> Clogged Inlet</div>
								<div className="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="eight" /></div>
								<div className="col"><label> Remove Culvert Blockage</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Trees</label></div>
								<div className="col-1"><input onChange={this.handleTreesChange} type="text" className="form-control" value={trees} /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="compromised" /> Compromised Drains</div>
								<div className="col-2"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="nine" /></div>
								<div className="col"><label> Dewater with Pump, Trench, etc.</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Bushes/Shrubs</label></div>
								<div className="col-1"><input onChange={this.handleBushesShrubsChange} type="text" className="form-control" value={bushesshrubs} /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surface" /> Surface Runoff</div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="ten" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="dewater" /></div>
								<div className="col"><label>Dewater with Horizontal Drains</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Groundcover</label></div>
								<div className="col-1"><input onChange={this.handleGroundCoverChange} type="text" className="form-control" value={groundcover} /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="torrent" /> Torrent, Surge, Flood</div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="eleven" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="temporaryshoring" /></div>
								<div className="col"><label>Construct Temporary Shoring</label></div>
							</div>

							<div className="row">
								<div className="col-1"><label></label></div>
								<div className="col-1"><label></label></div>
								<div className="col-2"><label></label></div>
								<div className="col-1"><label>Impacted:</label></div>
								<div className="col-2"><label>May be Impacted:</label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="twelve" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="buttress" /></div>
								<div className="col"><label>Buttress Taoe of Landslide</label></div>
							</div>

							<div className="row">
								<div className="col-3"><p className="text-decoration-underline">Measurements:</p></div>
								<div className="col-1"><label></label></div>
								<div className="col-1 d-flex justify-content-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impactone" /></div>
								<div className="col-1 d-flex justify-content-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="utilties" /></div>
								<div className="col-1"><label>Adj. Utilities</label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="thirteen" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="rockprotection" /></div>
								<div className="col"><label>Place Rock Slope Protection</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Slope Height, ft</label></div>
								<div className="col-1"><input onChange={this.handleSlopeChange} type="text" className="form-control" value={slope} /></div>
								<div className="col-1"><label></label></div>
								<div className="col-1 d-flex justify-content-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impacttwo" /></div>
								<div className="col-1 d-flex justify-content-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="properties" /></div>
								<div className="col-1"><label>Adj. Properties</label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fourteen" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="routinemonitor" /></div>
								<div className="col"><label>Routine Visual Monitor</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Original Slope, deg</label></div>
								<div className="col-1"><input onChange={this.handleOriginalSlopeChange} type="text" className="form-control" value={originalslope} /></div>
								<div className="col-1"><label></label></div>
								<div className="col-1 d-flex justify-content-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="impactthree" /></div>
								<div className="col-1 d-flex justify-content-center"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="structures" /></div>
								<div className="col-1"><label>Adj. Structures</label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="fifteen" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slopetooriginal" /></div>
								<div className="col"><label>Reconstruct Slope to Original Condition</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Landslide Width, ft</label></div>
								<div className="col-1"><input onChange={this.handleLandslideWidthChange} type="text" className="form-control" value={landslidewidth} /></div>
								<div className="col-4"><label></label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="sixteen" /></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="slopewithgeosyn" /></div>
								<div className="col"><label>Reconstruct Slope with Geosynthetics</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Landslide Length, ft</label></div>
								<div className="col-1"><input onChange={this.handleLandslideLengthChange} type="text" className="form-control" value={landslidelength} /></div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="repairculvert" /></div>
								<div className="col"><label>Repair Culvert/Drainage Pipe</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Main Scarp Height, ft</label></div>
								<div className="col-1"><input onChange={this.handleMainScarpChange} type="text" className="form-control" value={mainscarp} /> </div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="erosioncontrol" /></div>
								<div className="col"><label>Install Erosion Control - By Dist. Landscape</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Landslide Slope, deg</label></div>
								<div className="col-1"><input onChange={this.handleLandslideSlopeChange} type="text" className="form-control" value={landslideslope} /></div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="surveysite" /></div>
								<div className="col"><label>Survey the Site - By Dist Landscape</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Length of Roadway Encroached, ft</label></div>
								<div className="col-1"><input onChange={this.handleLengthofRoadwayChange} type="text" className="form-control" value={lengthofroadway} /></div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="geologicalmapping" /></div>
								<div className="col"><label>Perform Geological Mapping</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Width of Roadway Encroached, ft</label></div>
								<div className="col-1"><input onChange={this.handleWidthofRoadwayChange} type="text" className="form-control" value={widthofroadway} /></div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="subsurfaceexploration" /></div>
								<div className="col"><label>Perform Subsurface Exploration</label></div>
							</div>

							<div className="row">
								<div className="col-8"><label></label></div>
								<div className="col-1"><input onChange={this.handleCheckbox} type="checkbox" name="formoptions" value="detaileddesign" /></div>
								<div className="col"><label>Perform Detailed Design & Produce Plans</label></div>

							</div>
							<hr></hr>

							<div className="row">
								<div className="col-md"><input type="text" className="form-control" value={date} onChange={this.handleDateChange}/></div>
								<div className="col-md"><input type="text" className="form-control" value={district} onChange={this.handleDistrictChange}/></div>
								<div className="col-md"><input type="text" className="form-control" value={county} onChange={this.handleCountyChange}/></div>
								<div className="col-md"><input type="text" className="form-control" value={route} onChange={this.handleRouteChange}/></div>
								<div className="col-md"><input type="text" className="form-control" value={postmile} onChange={this.handlePostMileChange}/></div>
								<div className="col-md"><input type="text" className="form-control" value={latitude} onChange={this.handleLatitudeChange}/></div>
								<div className="col-md"><input type="text" className="form-control" value={longitude} onChange={this.handleLongitudeChange}/></div>
							</div>

							<div className="row">
								<div className="col-md d-flex justify-content-center"><label>Date</label></div>
								<div className="col-md d-flex justify-content-center"><label>District</label></div>
								<div className="col-md d-flex justify-content-center"><label>County</label></div>
								<div className="col-md d-flex justify-content-center"><label>Route</label></div>
								<div className="col-md d-flex justify-content-center"><label>Post Mile</label></div>
								<div className="col-md d-flex justify-content-center"><label>Latitude</label></div>
								<div className="col-md d-flex justify-content-center"><label>Longitude</label></div>
							</div>
							<br></br>

							<div className="row">
								<p className="fw-bold">OBSERVATIONS AND NOTES:</p>
								<div className="mb-3">
									<label htmlFor="exampleFormControlTextarea1" className="form-label">LANDSLIDE MOVING/DEVELOPING RATE, PAVEMENT/GROUND CRACKS W/ MEASUREMENTS;
										SLOPE AND BEDDING ORIENTATIONS IN RELATION TO ROADWAY ALIGNMENT, JOINTS,
										FRACTURES; SITE ACCESS FOR FURTHER INVESTIGATION AND CONSTRUCTION; DRAINAGE;
										EROSION; POTENTIAL CAUSES OF INCIDENT; CONSTRAINTS; ADDITIONAL NOTES ON
										CHECKED BOXES; SITE HISTORY (INTERVIEW MAINTENANCE); MAP CRACKS - LOCATION,
										LENGTH, HORIZONTAL & VERTICAL DISPLACEMENTS, DEPTH, & DIRECTION. TAKE PLENTY
										OF PHOTOS AND MEASUREMENTS.</label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
								</div>
							</div>
							<hr></hr>

							<div className="row">
								<p className="fw-bold">SKETCH:</p>
								<div className="mb-3">
									<label htmlFor="exampleFormControlTextarea1" className="form-label">DRAW CROSS SECTION FACING UP-STATION OR PERPENDICULAR TO MOVEMENT; DRAW PLAN W/ UP-STATION IDENTIFIED. <p className="fst-italic">MAP CRACKS - LOCATIONS, LENGTH, WIDTH, DEPTH, & DIRECTION.</p></label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
								</div>
							</div>

							<div className="row justify-content-md-center">
								<div className="col-auto"><a href="/" className="btn btn-outline-secondary">Back</a></div>
								<div className="col-auto"><a href="/Sear0ch" className="btn btn-outline-secondary">New Search</a></div>
								<Button variant='outlined' className='col-auto' a href='/Edit'>Edit </Button>
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