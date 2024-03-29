﻿using System;
using System.Collections.Generic;
using System.Text;
using Xamarin.Forms;
using Xamarin.Essentials;
using ERIS.Mobile.Services;
using System.IO;
using ERIS.Mobile.Models;
using Newtonsoft.Json;

[assembly: Dependency(typeof(AssessmentDetailsSerializer))]
namespace ERIS.Mobile.Services
{
    public class AssessmentDetailsSerializer
    {
        const string jsonFileName = "AssessmentDetails.json";

        public string activeLocalPath;

        public AssessmentDetailsSerializer()
        {
            activeLocalPath = Path.Combine(FileSystem.AppDataDirectory, jsonFileName);
        }

        public void CreateNulledAssessmentDetailsJsonFile()
        {
            AssessmentDetails assessmentDetails = new AssessmentDetails();
            string nulledAssessmentDetailsJson = JsonConvert.SerializeObject(assessmentDetails);
            File.WriteAllText(activeLocalPath, nulledAssessmentDetailsJson);
        }
        public void SerializeModelToJsonFile(AssessmentDetails assessmentDetails)
        {
            string serializedModel = JsonConvert.SerializeObject(assessmentDetails);
            File.WriteAllText(activeLocalPath, serializedModel);
        }
        public AssessmentDetails DeserializeJsonFileToModel()
        {
            string assessmentDetailsJson = File.ReadAllText(activeLocalPath);
            AssessmentDetails assessmentDetails = JsonConvert.DeserializeObject<AssessmentDetails>(assessmentDetailsJson);
            
            return assessmentDetails;
        }
        public bool AssessmentDataExists()
        {
            return File.Exists(activeLocalPath);
        }
        public void RemoveAssessmentDetailsJsonFile()
        {
            File.Delete(activeLocalPath);
        }
    }
}
