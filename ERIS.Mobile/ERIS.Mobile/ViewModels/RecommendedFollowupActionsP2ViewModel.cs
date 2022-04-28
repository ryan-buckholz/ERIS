using System;
using System.Collections.Generic;
using System.Text;

namespace ERIS.Mobile.ViewModels
{
    public class RecommendedFollowupActionsP2ViewModel : AssessmentDetailsUpdater
    {

        public bool IsFollowUpActionReconstructSlopeWithGeosynthetics
        {
            get { return assessmentDetails.IsFollowUpActionReconstructSlopeWithGeosynthetics; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionReconstructSlopeWithGeosynthetics), value); }
        }
        public bool IsFollowUpActionRepairCulvertDrainagePipe
        {
            get { return assessmentDetails.IsFollowUpActionRepairCulvertDrainagePipe; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionRepairCulvertDrainagePipe), value); }
        }
        public bool IsFollowUpActionInstallErosionControl
        {
            get { return assessmentDetails.IsFollowUpActionInstallErosionControl; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionInstallErosionControl), value); }
        }
        public bool IsFollowUpActionSurveySite
        {
            get { return assessmentDetails.IsFollowUpActionSurveySite; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionSurveySite), value); }
        }
        public bool IsFollowUpActionGeologicalMapping
        {
            get { return assessmentDetails.IsFollowUpActionGeologicalMapping; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionGeologicalMapping), value); }
        }
        public bool IsFollowUpActionSubsurfaceExploration
        {
            get { return assessmentDetails.IsFollowUpActionSubsurfaceExploration; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionSubsurfaceExploration), value); }
        }
        public bool IsFollowUpActionDesignAndPlans
        {
            get { return assessmentDetails.IsFollowUpActionDesignAndPlans; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFollowUpActionDesignAndPlans), value); }
        }
    }
}
