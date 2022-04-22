using Microsoft.EntityFrameworkCore.Migrations;

namespace ERIS.MobileWebAPI.Migrations
{
    public partial class observationAndNotes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Photos",
                table: "Photos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AssessmentProfiles",
                table: "AssessmentProfiles");

            migrationBuilder.DropColumn(
                name: "BrushesShrubsCoverageOnSlope",
                table: "AssessmentDetails");

            migrationBuilder.RenameTable(
                name: "Photos",
                newName: "Photo");

            migrationBuilder.RenameTable(
                name: "AssessmentProfiles",
                newName: "AssessmentProfile");

            migrationBuilder.RenameColumn(
                name: "IsImmediateActionReconstructSlopeWIthGeosynthetics",
                table: "AssessmentDetails",
                newName: "IsImmediateActionReconstructSlopeWithGeosynthetics");

            migrationBuilder.RenameColumn(
                name: "IsFollowUpActionReconstructSlopeWIthGeosynthetics",
                table: "AssessmentDetails",
                newName: "IsFollowUpActionReconstructSlopeWithGeosynthetics");

            migrationBuilder.RenameColumn(
                name: "SoilEstimate",
                table: "AssessmentDetails",
                newName: "BushesShrubsCoverageOnSlope");

            migrationBuilder.AlterColumn<decimal>(
                name: "LandslideSlope",
                table: "AssessmentDetails",
                type: "decimal(7,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<int>(
                name: "CrackBulge",
                table: "AssessmentDetails",
                type: "int",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "ClayEstimate",
                table: "AssessmentDetails",
                type: "decimal(5,3)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AddColumn<string>(
                name: "ObservationsAndNotes",
                table: "AssessmentDetails",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Photo",
                table: "Photo",
                column: "PhotoID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AssessmentProfile",
                table: "AssessmentProfile",
                column: "AssessmentID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Photo",
                table: "Photo");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AssessmentProfile",
                table: "AssessmentProfile");

            migrationBuilder.DropColumn(
                name: "ObservationsAndNotes",
                table: "AssessmentDetails");

            migrationBuilder.RenameTable(
                name: "Photo",
                newName: "Photos");

            migrationBuilder.RenameTable(
                name: "AssessmentProfile",
                newName: "AssessmentProfiles");

            migrationBuilder.RenameColumn(
                name: "IsImmediateActionReconstructSlopeWithGeosynthetics",
                table: "AssessmentDetails",
                newName: "IsImmediateActionReconstructSlopeWIthGeosynthetics");

            migrationBuilder.RenameColumn(
                name: "IsFollowUpActionReconstructSlopeWithGeosynthetics",
                table: "AssessmentDetails",
                newName: "IsFollowUpActionReconstructSlopeWIthGeosynthetics");

            migrationBuilder.RenameColumn(
                name: "BushesShrubsCoverageOnSlope",
                table: "AssessmentDetails",
                newName: "SoilEstimate");

            migrationBuilder.AlterColumn<decimal>(
                name: "LandslideSlope",
                table: "AssessmentDetails",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(7,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "CrackBulge",
                table: "AssessmentDetails",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<decimal>(
                name: "ClayEstimate",
                table: "AssessmentDetails",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5,3)");

            migrationBuilder.AddColumn<decimal>(
                name: "BrushesShrubsCoverageOnSlope",
                table: "AssessmentDetails",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Photos",
                table: "Photos",
                column: "PhotoID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AssessmentProfiles",
                table: "AssessmentProfiles",
                column: "AssessmentID");
        }
    }
}
