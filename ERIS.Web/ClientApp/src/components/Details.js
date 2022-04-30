import React, { useState, useEffect } from 'react';
import { Layout } from './Layout';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { createAPIEndpoint, ENDPOINTS } from '../api';


export function Details() {
		let { id } = useParams();
		const [ profile, setProfile ] = useState([]);
		const [ details, setDetails ] = useState([]);
		
		const navigate = useNavigate();
		useEffect(() => {
			createAPIEndpoint(ENDPOINTS.ASSESSMENTDETAILS).fetchById(1)
			.then(res => {
				console.log(res.data);
				setDetails(res.data);
			})
				.catch(err => console.log(err))

			createAPIEndpoint(ENDPOINTS.ASSESSMENTPROFILE).fetchById(1)
				.then(res => {
					console.log(res.data);
					setProfile(res.data);
			})
				.catch(err => console.log(err))
		}, [])

		
		return (
			<Layout>
				<form >
					{console.log('asdfasdfasdf')}
					<div className="card mt-3">
						<div className="card-body">
							<div>
								<div className="row">
									<div className="col-md">GEOTECHNICAL INITIAL SITE ASSESSMENT</div>
									<div className="col-md-3 d-flex justify-content-end">GISA-001 (NEW 1/2022)</div>
								</div>
								<hr></hr>

								<div className="row">
									<div className="col-md"><input type="text" className="form-control" value={profile.date}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.district}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.county}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.route}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.postMile}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.ea}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.projectID}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.dateIncidentReported}/></div>
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
									<div className="col-2"><input type="text" className="form-control" value={profile.latitude}/></div>
									<div className="col-2"><input type="text" className="form-control" value={profile.longitude}/></div>
									<div className="col-2 d-flex justify-content-end"><label>District Contact:</label></div>
									<div className="col-2"><input type="text" className="form-control" value={profile.lastName}/></div>
									<div className="col-2"><input type="text" className="form-control" value={profile.firstName}/></div>
									<div className="col-2"><input type="text" className="form-control" value={profile.sNumber}/></div>
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
									<div className="col-md"><input type="text" className="form-control" value={profile.districtContactLastName}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.districtContactFirstName}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.districtContactSNumber}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.districtContactPhone}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.districtContactCellPhone}/></div>
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
									<div className="col"><input type="checkbox" name="formoptions" value={details.isFall} /> (Rock) Fall</div>
									<div className="col"><input type="checkbox" name="formoptions" value={details.isAdvancing} /> Advancing</div>
									<div className="col"><input type="checkbox" name="formoptions" value={details.isHighwayOpen} /> Open</div>
									<div className="col"><input type="checkbox" name="formoptions" value={details.isPavementGroundChecks} /> Payment/Ground Checks </div>
								</div>

								<div className="row">
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isTopple} /> Topple</div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isRetrogressing} /> Retrogressing</div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isShoulderClosed} /> Shoulder Closed</div>
									<div className="col"> <input type="text" className="form-control form-control-sm" value={details.crackLength} /></div>
									<div className="col"><label>Feet, Length</label></div>
								</div>

								<div className="row">
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isSlide} /> Slide</div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isEnlarging} /> Enlarging</div>
									<div className="col-md"><input type="checkbox" name="formoptions" value={details.isLaneClosed} /> Lane(s) Closed </div>
									<div className="col-md"><input type="text" className="form-control form-control-sm" placeholder="Lanes" value={details.closedLanes}/> </div>
									<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.crackHorizontalDisplacement}/></div>
									<div className="col-md"><label>IN. Horizontal</label></div>
								</div>

								<div className="row">
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isSpread} /> Spread</div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isWidening} /> Widening</div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isOneWayClosed} /> One-way Closed</div>
									<div className="col"><input type="text" className="form-control form-control-sm" value={details.crackVerticalDisplacement}/></div>
									<div className="col"><label>IN. Vertical</label></div>
								</div>


								<div className="row">
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isFlow} /> Flow</div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isMoving} /> Moving</div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isTwoWayClosed} /> Two-way Closed</div>
									<div className="col"><input type="text" className="form-control form-control-sm" value={details.crackDepth}/></div>
									<div className="col"><label>IN. Dep. of Crack</label></div>
								</div>

								<div className="row">
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isCompound} /> Compound</div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isConfined} /> Confined</div>
									<div className="col-3"><label></label></div>
									<div className="col"><label>Settlement</label></div>
									<div className="col"><input type="text" className="form-control form-control-sm" value={details.crackSettlement}/></div>
									<div className="col"><label>Inches</label></div>
								</div>

								<div className="row">
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isErosion} /> Erosion</div>
									<div className="col-3"><label></label></div>
									<div className="col-3"><label></label></div>
									<div className="col"><label>Bulge</label></div>
									<div className="col"><input type="text" className="form-control form-control-sm" value={details.crackBulge}/></div>
									<div className="col"><label>Inches</label></div>

								</div>

								<div className="row">
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isSurfacialSloughing} /> Surfacial Sloughing</div>
									<div className="col-3"><label></label></div>
									<div className="col-3"><label></label></div>
									<div className="col"><input type="checkbox" name="formoptions" value={details.isIndentedByRocks} /> Indented by Rocks</div>
								</div>

								<div className="row">
									<div className="col"><input type="checkbox" name="formoptions" value={details.isScouredToe} /> Scoured </div>
								</div>

								<div className="row">
									<div className="col"><input type="checkbox" name="formoptions" value={details.isWashout} /> Washout</div>
								</div>
								<hr></hr>

								<div className="row">
									<div className="col-2"><p className="text-decoration-underline">Material:</p></div>
									<div className="col-2"><label></label></div>
									<div className="col-3"><p className="text-decoration-underline">Water Content:</p></div>
									<div className="col"><p className="text-decoration-underline">Recommended Actions:</p></div>
								</div>

								<div className="row">
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isRock} /> Rock</div>
									<div className="col-3 d-flex justify-content-center"><label>EST. %</label></div>
									<div className="col-2"><input type="checkbox" name="formoptions" value={details.isDry} /> Dry</div>
									<div className="col-2 d-flex justify-content-end"><label>Immediate Actions:</label></div>
									<div className="col-2"><label>Follow Up Actions:</label></div>
								</div>

								<div className="row">
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.hasBedding} /> Bedding</div>
									<div className="col-md d-flex justify-content-end"><label>Clay</label></div>
									<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.clayEstimate} /></div>
									<div className="col-1"><label></label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isMoist} /> Moist</div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionOpenHighwayTraffic} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionOpenHighwayTraffic} /></div>
									<div className="col-2"><label>Open Highway Traffic</label></div>
									<div className="col-md "><input type="text" className="form-control form-control-sm" placeholder="Lanes" value={details.openedLanesCount} /></div>
								</div>

								<div className="row">
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.hasJoints} /> Joints</div>
									<div className="col-md d-flex justify-content-end"><label>Silt</label></div>
									<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.siltEstimate} /></div>
									<div className="col-1"><label></label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isWet} /> Wet</div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionOpenHighwayShoulder} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionOpenHighwayShoulder} /></div>
									<div className="col-3"><label>Open Highway Shoulder</label></div>
								</div>

								<div className="row">
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.hasFractures} /> Fracture</div>
									<div className="col-md d-flex justify-content-end"><label>Sand</label></div>
									<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.sandEstimate}/></div>
									<div className="col-1"><label></label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isFlowingWater} /> Flowing</div>
									<div className="col-2"><input type="checkbox" name="formoptions" value="three" /></div>
									<div className="col-3">Close Highway <input type="checkbox" name="formoptions" value={details.isImmediateActionCloseHighwayOneDirection} /> One <input type="checkbox" name="formoptions" value={details.isImmediateActionCloseHighWayBothDirections} /> Both Directions</div>
								</div>

								<div className="row">
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isSoil} /> Soil</div>
									<div className="col-md d-flex justify-content-end"><label>Gravel</label></div>
									<div className="col-md"><input type="text" className="form-control form-control-sm" value={details.gravelEstimate}/></div>
									<div className="col-1"><label></label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isSeep} /> Seep</div>
									<div className="col-2"><input type="checkbox" name="formoptions" value={details.isImmediateActionRemoveLandslideDebris} /></div>
									<div className="col-3"><label> Remove Landslide Debris From Highway</label></div>
								</div>

								<div className="row">
									<div className="col-1"><label></label></div>
									<div className="col-1"><label></label></div>
									<div className="col-2"><label></label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isSpring} /> Spring</div>
									<div className="col-2"><input type="checkbox" name="formoptions" value={details.isImmediateActionPlaceKRailOrFence} /></div>
									<div className="col"><label> Place K-Rail or Fence</label></div>
								</div>

								<div className="row">
									<div className="col-4"><label></label></div>
									<div className="col-3"><label></label></div>
									<div className="col-2"><input type="checkbox" name="formoptions" value={details.isImmediateActionCoverSlopeWithPlastic} /></div>
									<div className="col"><label> Cover Slope with Plastic</label></div>
								</div>

								<div className="row">
									<div className="col-4"><p className="text-decoration-underline">Vegetation on Slope:</p></div>
									<div className="col-3"><p className="text-decoration-underline">Water/Drainage:</p></div>
									<div className="col-2"><input type="checkbox" name="formoptions" value={details.isImmediateActionDivertSurfaceWaterRunoff} /></div>
									<div className="col"><label> Divert Surface Water Runoff</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label></label></div>
									<div className="col-2"><label>Coverage %</label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isCloggedInlet} /> Clogged Inlet</div>
									<div className="col-2"><input type="checkbox" name="formoptions" value={details.isImmediateActionRemoveCulvertBlockage} /></div>
									<div className="col"><label> Remove Culvert Blockage</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Trees</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.treesCoverageOnSlope}/></div>
									<div className="col-1"><label></label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.isCompromisedDrains} /> Compromised Drains</div>
									<div className="col-2"><input type="checkbox" name="formoptions" value={details.isImmediateActionDewaterWithPumpTrench} /></div>
									<div className="col"><label> Dewater with Pump, Trench, etc.</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Bushes/Shrubs</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.bushesShrubsCoverageOnSlope}/></div>
									<div className="col-1"><label></label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.hasSurfaceRunoff} /> Surface Runoff</div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionDewaterWithHorizontalDrains} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionDewaterWithHorizontalDrains} /></div>
									<div className="col"><label>Dewater with Horizontal Drains</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Groundcover</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.groundCoverCoverageOnSlope}/></div>
									<div className="col-1"><label></label></div>
									<div className="col-3"><input type="checkbox" name="formoptions" value={details.hasTorrentSurgeFlood} /> Torrent, Surge, Flood</div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionConstructTemporaryShoring} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionConstructTemporaryShoring} /></div>
									<div className="col"><label>Construct Temporary Shoring</label></div>
								</div>

								<div className="row">
									<div className="col-1"><label></label></div>
									<div className="col-1"><label></label></div>
									<div className="col-2"><label></label></div>
									<div className="col-1"><label>Impacted:</label></div>
									<div className="col-2"><label>May be Impacted:</label></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionButtressToeOfLandslide} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionButtressToeOfLandslide} /></div>
									<div className="col"><label>Buttress Taoe of Landslide</label></div>
								</div>

								<div className="row">
									<div className="col-3"><p className="text-decoration-underline">Measurements:</p></div>
									<div className="col-1"><label></label></div>
									<div className="col-1 d-flex justify-content-center align-items-center"><input type="checkbox" name="formoptions" value={details.hasImpactedAdjacentUtilities} /></div>
									<div className="col-2 d-flex justify-content-around align-items-center"><input type="checkbox" name="formoptions" value={details.hasMaybeImpactedAdjacentUtilities}/> Adj. Utilities</div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionPlaceRockSlopeProtection} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionPlaceRockSlopeProtection} /></div>
									<div className="col"><label>Place Rock Slope Protection</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Slope Height, ft</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.slopeHeight}/></div>
									<div className="col-1"><label></label></div>
									<div className="col-1 d-flex justify-content-center"><input type="checkbox" name="formoptions" value={details.hasImpactedAdjacentProperties} /></div>
									<div className="col-2 d-flex justify-content-evenly"><input type="checkbox" name="formoptions" value={details.hasMaybeImpactedAdjacentProperties} /> Adj. Properties</div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionRoutineVisualMonitor} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionRoutineVisualMonitor} /></div>
									<div className="col"><label>Routine Visual Monitor</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Original Slope, deg</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.originalSlope}/></div>
									<div className="col-1"><label></label></div>
									<div className="col-1 d-flex justify-content-center"><input type="checkbox" name="formoptions" value={details.hasImpactedAdjacentStructures} /></div>
									<div className="col-2 d-flex justify-content-evenly"><input type="checkbox" name="formoptions" value={details.hasMaybeImpactedAdjacentStructures} /> Adj. Structures</div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionReconstructSlopeToOriginalCondition} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionReconstructSlopeToOriginalCondition} /></div>
									<div className="col"><label>Reconstruct Slope to Original Condition</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Landslide Width, ft</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.landslideWidth}/></div>
									<div className="col-4"><label></label></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isImmediateActionReconstructSlopeWithGeosynthetics} /></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionReconstructSlopeWithGeosynthetics} /></div>
									<div className="col"><label>Reconstruct Slope with Geosynthetics</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Landslide Length, ft</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.landslideLength}/></div>
									<div className="col-5"><label></label></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionRepairCulvertDrainagePipe}/></div>
									<div className="col"><label>Repair Culvert/Drainage Pipe</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Main Scarp Height, ft</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.mainScarpHeight} /> </div>
									<div className="col-5"><label></label></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionInstallErosionControl} /></div>
									<div className="col"><label>Install Erosion Ctrl - By Dist. Landscape</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Landslide Slope, deg</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.landslideSlope} /></div>
									<div className="col-5"><label></label></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionSurveySite} /></div>
									<div className="col"><label>Survey the Site - By Dist Landscape</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Length of Roadway, ft</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.roadwayEncroachedLength} /></div>
									<div className="col-5"><label></label></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionGeologicalMapping} /></div>
									<div className="col"><label>Perform Geological Mapping</label></div>
								</div>

								<div className="row">
									<div className="col-2"><label>Width of Roadway, ft</label></div>
									<div className="col-1"><input type="text" className="form-control form-control-sm" value={details.roadwayEncroachedWidth} /></div>
									<div className="col-5"><label></label></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionSubsurfaceExploration}/></div>
									<div className="col"><label>Perform Subsurface Exploration</label></div>
								</div>

								<div className="row">
									<div className="col-8"><label></label></div>
									<div className="col-1"><input type="checkbox" name="formoptions" value={details.isFollowUpActionDesignAndPlans} /></div>
									<div className="col"><label>Perform Detailed Design & Produce Plans</label></div>

								</div>
								<hr></hr>

								<div className="row">
									<div className="col-md"><input type="text" className="form-control" value={profile.date}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.district}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.county}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.route}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.postMile}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.latitude}/></div>
									<div className="col-md"><input type="text" className="form-control" value={profile.longitude}/></div>
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
			</Layout>
		)
}