using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class HighwayStatusViewModel : AssessmentDetailsUpdater
    {
        public bool IsHighwayOpen
        {
            get { return assessmentDetails.IsHighwayOpen; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsHighwayOpen), value); }
        }
        public bool IsShoulderClosed
        {
            get { return assessmentDetails.IsShoulderClosed; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsShoulderClosed), value); }
        }
        public bool IsLaneClosed
        {
            get { return assessmentDetails.IsLaneClosed; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsLaneClosed), value); }
        }
        public bool IsOneWayClosed
        {
            get { return assessmentDetails.IsOneWayClosed; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsOneWayClosed), value); }
        }
        public bool IsTwoWayClosed
        {
            get { return assessmentDetails.IsTwoWayClosed; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsTwoWayClosed), value); }
        }

        public ICommand closedLanesUnfocused { get; }

        public HighwayStatusViewModel()
        {
            closedLanesUnfocused = new Command<FocusEventArgs>(SetClosedLanes);
        }
        private void SetClosedLanes(FocusEventArgs args)
        {
            SetAssessmentDetailsIntAndUpdateJsonFile(nameof(assessmentDetails.CrackLength), ((Entry)(args.VisualElement)));
        }
    }
}
