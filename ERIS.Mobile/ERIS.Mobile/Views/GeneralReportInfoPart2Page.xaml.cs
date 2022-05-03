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
    public partial class GeneralReportInfoPart2Page : ContentPage
    {
        public GeneralReportInfoPart2Page()
        {
            InitializeComponent();
            BindingContext = new GeneralReportInfoPart2ViewModel();
        }

        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart3Page));
        }

        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart1Page));
        }

        private async void Save_Button_Clicked(object sender, EventArgs e)
        {
            bool alertResult = await DisplayAlert("WARNING", "Are you sure you want to save new default report data and override all current defaults?", "Yes", "No");
            if (alertResult == true)
            {
                Preferences.Set("LastNameText", LastN.Text);
                Preferences.Set("FirstNText", FirstN.Text);
                Preferences.Set("SnumberText", Snumber.Text);
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