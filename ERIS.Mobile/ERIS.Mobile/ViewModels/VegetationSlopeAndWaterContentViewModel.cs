using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class VegetationSlopeAndWaterContentViewModel : AssessmentDetailsUpdater
    {
        public ICommand treesCoverageOnSlopeUnfocused { get; }
        private void SetTreesCoverageOnSlope(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.TreesCoverageOnSlope), ((Entry)(args.VisualElement)));
        }
        public string TreesCoverageOnSlope
        {
            get { return Convert.ToString(assessmentDetails.TreesCoverageOnSlope); }
        }

        public ICommand brushesShrubsCoverageOnSlopeUnfocused { get; }
        private void SetBrushesShrubsCoverageOnSlope(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.BrushesShrubsCoverageOnSlope), ((Entry)(args.VisualElement)));
        }
        public string BrushesShrubsCoverageOnSlope
        {
            get { return Convert.ToString(assessmentDetails.BrushesShrubsCoverageOnSlope); }
        
        }

        public ICommand groundCoverCoverageOnSlopeUnfocused { get; }
        private void SetGroundCoverCoverageOnSlope(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.GroundCoverCoverageOnSlope), ((Entry)(args.VisualElement)));
        }
        public string GroundCoverCoverageOnSlope
        {
            get { return Convert.ToString(assessmentDetails.GroundCoverCoverageOnSlope); }
        }

        public VegetationSlopeAndWaterContentViewModel()
        {
            treesCoverageOnSlopeUnfocused = new Command<FocusEventArgs>(SetTreesCoverageOnSlope);
            brushesShrubsCoverageOnSlopeUnfocused = new Command<FocusEventArgs>(SetBrushesShrubsCoverageOnSlope);
            groundCoverCoverageOnSlopeUnfocused = new Command<FocusEventArgs>(SetGroundCoverCoverageOnSlope);
        }

        public bool IsDry
        {
            get { return assessmentDetails.IsDry; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsDry), value); }
        }
        public bool IsMoist
        {
            get { return assessmentDetails.IsMoist; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsMoist), value); }
        }
        public bool IsWet
        {
            get { return assessmentDetails.IsWet; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsWet), value); }
        }
        public bool IsFlowingWater
        {
            get { return assessmentDetails.IsFlowingWater; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsFlowingWater), value); }
        }
        public bool IsSeep
        {
            get { return assessmentDetails.IsSeep; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsSeep), value); }
        }
        public bool IsSpring
        {
            get { return assessmentDetails.IsSpring; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsSpring), value); }
        }
    }
}
