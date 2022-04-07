using NativeMedia;
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
    public partial class IncidentTypeAndDistributionPage : ContentPage
    {
        public IncidentTypeAndDistributionPage()
        {
            InitializeComponent();
        }

        private void RockFallCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void ToppleCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void SlideCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void SpreadCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void FlowCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void CompoundCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void ErosionCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void SurfacialSloughingCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void ScouredToeCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void WashoutCheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void AdvancingRadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void RetrogressingRadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void EnlargingRadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void WideningRadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void MovingRadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void ConfinedRadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(HighwayStatus));
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(GeneralReportInfoPart3Page));
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