using ERIS.Mobile.Services;
using ERIS.Mobile.Models;
using Xamarin.Forms;
using System.Reflection;
using System.Windows.Input;
using System;

namespace ERIS.Mobile.ViewModels
{
    public abstract class AssessmentDetailsUpdater : BindableObject, IObserver<AssessmentDetails>
    {
        private AssessmentDetailsSerializer assessmentDetailsSerializer;
        protected AssessmentDetails assessmentDetails;
        private AssessmentDetailsChangeTracker assessmentDetailsChangeTracker;
        private IDisposable unsubscriber;
        public AssessmentDetailsUpdater()
        {
            assessmentDetailsSerializer = DependencyService.Get<AssessmentDetailsSerializer>();
            assessmentDetailsChangeTracker = DependencyService.Get<AssessmentDetailsChangeTracker>();
            assessmentDetails = assessmentDetailsSerializer.DeserializeJsonFileToModel();
            Subscribe(assessmentDetailsChangeTracker);
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

        public void OnCompleted()
        {
        }

        public void OnError(Exception error)
        {
        }

        public void OnNext(AssessmentDetails value)
        {
            assessmentDetails = value;
        }
        public void Subscribe(IObservable<AssessmentDetails> provider)
        {
            unsubscriber = provider.Subscribe(this);
        }
        private void Unsubscribe()
        {
            unsubscriber.Dispose();
        }
    }
}
