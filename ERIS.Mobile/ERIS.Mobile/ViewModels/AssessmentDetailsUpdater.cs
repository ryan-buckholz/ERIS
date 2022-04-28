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
        protected void SetAssessmentDetailsStringAndUpdateJsonFile(string stringPropertyName, Editor editor)
        {
            string inputDecimalString = editor.Text;
            PropertyInfo propertyInfo = assessmentDetails.GetType().GetProperty(stringPropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                propertyInfo.SetValue(assessmentDetails, inputDecimalString, null);
                UpdateAssessmentDetailsJsonFile();
            }
        }
        protected void SetAssessmentDetailsDecimalAndUpdateJsonFile(string decimalPropertyName, Entry entry)
        {
            string inputDecimalString = entry.Text;
            PropertyInfo propertyInfo = assessmentDetails.GetType().GetProperty(decimalPropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                decimal inputDecimal = 0;
                try
                {
                    inputDecimal = Convert.ToDecimal(inputDecimalString);
                }
                catch
                {
                    if(entry.Text != "")
                    {
                        entry.Text = "";
                        Application.Current.MainPage.DisplayAlert("Error", "An error as occured with the number entry. Please enter the number again with the proper format.", "Ok");
                    }
                }
                propertyInfo.SetValue(assessmentDetails, inputDecimal, null);
                UpdateAssessmentDetailsJsonFile();
            }
        }
        protected void SetAssessmentDetailsIntAndUpdateJsonFile(string intPropertyName, Entry entry)
        {
            string inputIntString = entry.Text;
            PropertyInfo propertyInfo = assessmentDetails.GetType().GetProperty(intPropertyName, BindingFlags.Public | BindingFlags.Instance);
            if (null != propertyInfo && propertyInfo.CanWrite)
            {
                int inputInt = 0;
                try
                {
                    inputInt = Convert.ToInt32(inputIntString);
                }
                catch
                {
                    if (entry.Text != "")
                    {
                        entry.Text = "";
                        Application.Current.MainPage.DisplayAlert("Error", "An error as occured with the number entry. Please enter the number again with the proper format.", "Ok");
                    }
                }
                propertyInfo.SetValue(assessmentDetails, inputInt, null);
                UpdateAssessmentDetailsJsonFile();
            }
        }
        private void UpdateAssessmentDetailsJsonFile()
        {
            assessmentDetailsSerializer.SerializeModelToJsonFile(assessmentDetails);
            assessmentDetailsChangeTracker.NotifyObservers();
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
