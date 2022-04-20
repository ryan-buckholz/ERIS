using System;
using System.Collections.Generic;
using System.Text;

namespace ERIS.Mobile.ViewModels
{
    public class RecommendedImmediateActionsP2ViewModel : AssessmentDetailsUpdater
    {
        public bool IsImmediateActionDewaterWithPumpTrench
        {
            get { return assessmentDetails.IsImmediateActionDewaterWithPumpTrench; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionDewaterWithPumpTrench), value); }
        }
        public bool IsImmediateActionDewaterWithHorizontalDrains
        {
            get { return assessmentDetails.IsImmediateActionDewaterWithHorizontalDrains; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionDewaterWithHorizontalDrains), value); }
        }
        public bool IsImmediateActionConstructTemporaryShoring
        {
            get { return assessmentDetails.IsImmediateActionConstructTemporaryShoring; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionConstructTemporaryShoring), value); }
        }
        public bool IsImmediateActionButtressToeOfLandslide
        {
            get { return assessmentDetails.IsImmediateActionButtressToeOfLandslide; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionButtressToeOfLandslide), value); }
        }
        public bool IsImmediateActionPlaceRockSlopeProtection
        {
            get { return assessmentDetails.IsImmediateActionPlaceRockSlopeProtection; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionPlaceRockSlopeProtection), value); }
        }
        public bool IsImmediateActionRoutineVisualMonitor
        {
            get { return assessmentDetails.IsImmediateActionRoutineVisualMonitor; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionRoutineVisualMonitor), value); }
        }
        public bool IsImmediateActionReconstructSlopeToOriginalCondition
        {
            get { return assessmentDetails.IsImmediateActionReconstructSlopeToOriginalCondition; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionReconstructSlopeToOriginalCondition), value); }
        }
        public bool IsImmediateActionReconstructSlopeWIthGeosynthetics
        {
            get { return assessmentDetails.IsImmediateActionReconstructSlopeWIthGeosynthetics; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionReconstructSlopeWIthGeosynthetics), value); }
        }
    }
}
