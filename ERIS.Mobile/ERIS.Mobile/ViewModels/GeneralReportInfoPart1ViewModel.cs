using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Essentials;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class GeneralReportInfoPart1ViewModel : AssessmentProfileUpdater
    {
        public ICommand districtUnfocused { get; }
        public ICommand countyUnfocused { get; }
        public ICommand routeUnfocused { get; }
        public ICommand postMileUnfocused { get; }
        public ICommand latitudeUnfocused { get; }
        public ICommand longitudeUnfocused { get; }
        public GeneralReportInfoPart1ViewModel()
        {
            if(Date.Year <= 1) 
            {
                Date = DateTime.Today;
            }
            if (DateIncidentReported.Year <= 1)
            {
                DateIncidentReported = DateTime.Today;
            }
            if(District == null || District == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.District), Preferences.Get("DistrictText", ""));
            }
            if (County == null || County == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.County), Preferences.Get("CountryText", ""));
            }

            districtUnfocused = new Command<FocusEventArgs>(SetDistrict);
            countyUnfocused = new Command<FocusEventArgs>(SetCounty);
            routeUnfocused = new Command<FocusEventArgs>(SetRoute);
            postMileUnfocused = new Command<FocusEventArgs>(SetPostMile);
            latitudeUnfocused = new Command<FocusEventArgs>(SetLatitude);
            longitudeUnfocused = new Command<FocusEventArgs>(SetLongitude);
        }
        public DateTime Date
        {
            get
            {
                return assessmentProfile.Date;
            }
            set
            {
                SetAssessmentProfileDateTimeAndUpdateJsonFile(nameof(assessmentProfile.Date), value);
            }
        }
        public string District
        {
            get
            {
                return assessmentProfile.District;
            }
        }
        private void SetDistrict(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.District), (Entry)args.VisualElement);
        }

        public string County
        {
            get
            {
                return assessmentProfile.County;
            }
        }
        private void SetCounty(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.County), (Entry)args.VisualElement);
        }

        public string Route
        {
            get
            {
                return assessmentProfile.Route;
            }
        }
        private void SetRoute(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.Route), (Entry)args.VisualElement);
        }

        public string PostMile
        {
            get
            {
                return Convert.ToString(assessmentProfile.PostMile);
            }
        }
        private void SetPostMile(FocusEventArgs args)
        {
            SetAssessmentProfileIntAndUpdateJsonFile(nameof(assessmentProfile.PostMile), (Entry)args.VisualElement);
        }

        public DateTime DateIncidentReported
        {
            get
            {
                return assessmentProfile.DateIncidentReported;
            }
            set
            {
                SetAssessmentProfileDateTimeAndUpdateJsonFile(nameof(assessmentProfile.DateIncidentReported), value);
            }
        }
        public string Latitude
        {
            get
            {
                return assessmentProfile.Latitude;
            }
        }
        private void SetLatitude(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.Latitude), (Entry)args.VisualElement);
        }

        public string Longitude
        {
            get
            {
                return assessmentProfile.Longitude;
            }
        }
        private void SetLongitude(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.Longitude), (Entry)args.VisualElement);
        }
    }
}
