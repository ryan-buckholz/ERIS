using ERIS.Mobile.ViewModels;
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
    public partial class VegetationSlopeAndWaterContentPage : ContentPage
    {
        public VegetationSlopeAndWaterContentPage()
        {
            InitializeComponent();
            BindingContext = new VegetationSlopeAndWaterContentViewModel();
        }

        private void Dry_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Moist_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Wet_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Flowing_CheckBox_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Seep_RadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }
        private void Spring_RadioButton_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Save_Button_Clicked(object sender, EventArgs e)
        {

        }
        private void Next_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(WaterDrainagePage));
        }
        private void Back_Button_Clicked(object sender, EventArgs e)
        {
            Shell.Current.GoToAsync("//" + nameof(MaterialPage));
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