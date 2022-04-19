using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class RecommendedFollowupActionsP1ViewModel : AssessmentDetailsUpdater
    {
        public ICommand openedLanesCountUnfocused { get; }
        private void SetOpenedLanesCount(FocusEventArgs args)
        {
            SetAssessmentDetailsIntAndUpdateJsonFile(nameof(assessmentDetails.OpenedLanesCount), ((Entry)(args.VisualElement)));
        }

        public RecommendedFollowupActionsP1ViewModel()
        {
            openedLanesCountUnfocused = new Command<FocusEventArgs>(SetOpenedLanesCount);
        }

        public bool IsFollowUpActionOpenHighwayTraffic
        {
            get { return assessmentDetails.IsFollowUpActionOpenHighwayTraffic; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionOpenHighwayTraffic), value); }
        }
        public bool IsFollowUpActionOpenHighwayShoulder
        {
            get { return assessmentDetails.IsFollowUpActionOpenHighwayShoulder; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionOpenHighwayShoulder), value); }
        }
        public bool IsFollowUpActionDewaterWithHorizontalDrains
        {
            get { return assessmentDetails.IsFollowUpActionDewaterWithHorizontalDrains; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionDewaterWithHorizontalDrains), value); }
        }
        public bool IsFollowUpActionConstructTemporaryShoring
        {
            get { return assessmentDetails.IsFollowUpActionConstructTemporaryShoring; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionConstructTemporaryShoring), value); }
        }
        public bool IsFollowUpActionButtressToeOfLandslide
        {
            get { return assessmentDetails.IsFollowUpActionButtressToeOfLandslide; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionButtressToeOfLandslide), value); }
        }
        public bool IsFollowUpActionPlaceRockSlopeProtection
        {
            get { return assessmentDetails.IsFollowUpActionPlaceRockSlopeProtection; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionPlaceRockSlopeProtection), value); }
        }
        public bool IsFollowUpActionRoutineVisualMonitor
        {
            get { return assessmentDetails.IsFollowUpActionRoutineVisualMonitor; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionRoutineVisualMonitor), value); }
        }
        public bool IsFollowUpActionReconstructSlopeToOriginalCondition
        {
            get { return assessmentDetails.IsFollowUpActionReconstructSlopeToOriginalCondition; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionReconstructSlopeToOriginalCondition), value); }
        }
    }
}
