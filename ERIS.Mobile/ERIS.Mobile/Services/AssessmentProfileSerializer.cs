using ERIS.Mobile.Models;
using ERIS.Mobile.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Xamarin.Essentials;
using Xamarin.Forms;

[assembly: Dependency(typeof(AssessmentDetailsSerializer))]
namespace ERIS.Mobile.Services
{
    public class AssessmentProfileSerializer
    {
        const string jsonFileName = "AssessmentProfile.json";

        public string activeLocalPath;

        public AssessmentProfileSerializer()
        {
            activeLocalPath = Path.Combine(FileSystem.AppDataDirectory, jsonFileName);
        }

        public void CreateNulledAssessmentProfileJsonFile()
        {
            AssessmentProfile assessmentProfile = new AssessmentProfile();
            string nulledAssessmentProfileJson = JsonConvert.SerializeObject(assessmentProfile);
            File.WriteAllText(activeLocalPath, nulledAssessmentProfileJson);
        }
        public void SerializeModelToJsonFile(AssessmentProfile assessmentProfile)
        {
            string serializedModel = JsonConvert.SerializeObject(assessmentProfile);
            File.WriteAllText(activeLocalPath, serializedModel);
        }
        public AssessmentProfile DeserializeJsonFileToModel()
        {
            string assessmentProfileJson = File.ReadAllText(activeLocalPath);
            AssessmentProfile assessmentProfile = JsonConvert.DeserializeObject<AssessmentProfile>(assessmentProfileJson);

            return assessmentProfile;
        }
        public bool AssessmentProfileDataExists()
        {
            return File.Exists(activeLocalPath);
        }
        public void RemoveAssessmentProfileJsonFile()
        {
            File.Delete(activeLocalPath);
        }
    }
}
