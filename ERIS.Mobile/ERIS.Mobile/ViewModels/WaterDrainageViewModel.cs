using System;
using System.Collections.Generic;
using System.Text;

namespace ERIS.Mobile.ViewModels
{
    public class WaterDrainageViewModel : AssessmentDetailsUpdater
    {
        public bool HasCloggedInlet
        {
            get { return assessmentDetails.HasCloggedInlet; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasCloggedInlet), value); }
        }
        public bool HasCompromisedDrains
        {
            get { return assessmentDetails.HasCompromisedDrains; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasCompromisedDrains), value); }
        }
        public bool HasSurfaceRunoff
        {
            get { return assessmentDetails.HasSurfaceRunoff; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasSurfaceRunoff), value); }
        }
        public bool HasTorrentSurgeFlood
        {
            get { return assessmentDetails.HasTorrentSurgeFlood; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasTorrentSurgeFlood), value); }
        }
        public bool HasImpactedAdjacentUtilities
        {
            get { return assessmentDetails.HasImpactedAdjacentUtilities; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasImpactedAdjacentUtilities), value); }
        }
        public bool HasImpactedAdjacentProperties
        {
            get { return assessmentDetails.HasImpactedAdjacentProperties; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasImpactedAdjacentProperties), value); }
        }
        public bool HasImpactedAdjacentStructures
        {
            get { return assessmentDetails.HasImpactedAdjacentStructures; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasImpactedAdjacentStructures), value); }
        }
        public bool HasMaybeImpactedAdjacentUtilities
        {
            get { return assessmentDetails.HasMaybeImpactedAdjacentUtilities; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasMaybeImpactedAdjacentUtilities), value); }
        }
        public bool HasMaybeImpactedAdjacentProperties
        {
            get { return assessmentDetails.HasMaybeImpactedAdjacentProperties; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasMaybeImpactedAdjacentProperties), value); }
        }
        public bool HasMaybeImpactedAdjacentStructures
        {
            get { return assessmentDetails.HasMaybeImpactedAdjacentStructures; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasMaybeImpactedAdjacentStructures), value); }
        }
    }
}
