using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Xamarin.Essentials;
using ERIS.Mobile.ViewModels;

namespace ERIS.Mobile.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class GeneralReportInfoPart3Page : ContentPage
    {
        public GeneralReportInfoPart3Page()
        {
            InitializeComponent();
            BindingContext = new GeneralReportInfoPart3ViewModel();
        }

        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(IncidentTypeAndDistributionPage));
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart2Page));
        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {
            Preferences.Set("DLastNameText", DLastN.Text);
            Preferences.Set("DFirstNText", DFirstN.Text);
            Preferences.Set("DSnumberText", DSnumber.Text);
            Preferences.Set("DPhoneText", DPhone.Text);
            Preferences.Set("DCellPhoneText", DCellPhone.Text);
        }

        private void Clear_Button_Clicked(object sender, EventArgs e)
        {
            Preferences.Clear();
        }
    }
}