using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ERIS.Mobile.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class GeneralReportInfoPart3Page : ContentPage
    {
        public GeneralReportInfoPart3Page()
        {
            InitializeComponent();
        }

        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(IncidentTypeAndDistributionPage));
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {

        }
    }
}