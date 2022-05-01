using System;
using System.Collections.Generic;
using System.Text;

namespace ERIS.Mobile.Models
{
    public class Photo
    {
        public int PhotoID { get; set; }
        public int AssessmentID { get; set; }
        public string FilePath { get; set; }
        public string AssociatedMeasurement { get; set; }
    }
}
