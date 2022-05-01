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

        private async void Geolocate_Clicked(Object sender, EventArgs e)
        {
            try
            {

                var location = await Geolocation.GetLastKnownLocationAsync();
                if (location == null)
                {
                    location = await Geolocation.GetLocationAsync(new GeolocationRequest
                    {
                        DesiredAccuracy = GeolocationAccuracy.Medium,
                        Timeout = TimeSpan.FromSeconds(30)
                    });
                }

                if (location == null)
                {
                    Latitude.Text = "NO GPS";
                    Longitude.Text = "NO GPS";
                }
                else
                {
                    Latitude.Text = $"{location.Latitude}";
                    Longitude.Text = $"{location.Longitude}";
                }

            }
            catch (Exception ex)
            {
                DisplayAlert("Error: No Location Found", "Pls try again, or type in location manually", "OK");
            }
        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {
            Preferences.Set("DistrictText", District.Text);
            Preferences.Set("CountryText", County.Text);
        }

        private void Clear_Button_Clicked(object sender, EventArgs e)
        {
            Preferences.Clear();
        }
    }
}