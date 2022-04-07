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
    public partial class PavementGroundPage : ContentPage
    {
        public PavementGroundPage()
        {
            InitializeComponent();
        }
        private void Pavement_Ground_CheckedChanged(object sender, CheckedChangedEventArgs e)
        {

        }

        private void Indented_By_Rocks_CheckedChanged(object sender, CheckedChangedEventArgs e)
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
            Shell.Current.GoToAsync("//" + nameof(VegetationSlopeAndWaterContentPage));

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