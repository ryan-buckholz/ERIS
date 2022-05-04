using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ERIS.MobileWebAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AssessmentDetails",
                columns: table => new
                {
                    AssessmentDetailsID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssessmentID = table.Column<int>(type: "int", nullable: false),
                    IsFall = table.Column<bool>(type: "bit", nullable: false),
                    IsTopple = table.Column<bool>(type: "bit", nullable: false),
                    IsSlide = table.Column<bool>(type: "bit", nullable: false),
                    IsSpread = table.Column<bool>(type: "bit", nullable: false),
                    IsFlow = table.Column<bool>(type: "bit", nullable: false),
                    IsCompound = table.Column<bool>(type: "bit", nullable: false),
                    IsErosion = table.Column<bool>(type: "bit", nullable: false),
                    IsSurfacialSloughing = table.Column<bool>(type: "bit", nullable: false),
                    IsScouredToe = table.Column<bool>(type: "bit", nullable: false),
                    IsWashout = table.Column<bool>(type: "bit", nullable: false),
                    IsAdvancing = table.Column<bool>(type: "bit", nullable: false),
                    IsRetrogressing = table.Column<bool>(type: "bit", nullable: false),
                    IsEnlarging = table.Column<bool>(type: "bit", nullable: false),
                    IsWidening = table.Column<bool>(type: "bit", nullable: false),
                    IsMoving = table.Column<bool>(type: "bit", nullable: false),
                    IsConfined = table.Column<bool>(type: "bit", nullable: false),
                    IsPavementGroundCracks = table.Column<bool>(type: "bit", nullable: false),
                    CrackLength = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CrackHorizontalDisplacement = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CrackVerticalDisplacement = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CrackDepth = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CrackSettlement = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    CrackBulge = table.Column<int>(type: "int", nullable: false),
                    IsIndentedByRocks = table.Column<bool>(type: "bit", nullable: false),
                    IsRock = table.Column<bool>(type: "bit", nullable: false),
                    HasBedding = table.Column<bool>(type: "bit", nullable: false),
                    HasJoints = table.Column<bool>(type: "bit", nullable: false),
                    HasFractures = table.Column<bool>(type: "bit", nullable: false),
                    IsSoil = table.Column<bool>(type: "bit", nullable: false),
                    ClayEstimate = table.Column<decimal>(type: "decimal(5,3)", nullable: false),
                    SiltEstimate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SandEstimate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    GravelEstimate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TreesCoverageOnSlope = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    BushesShrubsCoverageOnSlope = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    GroundCoverCoverageOnSlope = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SlopeHeight = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    OriginalSlope = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LandslideWidth = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LandslideLength = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    MainScarpHeight = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LandslideSlope = table.Column<decimal>(type: "decimal(7,2)", nullable: false),
                    RoadwayEncroachedLength = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    RoadwayEncroachedWidth = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    IsDry = table.Column<bool>(type: "bit", nullable: false),
                    IsMoist = table.Column<bool>(type: "bit", nullable: false),
                    IsWet = table.Column<bool>(type: "bit", nullable: false),
                    IsFlowingWater = table.Column<bool>(type: "bit", nullable: false),
                    IsSeep = table.Column<bool>(type: "bit", nullable: false),
                    IsSpring = table.Column<bool>(type: "bit", nullable: false),
                    IsHighwayOpen = table.Column<bool>(type: "bit", nullable: false),
                    IsShoulderClosed = table.Column<bool>(type: "bit", nullable: false),
                    IsLaneClosed = table.Column<bool>(type: "bit", nullable: false),
                    ClosedLanes = table.Column<int>(type: "int", nullable: false),
                    IsOneWayClosed = table.Column<bool>(type: "bit", nullable: false),
                    IsTwoWayClosed = table.Column<bool>(type: "bit", nullable: false),
                    HasCloggedInlet = table.Column<bool>(type: "bit", nullable: false),
                    HasCompromisedDrains = table.Column<bool>(type: "bit", nullable: false),
                    HasSurfaceRunoff = table.Column<bool>(type: "bit", nullable: false),
                    HasTorrentSurgeFlood = table.Column<bool>(type: "bit", nullable: false),
                    HasImpactedAdjacentUtilities = table.Column<bool>(type: "bit", nullable: false),
                    HasImpactedAdjacentProperties = table.Column<bool>(type: "bit", nullable: false),
                    HasImpactedAdjacentStructures = table.Column<bool>(type: "bit", nullable: false),
                    HasMaybeImpactedAdjacentUtilities = table.Column<bool>(type: "bit", nullable: false),
                    HasMaybeImpactedAdjacentProperties = table.Column<bool>(type: "bit", nullable: false),
                    HasMaybeImpactedAdjacentStructures = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionOpenHighwayTraffic = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionOpenHighwayShoulder = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionCloseHighwayOneDirection = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionCloseHighWayBothDirections = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionRemoveLandslideDebris = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionPlaceKRailOrFence = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionCoverSlopeWithPlastic = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionDivertSurfaceWaterRunoff = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionRemoveCulvertBlockage = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionDewaterWithPumpTrench = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionDewaterWithHorizontalDrains = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionConstructTemporaryShoring = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionButtressToeOfLandslide = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionPlaceRockSlopeProtection = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionRoutineVisualMonitor = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionReconstructSlopeToOriginalCondition = table.Column<bool>(type: "bit", nullable: false),
                    IsImmediateActionReconstructSlopeWithGeosynthetics = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionOpenHighwayTraffic = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionOpenHighwayShoulder = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionDewaterWithHorizontalDrains = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionConstructTemporaryShoring = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionButtressToeOfLandslide = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionPlaceRockSlopeProtection = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionRoutineVisualMonitor = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionReconstructSlopeToOriginalCondition = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionReconstructSlopeWithGeosynthetics = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionRepairCulvertDrainagePipe = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionInstallErosionControl = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionSurveySite = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionGeologicalMapping = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionSubsurfaceExploration = table.Column<bool>(type: "bit", nullable: false),
                    IsFollowUpActionDesignAndPlans = table.Column<bool>(type: "bit", nullable: false),
                    OpenedLanesCount = table.Column<int>(type: "int", nullable: false),
                    ObservationsAndNotes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssessmentDetails", x => x.AssessmentDetailsID);
                });

            migrationBuilder.CreateTable(
                name: "AssessmentProfile",
                columns: table => new
                {
                    AssessmentID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    District = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    County = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Route = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PostMile = table.Column<int>(type: "int", nullable: false),
                    EA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProjectID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateIncidentReported = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Latitude = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Longitude = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DistrictContactLastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DistrictContactFirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DistrictContactSNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DistrictContactPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DistrictContactCellPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssessmentStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsUploaded = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AssessmentProfile", x => x.AssessmentID);
                });

            migrationBuilder.CreateTable(
                name: "Photo",
                columns: table => new
                {
                    PhotoID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssessmentID = table.Column<int>(type: "int", nullable: false),
                    FilePath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AssociatedMeasurement = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photo", x => x.PhotoID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AssessmentDetails");

            migrationBuilder.DropTable(
                name: "AssessmentProfile");

            migrationBuilder.DropTable(
                name: "Photo");
        }
    }
}
