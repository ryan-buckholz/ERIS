using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ERISMobileWebAPI.Models
{
    public class Photo
    {
        [Key]
        public int PhotoID { get; set; }
        public int AssessmentID { get; set; }
        public string FilePath { get; set; }
        public string AssociatedMeasurement { get; set; }
    }
}
