﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ERISMobileWebAPI.Models
{
    public class AssessmentDetails
    {
        [Key]
        public int AssessmentDetailsID { get; set; }
        public int AssessmentID { get; set; }
        public bool IsFall { get; set; }
        public bool IsTopple { get; set; }
        public bool IsSlide { get; set; }
        public bool IsSpread { get; set; }
        public bool IsFlow { get; set; }
        public bool IsCompound { get; set; }
        public bool IsErosion { get; set; }
        public bool IsSurfacialSloughing { get; set; }
        public bool IsScouredToe { get; set; }
        public bool IsWashout { get; set; }
        public bool IsAdvancing { get; set; }
        public bool IsRetrogressing { get; set; }
        public bool IsEnlarging { get; set; }
        public bool IsWidening { get; set; }
        public bool IsMoving { get; set; }
        public bool IsConfined { get; set; }
        public bool IsPavementGroundCracks { get; set; }
        public decimal CrackLength { get; set; }
        public decimal CrackHorizontalDisplacement { get; set; }
        public decimal CrackVerticalDisplacement { get; set; }
        public decimal CrackDepth { get; set; }
        public decimal CrackSettlement { get; set; }

        public int CrackBulge { get; set; }
        public bool IsIndentedByRocks { get; set; }
        public bool IsRock { get; set; }
        public bool HasBedding { get; set; }
        public bool HasJoints { get; set; }
        public bool HasFractures { get; set; }
        public bool IsSoil { get; set; }

        [Column(TypeName = "decimal(5,3)")]
        public decimal ClayEstimate { get; set; }
        public decimal SiltEstimate { get; set; }
        public decimal SandEstimate { get; set; }
        public decimal GravelEstimate { get; set; }
        public decimal TreesCoverageOnSlope { get; set; }
        public decimal BushesShrubsCoverageOnSlope { get; set; }
        public decimal GroundCoverCoverageOnSlope { get; set; }
        public decimal SlopeHeight { get; set; }
        public decimal OriginalSlope { get; set; }
        public decimal LandslideWidth { get; set; }
        public decimal LandslideLength { get; set; }
        public decimal MainScarpHeight { get; set; }

        [Column(TypeName = "decimal(7,2)")]
        public decimal LandslideSlope { get; set; }
        public decimal RoadwayEncroachedLength { get; set; }
        public decimal RoadwayEncroachedWidth { get; set; }
        public bool IsDry { get; set; }
        public bool IsMoist { get; set; }
        public bool IsWet { get; set; }
        public bool IsFlowingWater { get; set; }
        public bool IsSeep { get; set; }
        public bool IsSpring { get; set; }
        public bool IsHighwayOpen { get; set; }
        public bool IsShoulderClosed { get; set; }
        public bool IsLaneClosed { get; set; }
        public int ClosedLanes { get; set; }
        public bool IsOneWayClosed { get; set; }
        public bool IsTwoWayClosed { get; set; }
        public bool HasCloggedInlet { get; set; }
        public bool HasCompromisedDrains { get; set; }
        public bool HasSurfaceRunoff { get; set; }
        public bool HasTorrentSurgeFlood { get; set; }
        public bool HasImpactedAdjacentUtilities { get; set; }
        public bool HasImpactedAdjacentProperties { get; set; }
        public bool HasImpactedAdjacentStructures { get; set; }
        public bool HasMaybeImpactedAdjacentUtilities { get; set; }
        public bool HasMaybeImpactedAdjacentProperties { get; set; }
        public bool HasMaybeImpactedAdjacentStructures { get; set; }
        public bool IsImmediateActionOpenHighwayTraffic { get; set; }
        public bool IsImmediateActionOpenHighwayShoulder { get; set; }
        public bool IsImmediateActionCloseHighwayOneDirection { get; set; }
        public bool IsImmediateActionCloseHighWayBothDirections { get; set; }
        public bool IsImmediateActionRemoveLandslideDebris { get; set; }
        public bool IsImmediateActionPlaceKRailOrFence { get; set; }
        public bool IsImmediateActionCoverSlopeWithPlastic { get; set; }
        public bool IsImmediateActionDivertSurfaceWaterRunoff { get; set; }
        public bool IsImmediateActionRemoveCulvertBlockage { get; set; }
        public bool IsImmediateActionDewaterWithPumpTrench { get; set; }
        public bool IsImmediateActionDewaterWithHorizontalDrains { get; set; }
        public bool IsImmediateActionConstructTemporaryShoring { get; set; }
        public bool IsImmediateActionButtressToeOfLandslide { get; set; }
        public bool IsImmediateActionPlaceRockSlopeProtection { get; set; }
        public bool IsImmediateActionRoutineVisualMonitor { get; set; }
        public bool IsImmediateActionReconstructSlopeToOriginalCondition { get; set; }
        public bool IsImmediateActionReconstructSlopeWithGeosynthetics { get; set; }
        public bool IsFollowUpActionOpenHighwayTraffic { get; set; }
        public bool IsFollowUpActionOpenHighwayShoulder { get; set; }
        public bool IsFollowUpActionDewaterWithHorizontalDrains { get; set; }
        public bool IsFollowUpActionConstructTemporaryShoring { get; set; }
        public bool IsFollowUpActionButtressToeOfLandslide { get; set; }
        public bool IsFollowUpActionPlaceRockSlopeProtection { get; set; }
        public bool IsFollowUpActionRoutineVisualMonitor { get; set; }
        public bool IsFollowUpActionReconstructSlopeToOriginalCondition { get; set; }
        public bool IsFollowUpActionReconstructSlopeWithGeosynthetics { get; set; }
        public bool IsFollowUpActionRepairCulvertDrainagePipe { get; set; }
        public bool IsFollowUpActionInstallErosionControl { get; set; }
        public bool IsFollowUpActionSurveySite { get; set; }
        public bool IsFollowUpActionGeologicalMapping { get; set; }
        public bool IsFollowUpActionSubsurfaceExploration { get; set; }
        public bool IsFollowUpActionDesignAndPlans { get; set; }
        public int OpenedLanesCount { get; set; }
    }
}
