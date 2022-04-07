using NativeMedia;
using System;
using System.Collections.Generic;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace ERIS.Mobile.Views
{

    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class HighwayStatus : ContentPage
    {
        public HighwayStatus()
        {
            InitializeComponent();
        }

        private void Open_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Shoulder_Closed_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Lanes_Closed_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void One_Way_Closed_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Two_Way_Closed_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {

        }
        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(RecommendedImmediateActionsP1));

        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(IncidentTypeAndDistributionPage));
        }

        private async void OnPickImagesClick(object sender, EventArgs e)
        {
            var results = await MediaGallery.PickAsync(1, MediaFileType.Image, MediaFileType.Video);

            if (results?.Files == null)
            {
                return;
            }

            foreach (var media in results.Files)
            {
                var fileName = media.NameWithoutExtension;
                var extension = media.Extension;
                var contentType = media.ContentType;

                await DisplayAlert(fileName, $"Extension: {extension}, Content-Type:{contentType}", "Ok");
            }

        }
    }
}
