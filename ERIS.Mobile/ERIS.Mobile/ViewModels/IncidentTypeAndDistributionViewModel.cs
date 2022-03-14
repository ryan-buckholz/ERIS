using System;
using System.Collections.Generic;
using System.Text;
using ERIS.Mobile.Services;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class IncidentTypeAndDistributionViewModel : BindableObject
    {
        AssessmentDetailsJsonFileManager assessmentDetailsJsonFileManager;
        public IncidentTypeAndDistributionViewModel()
        {
            assessmentDetailsJsonFileManager = DependencyService.Get<AssessmentDetailsJsonFileManager>();
        }
    }
}
