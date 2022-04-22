using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class ObservationsAndNotesViewModel : AssessmentDetailsUpdater
    {
        public ICommand observationsAndNotesUnfocused { get; }
        public ObservationsAndNotesViewModel()
        {
            observationsAndNotesUnfocused = new Command<FocusEventArgs>(SetObservationsAndNotes);
        }
        

        private void SetObservationsAndNotes(FocusEventArgs args)
        {
            SetAssessmentDetailsStringAndUpdateJsonFile(nameof(assessmentDetails.ObservationsAndNotes), ((Editor)(args.VisualElement)));
        }
    }
}
