using ERIS.Mobile.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class ObservationsAndNotesViewModel : AssessmentDetailsUpdater
    {
        private SendData send;
        public ICommand checkSubmitButton { get; }
        public ICommand observationsAndNotesUnfocused { get; }
        
        private AssessmentProfileSerializer assessmentProfileSerializer;
        private AssessmentDetailsSerializer assessmentDetailsSerializer;

        public ObservationsAndNotesViewModel()
        {
            observationsAndNotesUnfocused = new Command<FocusEventArgs>(SetObservationsAndNotes);
            
            send = new SendData();
            
            checkSubmitButton = new Command(SubmitPressed);
            assessmentProfileSerializer = DependencyService.Get<AssessmentProfileSerializer>();
            assessmentDetailsSerializer = DependencyService.Get<AssessmentDetailsSerializer>();
        }
        
        private void SetObservationsAndNotes(FocusEventArgs args)
        {
            SetAssessmentDetailsStringAndUpdateJsonFile(nameof(assessmentDetails.ObservationsAndNotes), ((Editor)(args.VisualElement)));
        }

        private async void SubmitPressed()
        {
            Application.Current.MainPage.DisplayAlert("Attempting Upload", "Attempting to upload the assessment data. Another popup will notify you of upload success or failure.", "OK");
            try
            {
                await send.UploadAssessmentData();
                Application.Current.MainPage.DisplayAlert("Upload Successful", "The assessment data has been submitted.", "OK");
                Application.Current.MainPage = new AppShell();
                assessmentProfileSerializer.RemoveAssessmentProfileJsonFile();
                assessmentDetailsSerializer.RemoveAssessmentDetailsJsonFile();
            }
            catch
            {
                Application.Current.MainPage.DisplayAlert("ERROR: Upload Failed.", "The upload has failed. Please check your internet connection and the ERIS server's status, then try again.", "OK");
            }
        }

        public string ObservationsAndNotes
        {
            get { return Convert.ToString(assessmentDetails.ObservationsAndNotes); }
        }
    }
}
