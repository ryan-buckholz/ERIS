using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Xamarin.Essentials;

namespace ERIS.Mobile.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class GeneralReportInfoPart3Page : ContentPage
    {
        public GeneralReportInfoPart3Page()
        {
            InitializeComponent();

            DLastN.Text = Preferences.Get("DLastNameText", String.Empty);
            DFirstN.Text = Preferences.Get("DFirstNText", String.Empty);
            DSnumber.Text = Preferences.Get("DSnumberText", String.Empty);
            DPhone.Text = Preferences.Get("DPhoneText", String.Empty);
            DCellPhone.Text = Preferences.Get("DCellPhoneText", String.Empty);
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