using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class ObservationsAndNotesViewModel : AssessmentDetailsUpdater
    {
        public ICommand observationAndNotesUnfocused { get; }
        public ObservationsAndNotesViewModel()
        {
            observationAndNotesUnfocused = new Command<FocusEventArgs>(SetObservationAndNotes);
        }
        

        private void SetObservationAndNotes(FocusEventArgs args)
        {
            SetAssessmentDetailsStringAndUpdateJsonFile(nameof(assessmentDetails.ObservationAndNotes), ((Editor)(args.VisualElement)));
        }
    }
}
