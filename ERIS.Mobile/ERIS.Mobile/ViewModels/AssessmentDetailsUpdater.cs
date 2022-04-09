using ERIS.Mobile.Services;
using ERIS.Mobile.Models;
using Xamarin.Forms;
using System.Reflection;
using System.Windows.Input;
using System;

namespace ERIS.Mobile.ViewModels
{
    public abstract class AssessmentDetailsUpdater : BindableObject
    {
        private AssessmentDetailsSerializer assessmentDetailsSerializer;
        protected AssessmentDetails assessmentDetails;

        public AssessmentDetailsUpdater()
        {
            assessmentDetailsSerializer = DependencyService.Get<AssessmentDetailsSerializer>();
            assessmentDetails = assessmentDetailsSerializer.DeserializeJsonFileToModel();
        }

        protected void SetAssessmentDetailsBoolAndUpdateJsonFile(string boolPropertyName, bool inputBool)
        {
            PropertyInfo propertyInfo = assessmentDetails.GetType().GetProperty(boolPropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                // This if statement stops the app from serialzing the Json file when a bool property's setter is called at every checkbox's initialization.
                if ((bool)propertyInfo.GetValue(assessmentDetails) != inputBool)
                {

                    propertyInfo.SetValue(assessmentDetails, inputBool, null);
                    UpdateAssessmentDetailsJsonFile();
                }
            }
        }
        protected void SetAssessmentDetailsStringAndUpdateJsonFile(string stringPropertyName, string inputString)
        {
            PropertyInfo propertyInfo = assessmentDetails.GetType().GetProperty(stringPropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                propertyInfo.SetValue(assessmentDetails, inputString, null);
                UpdateAssessmentDetailsJsonFile();
            }
        }
        private void UpdateAssessmentDetailsJsonFile()
        {
            assessmentDetailsSerializer.SerializeModelToJsonFile(assessmentDetails);
        }
    }
}
