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
    public partial class SiteAssignment1 : ContentPage
    {
        public SiteAssignment1()
        {
            InitializeComponent();
        }

        private void Button_Clicked(object sender, EventArgs e)
        {
            Navigation.PushModalAsync(new SiteAssessment2());

        }

        private async void Geolocate_Clicked(Object sender, EventArgs e)
        {
            try
            {

                var location = await Geolocation.GetLastKnownLocationAsync();
                if(location == null)
                {
                    location = await Geolocation.GetLocationAsync(new GeolocationRequest
                    {
                        DesiredAccuracy = GeolocationAccuracy.Medium,
                        Timeout = TimeSpan.FromSeconds(30)
                    });
                }

                if(location == null)
                {
                    Latitude.Text = "NO GPS";
                    Longitude.Text = "NO GPS";
                } else
                {
                    Latitude.Text = $"{location.Latitude}";
                    Longitude.Text = $"{location.Longitude}";
                }

            } catch (Exception ex)
            {
                DisplayAlert("Error: No Location Found", "Pls try again, or type in location manually", "OK");
            }
        }
    }
}