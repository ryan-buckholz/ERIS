using ERIS.Mobile.Models;
using ERIS.Mobile.Services;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public abstract class AssessmentProfileUpdater : BindableObject, IObserver<AssessmentProfile>
    {
        private AssessmentProfileSerializer assessmentProfileSerializer;
        protected AssessmentProfile assessmentProfile;
        private AssessmentProfileChangeTracker assessmentProfileChangeTracker;
        private IDisposable unsubscriber;
        public AssessmentProfileUpdater()
        {
            assessmentProfileSerializer = DependencyService.Get<AssessmentProfileSerializer>();
            assessmentProfileChangeTracker = DependencyService.Get<AssessmentProfileChangeTracker>();
            assessmentProfile = assessmentProfileSerializer.DeserializeJsonFileToModel();
            Subscribe(assessmentProfileChangeTracker);
        }

        protected void SetAssessmentProfileStringAndUpdateJsonFile(string stringPropertyName, Entry entry)
        {
            string inputString = entry.Text;
            PropertyInfo propertyInfo = assessmentProfile.GetType().GetProperty(stringPropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                propertyInfo.SetValue(assessmentProfile, inputString, null);
                UpdateAssessmentProfileJsonFile();
            }
        }
        protected void SetAssessmentProfileStringAndUpdateJsonFile(string stringPropertyName, string inputString)
        {
            PropertyInfo propertyInfo = assessmentProfile.GetType().GetProperty(stringPropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                propertyInfo.SetValue(assessmentProfile, inputString, null);
                UpdateAssessmentProfileJsonFile();
            }
        }
        protected void SetAssessmentProfileIntAndUpdateJsonFile(string intPropertyName, Entry entry)
        {
            string inputIntString = entry.Text;
            PropertyInfo propertyInfo = assessmentProfile.GetType().GetProperty(intPropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                int inputInt = 0;
                try
                {
                    inputInt = Convert.ToInt32(inputIntString);
                }
                catch
                {
                    if(entry.Text != "")
                    {
                        Application.Current.MainPage.DisplayAlert("Error", "An error as occured with the number entry. Please enter the number again with the proper format.", "Ok");
                        entry.Text = "";
                    }
                }
                propertyInfo.SetValue(assessmentProfile, inputInt, null);
                UpdateAssessmentProfileJsonFile();
            }
        }
        protected void SetAssessmentProfileDateTimeAndUpdateJsonFile(string dateTimePropertyName, DateTime dateTime)
        {
            PropertyInfo propertyInfo = assessmentProfile.GetType().GetProperty(dateTimePropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                    propertyInfo.SetValue(assessmentProfile, dateTime, null);
                    UpdateAssessmentProfileJsonFile();
            }
        }

        private void UpdateAssessmentProfileJsonFile()
        {
            assessmentProfileSerializer.SerializeModelToJsonFile(assessmentProfile);
            assessmentProfileChangeTracker.NotifyObservers();
        }

        public void OnCompleted()
        {
        }

        public void OnError(Exception error)
        {
        }

        public void OnNext(AssessmentProfile value)
        {
            assessmentProfile = value;
        }
        public void Subscribe(IObservable<AssessmentProfile> provider)
        {
            unsubscriber = provider.Subscribe(this);
        }
        private void Unsubscribe()
        {
            unsubscriber.Dispose();
        }
    }
}
