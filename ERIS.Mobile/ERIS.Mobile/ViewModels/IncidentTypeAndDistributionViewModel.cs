using System;
using System.Collections.Generic;
using System.Text;
using ERIS.Mobile.Services;
using Xamarin.Forms;

namespace ERIS.Mobile.ViewModels
{
    public class IncidentTypeAndDistributionViewModel : BindableObject
    {
        AssessmentDetailsSerializer AssessmentDetailsSerializer;
        public IncidentTypeAndDistributionViewModel()
        {
            AssessmentDetailsSerializer = DependencyService.Get<AssessmentDetailsSerializer>();
        }
    }
}
