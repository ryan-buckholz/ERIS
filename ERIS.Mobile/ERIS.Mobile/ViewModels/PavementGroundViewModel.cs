using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class PavementGroundViewModel : AssessmentDetailsUpdater
    {
        public bool IsPavementGroundCracks
        {
            get { return assessmentDetails.IsPavementGroundCracks; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsPavementGroundCracks), value); }
        }
        public bool IsIndentedByRocks
        {
            get { return assessmentDetails.IsIndentedByRocks; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsIndentedByRocks), value); }
        }
        public ICommand crackLengthUnfocused { get; }
        public string CrackLength
        {
            get { return Convert.ToString(assessmentDetails.CrackLength); }
        }

        public ICommand crackHorizontalDisplacementUnfocused { get; }
        public string CrackHorizontalDisplacement
        {
            get { return Convert.ToString(assessmentDetails.CrackHorizontalDisplacement); }
        }

        public ICommand crackVerticalDisplacementUnfocused { get; }
        public string CrackVerticalDisplacement
        {
            get { return Convert.ToString(assessmentDetails.CrackVerticalDisplacement); }
        }

        public ICommand crackDepthUnfocused { get; }
        public string CrackDepth
        {
            get { return Convert.ToString(assessmentDetails.CrackDepth); }
        }

        public ICommand crackSettlementUnfocused { get; }
        public string CrackSettlement
        {
            get { return Convert.ToString(assessmentDetails.CrackSettlement); }
        }

        public ICommand crackBulgeUnfocused { get; }
        public string CrackBulge
        {
            get { return Convert.ToString(assessmentDetails.CrackBulge); }
        }

        public PavementGroundViewModel()
        {
            crackLengthUnfocused = new Command<FocusEventArgs>(SetCrackLength);
            crackHorizontalDisplacementUnfocused = new Command<FocusEventArgs>(SetCrackHorizontalDisplacement);
            crackVerticalDisplacementUnfocused = new Command<FocusEventArgs>(SetCrackVerticalDisplacement);
            crackDepthUnfocused = new Command<FocusEventArgs>(SetCrackDepth);
            crackSettlementUnfocused = new Command<FocusEventArgs>(SetCrackSettlement);
            crackBulgeUnfocused = new Command<FocusEventArgs>(SetCrackBulge);
        }
        private void SetCrackLength(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.CrackLength), ((Entry)(args.VisualElement)));
        }
        private void SetCrackHorizontalDisplacement(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.CrackHorizontalDisplacement), ((Entry)(args.VisualElement)));
        }
        private void SetCrackVerticalDisplacement(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.CrackVerticalDisplacement), ((Entry)(args.VisualElement)));
        }
        private void SetCrackDepth(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.CrackDepth), ((Entry)(args.VisualElement)));
        }
        private void SetCrackSettlement(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.CrackSettlement), ((Entry)(args.VisualElement)));
        }
        private void SetCrackBulge(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.CrackBulge), ((Entry)(args.VisualElement)));
        }
    }
}
