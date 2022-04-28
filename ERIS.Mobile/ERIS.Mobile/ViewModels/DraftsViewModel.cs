using System;
using System.Collections.Generic;
using System.Text;

using Xamarin.Forms;
using ERIS.Mobile.Views;
using ERIS.Mobile.Services;
using System.Windows.Input;

namespace ERIS.Mobile.ViewModels
{
    public class DraftsViewModel : BindableObject
    {
        AssessmentDetailsSerializer assessmentDetailsSerializer;
        public DraftsViewModel()
        {
            assessmentDetailsSerializer = DependencyService.Get<AssessmentDetailsSerializer>();
            newReportButtonPressed = new Command(New_Report_Button_Clicked);
            continueCurrentReportButtonPressed = new Command(GoToAssessmentIfAssessmentDataExists);
        }
        public ICommand newReportButtonPressed { get; }
        public ICommand continueCurrentReportButtonPressed { get; }

        public async void New_Report_Button_Clicked()
        {
            bool answer = await Application.Current.MainPage.DisplayAlert("Warning", "Creating a new report will delete all data from any previously created report. Are you sure you want to create a new report?", "Yes", "No");
            if(answer == true) {
                assessmentDetailsSerializer.CreateNulledAssessmentDetailsJsonFile();
                await Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart1Page));
            }
        }

        private void GoToAssessmentIfAssessmentDataExists()
        {
            if (assessmentDetailsSerializer.AssessmentDataExists())
            {
                Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart1Page));
            }
        }
    }
}
