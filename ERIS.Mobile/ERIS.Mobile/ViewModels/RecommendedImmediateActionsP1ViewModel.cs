using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class RecommendedImmediateActionsP1ViewModel : AssessmentDetailsUpdater
    {
        public ICommand getOpenedLanesOnAppearing { get; }
        public ICommand openedLanesCountUnfocused { get; }
        private void GetOpenedLanesOnAppearing()
        {
            OnPropertyChanged("OpenedLanesCount");
        }
        private void SetOpenedLanesCount(FocusEventArgs args)
        {
            SetAssessmentDetailsIntAndUpdateJsonFile(nameof(assessmentDetails.OpenedLanesCount), ((Entry)(args.VisualElement)));
        }

        public RecommendedImmediateActionsP1ViewModel()
        {
            openedLanesCountUnfocused = new Command<FocusEventArgs>(SetOpenedLanesCount);
            getOpenedLanesOnAppearing = new Command(GetOpenedLanesOnAppearing);
        }

        public string OpenedLanesCount
        {
            get { return Convert.ToString(assessmentDetails.OpenedLanesCount); }
        }

        public bool IsImmediateActionOpenHighwayTraffic
        {
            get { return assessmentDetails.IsImmediateActionOpenHighwayTraffic; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionOpenHighwayTraffic), value); }
        }
        public bool IsImmediateActionOpenHighwayShoulder
        {
            get { return assessmentDetails.IsImmediateActionOpenHighwayShoulder; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionOpenHighwayShoulder), value); }
        }
        public bool IsImmediateActionCloseHighwayOneDirection
        {
            get { return assessmentDetails.IsImmediateActionCloseHighwayOneDirection; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionCloseHighwayOneDirection), value); }
        }
        public bool IsImmediateActionCloseHighWayBothDirections
        {
            get { return assessmentDetails.IsImmediateActionCloseHighWayBothDirections; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionCloseHighWayBothDirections), value); }
        }
        public bool IsImmediateActionRemoveLandslideDebris
        {
            get { return assessmentDetails.IsImmediateActionRemoveLandslideDebris; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionRemoveLandslideDebris), value); }
        }
        public bool IsImmediateActionPlaceKRailOrFence
        {
            get { return assessmentDetails.IsImmediateActionPlaceKRailOrFence; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionPlaceKRailOrFence), value); }
        }
        public bool IsImmediateActionCoverSlopeWithPlastic
        {
            get { return assessmentDetails.IsImmediateActionCoverSlopeWithPlastic; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionCoverSlopeWithPlastic), value); }
        }
        public bool IsImmediateActionDivertSurfaceWaterRunoff
        {
            get { return assessmentDetails.IsImmediateActionDivertSurfaceWaterRunoff; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionDivertSurfaceWaterRunoff), value); }
        }
        public bool IsImmediateActionRemoveCulvertBlockage
        {
            get { return assessmentDetails.IsImmediateActionRemoveCulvertBlockage; }
            set { SetAssessmentDetailsBoolAndUpdateJsonFile(nameof(IsImmediateActionRemoveCulvertBlockage), value); }
        }
    }
}
