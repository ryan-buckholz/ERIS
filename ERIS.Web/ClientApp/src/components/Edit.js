import React, { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { Button, Box, FormControl, MenuItem, InputLabel, Select } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import Moment from 'moment';


export function Edit() {
	let { id } = useParams();
	const [ profile, setProfile ] = useState([]);
	const [ details, setDetails ] = useState([]);
	const navigate = useNavigate();
	const [isImmediateActionCloseHighWay, setCloseHighway] = useState([]);
	const [detailsUrl, setDetailsUrl] = useState([]);

	useEffect(() => {
		createAPIEndpoint(ENDPOINTS.ASSESSMENTDETAILS).fetchById(id)
		.then(res => {
			setDetails(res.data);
			setDetailsUrl('/Details/' + id);

			if (res.data.isImmediateActionCloseHighwayOneDirection || res.data.isImmediateActionCloseHighWayBothDirections) {
				setCloseHighway(true);
			}
			else {
				setCloseHighway(false);
			}
		})
		.catch(err => console.log(err))
		createAPIEndpoint(ENDPOINTS.ASSESSMENTPROFILE).fetchById(id)
		.then(res => {
			setProfile(res.data);
		})
		.catch(err => console.log(err))
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		createAPIEndpoint(ENDPOINTS.ASSESSMENTPROFILE).update(id, profile)
		createAPIEndpoint(ENDPOINTS.ASSESSMENTDETAILS).update(id, details)
		.then( res => {
			navigate('/Details/'+id);
		})
		.catch(err => console.log(err))
	}


	return (
		<Layout>
			<form onSubmit={ handleSubmit }>
				<div className="card mt-3">
					<div className="card-body">
						<div>
							<div className="row">
								<div className="col-md">GEOTECHNICAL INITIAL SITE ASSESSMENT</div>
								<div className="col-md-3 d-flex justify-content-end">GISA-001 (NEW 1/2022)</div>
							</div>
							<hr></hr>

							<div className="row">
								<div className="col-md"><input type="text" className="form-control" value={Moment(profile.date).format("MM-DD-YYYY")} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.district} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.county} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.route} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.postMile} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.ea} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.projectID} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={Moment(profile.dateIncidentReported).format("MM-DD-YYYY")} disabled="enabled" /></div>
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
								<div className="col-2"><input type="text" className="form-control" value={profile.latitude} disabled="enabled" /></div>
								<div className="col-2"><input type="text" className="form-control" value={profile.longitude} disabled="enabled" /></div>
								<div className="col-2 d-flex justify-content-end"><label>District Contact:</label></div>
								<div className="col-2"><input type="text" className="form-control" value={profile.lastName} disabled="enabled" /></div>
								<div className="col-2"><input type="text" className="form-control" value={profile.firstName} disabled="enabled" /></div>
								<div className="col-2"><input type="text" className="form-control" value={profile.sNumber} disabled="enabled" /></div>
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
								<div className="col-md"><input type="text" className="form-control" value={profile.districtContactLastName} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.districtContactFirstName} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.districtContactSNumber} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.districtContactPhone} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.districtContactCellPhone} disabled="enabled" /></div>
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
								<div className="col-md"><p className="text-decoration-underline">Pavement/Ground Status:</p></div>
							</div>

							<div className="row">
								<div className="col"><input type="checkbox" name="formoptions" checked={details.isFall} disabled="enabled" /> (Rock) Fall</div>
								<div className="col"><input type="checkbox" name="formoptions" checked={details.isAdvancing} disabled="enabled" /> Advancing</div>
								<div className="col"><input type="checkbox" name="formoptions" checked={details.isHighwayOpen} disabled="enabled" /> Open</div>
								<div className="col"><input type="checkbox" name="formoptions" checked={details.isPavementGroundCracks} disabled="enabled" /> Pavement/Ground Cracks </div>
							</div>

							<div className="row">
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isTopple} disabled="enabled" /> Topple</div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isRetrogressing} disabled="enabled" /> Retrogressing</div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isShoulderClosed} disabled="enabled" /> Shoulder Closed</div>
								<div className="col"> <input type="text" className="form-control form-control-sm" value={details.crackLength} disabled="enabled" /></div>
								<div className="col"><label>Feet, Length</label></div>
							</div>

							<div className="row">
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isSlide} disabled="enabled" /> Slide</div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isEnlarging} disabled="enabled" /> Enlarging</div>
								<div className="col-md"><input type="checkbox" name="formoptions" checked={details.isLaneClosed} disabled="enabled" /> Lane(s) Closed </div>
								<div className="col-md"><input type="text" className="form-control form-control-sm" placeholder="Lanes" value={details.closedLanes} disabled="enabled" /> </div>
								<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.crackHorizontalDisplacement} disabled="enabled" /></div>
								<div className="col-md"><label>IN. Horizontal</label></div>
							</div>

							<div className="row">
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isSpread} disabled="enabled" /> Spread</div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isWidening} disabled="enabled" /> Widening</div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isOneWayClosed} disabled="enabled" /> One-way Closed</div>
								<div className="col"><input type="text" className="form-control form-control-sm" value={details.crackVerticalDisplacement} disabled="enabled" /></div>
								<div className="col"><label>IN. Vertical</label></div>
							</div>


							<div className="row">
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isFlow} disabled="enabled" /> Flow</div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isMoving} disabled="enabled" /> Moving</div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isTwoWayClosed} disabled="enabled" /> Two-way Closed</div>
								<div className="col"><input type="text" className="form-control form-control-sm" value={details.crackDepth} disabled="enabled" /></div>
								<div className="col"><label>IN. Dep. of Crack</label></div>
							</div>

							<div className="row">
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isCompound} disabled="enabled" /> Compound</div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isConfined} disabled="enabled" /> Confined</div>
								<div className="col-3"><label></label></div>
								<div className="col"><label>Settlement</label></div>
								<div className="col"><input type="text" className="form-control form-control-sm" value={details.crackSettlement} disabled="enabled" /></div>
								<div className="col"><label>Inches</label></div>
							</div>

							<div className="row">
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isErosion} disabled="enabled" /> Erosion</div>
								<div className="col-3"><label></label></div>
								<div className="col-3"><label></label></div>
								<div className="col"><label>Bulge</label></div>
								<div className="col"><input type="text" className="form-control form-control-sm" value={details.crackBulge} disabled="enabled" /></div>
								<div className="col"><label>Inches</label></div>

							</div>

							<div className="row">
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isSurfacialSloughing} disabled="enabled" /> Surfacial Sloughing</div>
								<div className="col-3"><label></label></div>
								<div className="col-3"><label></label></div>
								<div className="col"><input type="checkbox" name="formoptions" checked={details.isIndentedByRocks} disabled="enabled" /> Indented by Rocks</div>
							</div>

							<div className="row">
								<div className="col"><input type="checkbox" name="formoptions" checked={details.isScouredToe} disabled="enabled" /> Scoured </div>
							</div>

							<div className="row">
								<div className="col"><input type="checkbox" name="formoptions" checked={details.isWashout} disabled="enabled" /> Washout</div>
							</div>
							<hr></hr>

							<div className="row">
								<div className="col-2"><p className="text-decoration-underline">Material:</p></div>
								<div className="col-2"><label></label></div>
								<div className="col-3"><p className="text-decoration-underline">Water Content:</p></div>
								<div className="col"><p className="text-decoration-underline">Recommended Actions:</p></div>
							</div>

							<div className="row">
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isRock} disabled="enabled" /> Rock</div>
								<div className="col-3 d-flex justify-content-center"><label>EST. %</label></div>
								<div className="col-2"><input type="checkbox" name="formoptions" checked={details.isDry} disabled="enabled" /> Dry</div>
								<div className="col-2 d-flex justify-content-end"><label>Immediate Actions:</label></div>
								<div className="col-2"><label>Follow Up Actions:</label></div>
							</div>

							<div className="row">
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.hasBedding} disabled="enabled" /> Bedding</div>
								<div className="col-md d-flex justify-content-end"><label>Clay</label></div>
								<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.clayEstimate} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isMoist} disabled="enabled" /> Moist</div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionOpenHighwayTraffic} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionOpenHighwayTraffic} disabled="enabled" /></div>
								<div className="col-2"><label>Open Highway Traffic</label></div>
								<div className="col-md "><input type="text" className="form-control form-control-sm" placeholder="Lanes" value={details.openedLanesCount} disabled="enabled" /></div>
							</div>

							<div className="row">
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.hasJoints} disabled="enabled" /> Joints</div>
								<div className="col-md d-flex justify-content-end"><label>Silt</label></div>
								<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.siltEstimate} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isWet} disabled="enabled" /> Wet</div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionOpenHighwayShoulder} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionOpenHighwayShoulder} disabled="enabled" /></div>
								<div className="col-3"><label>Open Highway Shoulder</label></div>
							</div>

							<div className="row">
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.hasFractures} disabled="enabled" /> Fracture</div>
								<div className="col-md d-flex justify-content-end"><label>Sand</label></div>
								<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.sandEstimate} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isFlowingWater} disabled="enabled" /> Flowing</div>

								<div className="col-2"><input type="checkbox" name="formoptions" checked={isImmediateActionCloseHighWay} disabled="enabled" /></div>
								<div className="col-3">Close Highway <input type="checkbox" name="formoptions" checked={details.isImmediateActionCloseHighwayOneDirection} disabled="enabled" /> One <input type="checkbox" name="formoptions" checked={details.isImmediateActionCloseHighWayBothDirections} disabled="enabled" /> Both Directions</div>
							</div>

							<div className="row">
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isSoil} disabled="enabled" /> Soil</div>
								<div className="col-md d-flex justify-content-end"><label>Gravel</label></div>
								<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.gravelEstimate} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isSeep} disabled="enabled" /> Seep</div>
								<div className="col-2"><input type="checkbox" name="formoptions" checked={details.isImmediateActionRemoveLandslideDebris} disabled="enabled" /></div>
								<div className="col-3"><label> Remove Landslide Debris From Highway</label></div>
							</div>

							<div className="row">
								<div className="col-1"><label></label></div>
								<div className="col-1"><label></label></div>
								<div className="col-2"><label></label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.isSpring} disabled="enabled" /> Spring</div>
								<div className="col-2"><input type="checkbox" name="formoptions" checked={details.isImmediateActionPlaceKRailOrFence} disabled="enabled" /></div>
								<div className="col"><label> Place K-Rail or Fence</label></div>
							</div>

							<div className="row">
								<div className="col-4"><label></label></div>
								<div className="col-3"><label></label></div>
								<div className="col-2"><input type="checkbox" name="formoptions" checked={details.isImmediateActionCoverSlopeWithPlastic} disabled="enabled" /></div>
								<div className="col"><label> Cover Slope with Plastic</label></div>
							</div>

							<div className="row">
								<div className="col-4"><p className="text-decoration-underline">Vegetation on Slope:</p></div>
								<div className="col-3"><p className="text-decoration-underline">Water/Drainage:</p></div>
								<div className="col-2"><input type="checkbox" name="formoptions" checked={details.isImmediateActionDivertSurfaceWaterRunoff} disabled="enabled" /></div>
								<div className="col"><label> Divert Surface Water Runoff</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label></label></div>
								<div className="col-2"><label>Coverage %</label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.hasCloggedInlet} disabled="enabled" /> Clogged Inlet</div>
								<div className="col-2"><input type="checkbox" name="formoptions" checked={details.isImmediateActionRemoveCulvertBlockage} disabled="enabled" /></div>
								<div className="col"><label> Remove Culvert Blockage</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Trees</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.treesCoverageOnSlope} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.hasCompromisedDrains} disabled="enabled" /> Compromised Drains</div>
								<div className="col-2"><input type="checkbox" name="formoptions" checked={details.isImmediateActionDewaterWithPumpTrench} disabled="enabled" /></div>
								<div className="col"><label> Dewater with Pump, Trench, etc.</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Bushes/Shrubs</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.bushesShrubsCoverageOnSlope} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.hasSurfaceRunoff} disabled="enabled" /> Surface Runoff</div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionDewaterWithHorizontalDrains} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionDewaterWithHorizontalDrains} disabled="enabled" /></div>
								<div className="col"><label>Dewater with Horizontal Drains</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Groundcover</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.groundCoverCoverageOnSlope} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-3"><input type="checkbox" name="formoptions" checked={details.hasTorrentSurgeFlood} disabled="enabled" /> Torrent, Surge, Flood</div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionConstructTemporaryShoring} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionConstructTemporaryShoring} disabled="enabled" /></div>
								<div className="col"><label>Construct Temporary Shoring</label></div>
							</div>

							<div className="row">
								<div className="col-1"><label></label></div>
								<div className="col-1"><label></label></div>
								<div className="col-2"><label></label></div>
								<div className="col-1"><label>Impacted:</label></div>
								<div className="col-2"><label>May be Impacted:</label></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionButtressToeOfLandslide} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionButtressToeOfLandslide} disabled="enabled" /></div>
								<div className="col"><label>Buttress Taoe of Landslide</label></div>
							</div>

							<div className="row">
								<div className="col-3"><p className="text-decoration-underline">Measurements:</p></div>
								<div className="col-1"><label></label></div>
								<div className="col-1 d-flex justify-content-center align-items-center"><input type="checkbox" name="formoptions" checked={details.hasImpactedAdjacentUtilities} disabled="enabled" /></div>
								<div className="col-2 d-flex justify-content-around align-items-center"><input type="checkbox" name="formoptions" checked={details.hasMaybeImpactedAdjacentUtilities} disabled="enabled" /> Adj. Utilities</div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionPlaceRockSlopeProtection} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionPlaceRockSlopeProtection} disabled="enabled" /></div>
								<div className="col"><label>Place Rock Slope Protection</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Slope Height, ft</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.slopeHeight} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-1 d-flex justify-content-center"><input type="checkbox" name="formoptions" checked={details.hasImpactedAdjacentProperties} disabled="enabled" /></div>
								<div className="col-2 d-flex justify-content-evenly"><input type="checkbox" name="formoptions" checked={details.hasMaybeImpactedAdjacentProperties} disabled="enabled" /> Adj. Properties</div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionRoutineVisualMonitor} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionRoutineVisualMonitor} disabled="enabled" /></div>
								<div className="col"><label>Routine Visual Monitor</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Original Slope, deg</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.originalSlope} disabled="enabled" /></div>
								<div className="col-1"><label></label></div>
								<div className="col-1 d-flex justify-content-center"><input type="checkbox" name="formoptions" checked={details.hasImpactedAdjacentStructures} disabled="enabled" /></div>
								<div className="col-2 d-flex justify-content-evenly"><input type="checkbox" name="formoptions" checked={details.hasMaybeImpactedAdjacentStructures} disabled="enabled" /> Adj. Structures</div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionReconstructSlopeToOriginalCondition} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionReconstructSlopeToOriginalCondition} disabled="enabled" /></div>
								<div className="col"><label>Reconstruct Slope to Original Condition</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Landslide Width, ft</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.landslideWidth} disabled="enabled" /></div>
								<div className="col-4"><label></label></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isImmediateActionReconstructSlopeWithGeosynthetics} disabled="enabled" /></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionReconstructSlopeWithGeosynthetics} disabled="enabled" /></div>
								<div className="col"><label>Reconstruct Slope with Geosynthetics</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Landslide Length, ft</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.landslideLength} disabled="enabled" /></div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionRepairCulvertDrainagePipe} disabled="enabled" /></div>
								<div className="col"><label>Repair Culvert/Drainage Pipe</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Main Scarp Height, ft</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.mainScarpHeight} disabled="enabled" /> </div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionInstallErosionControl} disabled="enabled" /></div>
								<div className="col"><label>Install Erosion Ctrl - By Dist. Landscape</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Landslide Slope, deg</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.landslideSlope} disabled="enabled" /></div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionSurveySite} disabled="enabled" /></div>
								<div className="col"><label>Survey the Site - By Dist Landscape</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Length of Roadway, ft</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.roadwayEncroachedLength} disabled="enabled" /></div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionGeologicalMapping} disabled="enabled" /></div>
								<div className="col"><label>Perform Geological Mapping</label></div>
							</div>

							<div className="row">
								<div className="col-2"><label>Width of Roadway, ft</label></div>
								<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.roadwayEncroachedWidth} disabled="enabled" /></div>
								<div className="col-5"><label></label></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionSubsurfaceExploration} disabled="enabled" /></div>
								<div className="col"><label>Perform Subsurface Exploration</label></div>
							</div>

							<div className="row">
								<div className="col-8"><label></label></div>
								<div className="col-1"><input type="checkbox" name="formoptions" checked={details.isFollowUpActionDesignAndPlans} disabled="enabled" /></div>
								<div className="col"><label>Perform Detailed Design & Produce Plans</label></div>

							</div>
							<hr></hr>

							<div className="row">
								<div className="col-md"><input type="text" className="form-control" value={Moment(profile.date).format("MM-DD-YYYY")} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.district} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.county} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.route} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.postMile} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.latitude} disabled="enabled" /></div>
								<div className="col-md"><input type="text" className="form-control" value={profile.longitude} disabled="enabled" /></div>
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
									<textarea className="form-control" id="exampleFormControlTextarea1" defaultValue={details.observationsAndNotes} rows="5"
									onChange={e => {
										console.log(e.target.value);
										details.observationsAndNotes = e.target.value;
										console.log(details);
									}}									></textarea>
								</div>
							</div>
							<hr></hr>

							<div className="row">
								<p className="fw-bold">SKETCH:</p>
								<div className="mb-3">
									<label htmlFor="exampleFormControlTextarea1" className="form-label">DRAW CROSS SECTION FACING UP-STATION OR PERPENDICULAR TO MOVEMENT; DRAW PLAN W/ UP-STATION IDENTIFIED. <p className="fst-italic">MAP CRACKS - LOCATIONS, LENGTH, WIDTH, DEPTH, & DIRECTION.</p></label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="5" disabled="enabled"></textarea>
								</div>
							</div>
						</div>
							<hr></hr>

							<div className="row">
								<p className="fw-bold">SKETCH:</p>
								<div className="mb-3">
									<label htmlFor="exampleFormControlTextarea1" className="form-label">DRAW CROSS SECTION FACING UP-STATION OR PERPENDICULAR TO MOVEMENT; DRAW PLAN W/ UP-STATION IDENTIFIED. <p className="fst-italic">MAP CRACKS - LOCATIONS, LENGTH, WIDTH, DEPTH, & DIRECTION.</p></label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="5" disabled="enabled"></textarea>
								</div>
							</div>
							<div className="row justify-content-md-center">
								<div className="col-md">
										<InputLabel>Staus</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											defaultValue={'Not started'}
											value={profile.assessmentStatus} //change this to value of status
											label="Age"
											onChange={ e => {
												console.log(e.target.value);
												profile.assessmentStatus = e.target.value;
												console.log(profile);
											}}
											>
										<MenuItem value={'Not started'}>Not started</MenuItem>
										{/* set values to respective status */}
										<MenuItem value={'Working'}>Working</MenuItem>
										<MenuItem value={'Completed'}>Completed</MenuItem>
										</Select>
								</div>
							</div>

							<div className="row justify-content-md-center">
							<div className="col-auto"><button href={detailsUrl} className="btn btn-outline-secondary">Back</button></div>
								<div className="col-auto"><a href="/Search" className="btn btn-outline-secondary">New Search</a></div>
								<Button className='col-auto' variant='outlined' type='submit'>Submit</Button>
							</div>
							<div>
						</div>
					</div>
				</div>
			</form>
		</Layout>
	)
}