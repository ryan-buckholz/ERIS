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
        }
        public ICommand newReportButtonPressed { get; }

        public void New_Report_Button_Clicked()
        {
            assessmentDetailsSerializer.CreateNulledAssessmentDetailsJsonFile();
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart1Page));
        }
    }
}
