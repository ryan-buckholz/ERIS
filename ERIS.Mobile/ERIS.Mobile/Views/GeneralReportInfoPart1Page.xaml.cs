using ERIS.Mobile.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Essentials;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ERIS.Mobile.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class GeneralReportInfoPart1Page : ContentPage
    {
        public GeneralReportInfoPart1Page()
        {
            InitializeComponent();
            BindingContext = new GeneralReportInfoPart1ViewModel();
        }

        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart2Page));
        }

        private async void Save_Button_Clicked(object sender, EventArgs e)
        {
            bool alertResult = await DisplayAlert("WARNING", "Are you sure you want to save new default report data and override all current defaults?", "Yes", "No");
            if (alertResult == true)
            {
                Preferences.Set("DistrictText", District.Text);
                Preferences.Set("CountryText", County.Text);
            }
        }

        private async void Clear_Button_Clicked(object sender, EventArgs e)
        {
            bool alertResult = await DisplayAlert("WARNING", "Are you sure you want to clear ALL of your saved default report data?", "Yes", "No");
            if (alertResult == true)
            {
                Preferences.Clear();
            }
        }
    }
}