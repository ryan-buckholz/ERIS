using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class MeasurementsViewModel : AssessmentDetailsUpdater
    {
        public ICommand slopeHeightUnfocused { get; }
        public ICommand originalSlopeUnfocused { get; }
        public ICommand landslideWidthUnfocused { get; }
        public ICommand landslideLengthUnfocused { get; }
        public ICommand mainScarpHeightUnfocused { get; }
        public ICommand landslideSlopeUnfocused { get; }
        public ICommand roadwayEncroachedLengthUnfocused { get; }
        public ICommand roadwayEncroachedWidthUnfocused { get; }

        public MeasurementsViewModel()
        {
            slopeHeightUnfocused = new Command<FocusEventArgs>(SetSlopeHeight);
            originalSlopeUnfocused = new Command<FocusEventArgs>(SetOriginalSlope);
            landslideWidthUnfocused = new Command<FocusEventArgs>(SetLandslideWidth);
            landslideLengthUnfocused = new Command<FocusEventArgs>(SetLandslideLength);
            mainScarpHeightUnfocused = new Command<FocusEventArgs>(SetMainScarpHeight);
            landslideSlopeUnfocused = new Command<FocusEventArgs>(SetLandslideSlope);
            roadwayEncroachedLengthUnfocused = new Command<FocusEventArgs>(SetRoadwayEncroachedLength);
            roadwayEncroachedWidthUnfocused = new Command<FocusEventArgs>(SetRoadwayEncroachedWidth);
        }

        private void SetSlopeHeight(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.SlopeHeight), ((Entry)(args.VisualElement)));
        }
        private void SetOriginalSlope(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.OriginalSlope), ((Entry)(args.VisualElement)));
        }
        private void SetLandslideWidth(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.LandslideWidth), ((Entry)(args.VisualElement)));
        }
        private void SetLandslideLength(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.LandslideLength), ((Entry)(args.VisualElement)));
        }
        private void SetMainScarpHeight(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.MainScarpHeight), ((Entry)(args.VisualElement)));
        }
        private void SetLandslideSlope(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.LandslideSlope), ((Entry)(args.VisualElement)));
        }
        private void SetRoadwayEncroachedLength(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.RoadwayEncroachedLength), ((Entry)(args.VisualElement)));
        }
        private void SetRoadwayEncroachedWidth(FocusEventArgs args)
        {
            SetAssessmentDetailsDecimalAndUpdateJsonFile(nameof(assessmentDetails.RoadwayEncroachedWidth), ((Entry)(args.VisualElement)));
        }
    }
}
