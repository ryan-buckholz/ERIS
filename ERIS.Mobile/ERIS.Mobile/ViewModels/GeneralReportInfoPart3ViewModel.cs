using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Essentials;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class GeneralReportInfoPart3ViewModel : AssessmentProfileUpdater
    {
        public ICommand districtContactLastNameUnfocused { get; }
        public ICommand districtContactFirstNameUnfocused { get; }
        public ICommand districtContactSNumberUnfocused { get; }
        public ICommand districtContactPhoneUnfocused { get; }
        public ICommand districtContactCellPhoneUnfocused { get; }
        public GeneralReportInfoPart3ViewModel()
        {
            if (DistrictContactLastName == null || DistrictContactLastName == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactLastName), Preferences.Get("DLastNameText", ""));
            }
            if (DistrictContactFirstName == null || DistrictContactFirstName == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactFirstName), Preferences.Get("DFirstNText", ""));
            }
            if (DistrictContactSNumber == null || DistrictContactSNumber == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactSNumber), Preferences.Get("DSnumberText", ""));
            }
            if (DistrictContactPhone == null || DistrictContactPhone == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactPhone), Preferences.Get("DPhoneText", ""));
            }
            if (DistrictContactCellPhone == null || DistrictContactCellPhone == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactCellPhone), Preferences.Get("DCellPhoneText", ""));
            }

            districtContactLastNameUnfocused = new Command<FocusEventArgs>(SetDistrictContactLastName);
            districtContactFirstNameUnfocused = new Command<FocusEventArgs>(SetDistrictContactFirstName);
            districtContactSNumberUnfocused = new Command<FocusEventArgs>(SetDistrictContactSNumber);
            districtContactPhoneUnfocused = new Command<FocusEventArgs>(SetDistrictContactPhone);
            districtContactCellPhoneUnfocused = new Command<FocusEventArgs>(SetDistrictContactCellPhone);
        }

        public string DistrictContactLastName
        {
            get { return assessmentProfile.DistrictContactLastName; }
        }
        private void SetDistrictContactLastName(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactLastName), (Entry)args.VisualElement);
        }

        public string DistrictContactFirstName
        {
            get { return assessmentProfile.DistrictContactFirstName; }
        }
        private void SetDistrictContactFirstName(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactFirstName), (Entry)args.VisualElement);
        }

        public string DistrictContactSNumber
        {
            get { return assessmentProfile.DistrictContactSNumber; }
        }
        private void SetDistrictContactSNumber(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactSNumber), (Entry)args.VisualElement);
        }

        public string DistrictContactPhone
        {
            get { return assessmentProfile.DistrictContactPhone; }
        }
        private void SetDistrictContactPhone(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactPhone), (Entry)args.VisualElement);
        }

        public string DistrictContactCellPhone
        {
            get { return assessmentProfile.DistrictContactCellPhone; }
        }
        private void SetDistrictContactCellPhone(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.DistrictContactCellPhone), (Entry)args.VisualElement);
        }
    }
}
