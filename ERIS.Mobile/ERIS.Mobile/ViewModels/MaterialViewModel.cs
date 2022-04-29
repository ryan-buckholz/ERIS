using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class MaterialViewModel : AssessmentDetailsUpdater
    {
        public bool IsRock
        {
            get { return assessmentDetails.IsRock; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsRock), value); }
        }
        public bool HasBedding
        {
            get { return assessmentDetails.HasBedding; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasBedding), value); }
        }
        public bool HasJoints
        {
            get { return assessmentDetails.HasJoints; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasJoints), value); }
        }
        public bool HasFractures
        {
            get { return assessmentDetails.HasFractures; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(HasFractures), value); }
        }
        public bool IsSoil
        {
            get { return assessmentDetails.IsSoil; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsSoil), value); }
        }

        public ICommand clayEstimateUnfocused { get; }
        public string ClayEstimate
        {
            get { return Convert.ToString(assessmentDetails.ClayEstimate); }
        }

        public ICommand siltEstimateUnfocused { get; }
        public string SiltEstimate
        {
            get { return Convert.ToString(assessmentDetails.SiltEstimate); }
        }

        public ICommand sandEstimateUnfocused { get; }
        public string SandEstimate
        {
            get { return Convert.ToString(assessmentDetails.SandEstimate); }
        }

        public ICommand gravelEstimateUnfocused { get; }
        public string GravelEstimate
        {
            get { return Convert.ToString(assessmentDetails.GravelEstimate); }
        }


        public MaterialViewModel()
        {
            clayEstimateUnfocused = new Command<FocusEventArgs>(SetClayEstimate);
            siltEstimateUnfocused = new Command<FocusEventArgs>(SetSiltEstimate);
            sandEstimateUnfocused = new Command<FocusEventArgs>(SetSandEstimate);
            gravelEstimateUnfocused = new Command<FocusEventArgs>(SetGravelEstimate);
        }
        private void SetClayEstimate(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.ClayEstimate), ((Entry)(args.VisualElement)));
        }
        private void SetSiltEstimate(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.SiltEstimate), ((Entry)(args.VisualElement)));
        }
        private void SetSandEstimate(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.SandEstimate), ((Entry)(args.VisualElement)));
        }
        private void SetGravelEstimate(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.GravelEstimate), ((Entry)(args.VisualElement)));
        }
    }
}
