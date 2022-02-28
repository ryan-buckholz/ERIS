using System;
using System.Collections.Generic;
using System.Text;

namespace ERIS.Web
{
    internal class AssessmentProfile
    {
        public int AssessmentID { get; set; }
        public DateTime Date { get; set; }
        public string District { get; set; }
        public string County { get; set; }
        public string Route { get; set; }
        public int PostMile { get; set; }
        public string EA { get; set; }
        public string ProjectID { get; set; }
        public DateTime DateIncidentReported { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string SNumber { get; set; }
        public string DistrictContactLastName { get; set; }
        public string DistrictContactFirstName { get; set; }
        public string DistrictContactSNumber { get; set; }
        public string DistrictContactPhone { get; set; }
        public string DistrictContactCellPhone { get; set; }
        public string AssessmentStatus { get; set; }
        public string Notes { get; set; }
        public bool IsUploaded { get; set; }
    }
}
