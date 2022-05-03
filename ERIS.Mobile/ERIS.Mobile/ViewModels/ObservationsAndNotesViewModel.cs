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

        public ObservationsAndNotesViewModel()
        {
            observationsAndNotesUnfocused = new Command<FocusEventArgs>(SetObservationsAndNotes);
            
            send = new SendData();
            
            checkSubmitButton = new Command(SubmitPressed);
        }
        
        private void SetObservationsAndNotes(FocusEventArgs args)
        {
            SetAssessmentDetailsStringAndUpdateJsonFile(nameof(assessmentDetails.ObservationsAndNotes), ((Editor)(args.VisualElement)));
        }

        private void SubmitPressed()
        {
            send.PostAssessmentProfile();
            send.PostAssessmentDetails();
        }

        public string ObservationsAndNotes
        {
            get { return Convert.ToString(assessmentDetails.ObservationsAndNotes); }
        }
    }
}
