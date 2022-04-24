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
        public string SlopeHeight
        {
            get { return Convert.ToString(assessmentDetails.SlopeHeight); }
        }

        public ICommand originalSlopeUnfocused { get; }
        public string OriginalSlope
        {
            get { return Convert.ToString(assessmentDetails.OriginalSlope); }
        }

        public ICommand landslideWidthUnfocused { get; }
        public string LandslideWidth
        {
            get { return Convert.ToString(assessmentDetails.LandslideWidth); }
        }

        public ICommand landslideLengthUnfocused { get; }
        public string LandslideLength
        {
            get { return Convert.ToString(assessmentDetails.LandslideLength); }
        }

        public ICommand mainScarpHeightUnfocused { get; }
        public string MainScarpHeight
        {
            get { return Convert.ToString(assessmentDetails.MainScarpHeight); }
        }

        public ICommand landslideSlopeUnfocused { get; }
        public string LandslideSlope
        {
            get { return Convert.ToString(assessmentDetails.LandslideSlope); }
        }

        public ICommand roadwayEncroachedLengthUnfocused { get; }
        public string RoadwayEncroachedLength
        {
            get { return Convert.ToString(assessmentDetails.RoadwayEncroachedLength); }
        }

        public ICommand roadwayEncroachedWidthUnfocused { get; }
        public string RoadwayEncroachedWidth
        {
            get { return Convert.ToString(assessmentDetails.RoadwayEncroachedWidth); }
        }


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
