using System;
using System.Collections.Generic;
using System.Text;
using Xamarin.Forms;
using Xamarin.Essentials;
using ERIS.Mobile.Services;
using System.IO;
using ERIS.Mobile.Models;
using Newtonsoft.Json;


[assembly: Dependency(typeof(AssessmentDetailsJsonFileManager))]
namespace ERIS.Mobile.Services
{
    public class AssessmentDetailsJsonFileManager
    {
        public string activeLocalPath {get; private set;}
        const string jsonFileNamePrefix = "AssessmentDetails";
        const string fileExtension = ".json";
        public void CreateNulledJsonFileAndSetAsActive()
        {
            Guid guid = Guid.NewGuid();

            string jsonFileName = jsonFileNamePrefix + Guid.NewGuid().ToString() + fileExtension;

            activeLocalPath = Path.Combine(FileSystem.AppDataDirectory, jsonFileName);

            AssessmentDetails assessmentDetails = new AssessmentDetails();
            string nulledAssessmentDetailsJson = JsonConvert.SerializeObject(assessmentDetails);
            File.WriteAllText(activeLocalPath, nulledAssessmentDetailsJson);
        }
    }
}
