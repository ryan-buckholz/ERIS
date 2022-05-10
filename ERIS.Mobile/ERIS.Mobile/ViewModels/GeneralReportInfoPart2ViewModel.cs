using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Input;
using Xamarin.Essentials;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class GeneralReportInfoPart2ViewModel : AssessmentProfileUpdater
    {
        public ICommand lastNameUnfocused { get; }
        public ICommand firstNameUnfocused { get; }
        public ICommand sNumberUnfocused { get; }
        public ICommand projectIDUnfocused { get; }
        public GeneralReportInfoPart2ViewModel()
        {
            if (LastName == null || LastName == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.LastName), Preferences.Get("LastNameText", ""));
            }
            if (FirstName == null || FirstName == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.FirstName), Preferences.Get("FirstNText", ""));
            }
            if (SNumber == null || SNumber == "")
            {
                SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.SNumber), Preferences.Get("SnumberText", ""));
            }

            lastNameUnfocused = new Command<FocusEventArgs>(SetLastName);
            firstNameUnfocused = new Command<FocusEventArgs>(SetFirstName);
            sNumberUnfocused = new Command<FocusEventArgs>(SetSnumber);
            projectIDUnfocused = new Command<FocusEventArgs>(SetProjectID);
        }

        public string LastName
        {
            get { return assessmentProfile.LastName; }
        }
        private void SetLastName(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.LastName), (Entry)args.VisualElement);
        }
        
        public string FirstName
        {
            get { return assessmentProfile.FirstName;}
        }
        private void SetFirstName(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.FirstName), (Entry)args.VisualElement);
        }
        
        public string SNumber
        {
            get { return assessmentProfile.SNumber; }
        }
        private void SetSnumber(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.SNumber), (Entry)args.VisualElement);
        }

        public string ProjectID
        {
            get { return assessmentProfile.ProjectID; }
        }
        private void SetProjectID(FocusEventArgs args)
        {
            SetAssessmentProfileStringAndUpdateJsonFile(nameof(assessmentProfile.ProjectID), (Entry)args.VisualElement);
        }
    }
}
